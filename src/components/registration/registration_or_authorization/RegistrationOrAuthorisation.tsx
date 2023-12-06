import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {PROFILE} from "../../paths/profilePath";
import {
    AUTHORIZATION,
    REGISTRATION
} from "../../paths/authPath";
import axios from "axios";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
const RegistrationOrAuthorisation = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname != null && props.input_password != null) {
            axios.post('http://localhost:8000/auth/login', {
                email: props.input_email,
                nickname: props.input_nickname,
                password: props.input_password,
            }).then(response => {
                switch (response.status) {
                    case 200 : {
                        props.setToken(response.data)
                        localStorage.setItem('token', response.data)
                        localStorage.setItem('password', props.input_password)
                        localStorage.setItem('id', 'c5c389b5-0bf2-4deb-866f-6b34bbfa3b88')

                        cleanMessageAndChangePath()

                        navigate(PROFILE)
                        break
                    }
                    default:
                }
                props.setInputEmail(null)
                props.setInputPassword(null)
            }).catch(error => {
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
                    case 409 : {
                        if (error.response.data === "Account has already been blocked") {
                            props.setMessage('Аккаунт заблокирован')
                        }
                        navigate(AUTHORIZATION)
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

    const cleanMessageAndChangePath = () => {
        props.setMessage('')
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
                                                 cleanMessageAndChangePath={cleanMessageAndChangePath}/>
}

export default RegistrationOrAuthorisation