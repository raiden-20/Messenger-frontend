import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {
    AUTHORIZATION,
    REGISTRATION, REGISTRATION_FORGOT_PASSWORD, REGISTRATION_RESTORE_ACCOUNT
} from "../../../paths/authPath";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
import {Auth} from "../../../axios/auth/AuthAxios";
import {PROFILE_USER} from "../../../paths/profilePath";
const RegistrationOrAuthorisationClass = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname !== '' && props.input_password !== '') {
            Auth.RegistrationOrAuthorizationAxios({
                input_email: props.input_email, input_nickname: props.input_nickname, input_password: props.input_password
            }).then(response => {
                props.setShowMessage(true)
                props.setCode(response[0])
                props.setMessage(response[1])
                switch (response[0]) {
                    case 200 : {
                        props.setShowMessage(false)
                        props.setMessage('')

                        if (response[1].token.split(' ').length === 2) {
                            localStorage.setItem('token', response[1].token.split(' ')[1])
                        } else {
                            localStorage.setItem('token', response[1].token)
                        }
                        localStorage.setItem('id', response[1].id)
                        localStorage.setItem('idUser', response[1].id)
                        localStorage.setItem('password', props.input_password)

                        navigate(PROFILE_USER)
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            props.setMessage('Такого пользователя не существует')
                        }else if (response[1] === 'Password mismatch') {
                            props.setMessage('Неверный пароль')
                        }

                        navigate(AUTHORIZATION)
                        break
                    }
                    case 403 : {
                        props.setMessage('Аккаунт не активирован')
                        localStorage.setItem('id', response[1])

                        navigate(REGISTRATION_RESTORE_ACCOUNT)
                        break
                    }
                }
            })
        }
        cleanMessageAndChangePath()
    }

    const forgotPassword = () => {
        props.setShowMessage(false)
        navigate(REGISTRATION_FORGOT_PASSWORD)
    }

    const cleanMessageAndChangePath = () => {
        props.setMessage('')
        props.setInputEmail('')
        props.setInputEmailOrNickname('')
        props.setInputNickname('')
        props.setInputPassword('')
        props.setInputPasswordShow('')
        props.setShowMessage(false)
    }

    const toRegistration = () => {
        cleanMessageAndChangePath()
        navigate(REGISTRATION)
    }

    return <RegistrationOrAuthorisationComponent input_email={props.input_email}
                                                 input_nickname={props.input_nickname}
                                                 input_password={props.input_password}
                                                 input_emailOrNickname={props.input_emailOrNickname}
                                                 message={props.message}
                                                 setInputEmail={props.setInputEmail}
                                                 setInputPassword={props.setInputPassword}
                                                 setInputNickname={props.setInputNickname}
                                                 setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                 setMessage={props.setMessage}
                                                 authorise={authorise}
                                                 toRegistration={toRegistration}
                                                 forgotPassword={forgotPassword}
                                                 code={props.code}
                                                 setCode={props.setCode}
                                                 buttonShowMessage={props.buttonShowMessage}
                                                 setShowMessage={props.setShowMessage}
                                                 input_passwordShow={props.input_passwordShow}
                                                 setInputPasswordShow={props.setInputPasswordShow}/>
}

export default RegistrationOrAuthorisationClass