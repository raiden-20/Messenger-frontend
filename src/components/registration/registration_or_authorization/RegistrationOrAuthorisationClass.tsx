import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {
    REGISTRATION, REGISTRATION_FORGOT_PASSWORD
} from "../../paths/authPath";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
import {RegistrationOrAuthorizationAxios} from "../../axios/auth/AuthAxios";
const RegistrationOrAuthorisationClass = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname !== '' && props.input_password !== '') {
            RegistrationOrAuthorizationAxios({
                input_email: props.input_email,
                input_nickname: props.input_nickname,
                input_password: props.input_password,
                cleanMessageAndChangePath: cleanMessageAndChangePath,
                setInputEmail: props.setInputEmail,
                setInputPassword: props.setInputPassword,
                setShowMessage: props.setShowMessage,
                setCode: props.setCode,
                setMessage: props.setMessage
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