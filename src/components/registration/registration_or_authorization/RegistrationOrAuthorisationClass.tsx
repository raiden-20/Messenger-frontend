import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {PROFILE_USER} from "../../paths/profilePath";
import {
    AUTHORIZATION,
    REGISTRATION, REGISTRATION_FORGOT_PASSWORD, REGISTRATION_RESTORE_ACCOUNT
} from "../../paths/authPath";
import axios from "axios";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
const RegistrationOrAuthorisationClass = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname !== '' && props.input_password !== '') {
            axios.post('http://localhost:8080/auth/login', {
                email: props.input_email,
                nickname: props.input_nickname,
                password: props.input_password,
            }).then(response => {
                props.setCode(response.status)
                props.setShowMessage(false)
                switch (response.status) {
                    case 200 : {
                        if (response.data.token.split(' ').length === 2) {
                            localStorage.setItem('token', response.data.token.split(' ')[1])
                        } else {
                            localStorage.setItem('token', response.data.token)
                        }
                        localStorage.setItem('id', response.data.id)
                        localStorage.setItem('idUser', response.data.id)
                        localStorage.setItem('password', props.input_password)

                        cleanMessageAndChangePath()

                        navigate(PROFILE_USER)
                        break
                    }
                    default:
                }
                props.setInputEmail(null)
                props.setInputPassword(null)
            }).catch(error => {
                props.setShowMessage(true)
                props.setCode(error.response.status)
                console.dir(error)
                props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            props.setMessage('Такого пользователя не существует')
                        }else if (error.response.data === 'Password mismatch') {
                            props.setMessage('Неверный пароль')
                        }
                        navigate(AUTHORIZATION)
                        break
                    }
                    case 403 : {
                        props.setMessage('Аккаунт не активирован')
                        localStorage.setItem('id', error.response.data)
                        navigate(REGISTRATION_RESTORE_ACCOUNT)
                        break
                    }
                    default:
                }
            })
        }
        props.setInputEmail('')
        props.setInputNickname('')
        props.setInputEmailOrNickname('')
        props.setInputPassword('')
        // else
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
        navigate(REGISTRATION)
    }

    return <RegistrationOrAuthorisationComponent input_email={props.input_email}
                                                 input_nickname={props.input_nickname}
                                                 input_password={props.input_password}
                                                 input_emailOrNickname={props.input_emailOrNickname}
                                                 message={props.message}
                                                 token={props.token}
                                                 setInputEmail={props.setInputEmail}
                                                 setInputPassword={props.setInputPassword}
                                                 setInputNickname={props.setInputNickname}
                                                 setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                 setMessage={props.setMessage}
                                                 setToken={props.setToken}
                                                 authorise={authorise}
                                                 cleanMessageAndChangePath={cleanMessageAndChangePath}
                                                 forgotPassword={forgotPassword}
                                                 code={props.code}
                                                 setCode={props.setCode}
                                                 buttonShowMessage={props.buttonShowMessage}
                                                 setShowMessage={props.setShowMessage}
                                                 input_passwordShow={props.input_passwordShow}
                                                 setInputPasswordShow={props.setInputPasswordShow}/>
}

export default RegistrationOrAuthorisationClass