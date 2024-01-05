import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {
    AUTHORIZATION,
    REGISTRATION, REGISTRATION_FORGOT_PASSWORD, REGISTRATION_RESTORE_ACCOUNT
} from "../../paths/authPath";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
import {RegistrationOrAuthorizationAxios} from "../../axios/auth/AuthAxios";
import {PROFILE_USER} from "../../paths/profilePath";
const RegistrationOrAuthorisationClass = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname !== '' && props.input_password !== '') {
            let enter = RegistrationOrAuthorizationAxios({
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
            enter.then(response => {
                switch (response) {
                    case 200: {
                        navigate(PROFILE_USER)
                        break
                    }
                    case 400: {
                        navigate(AUTHORIZATION)
                        break
                    }
                    case 403: {
                        navigate(REGISTRATION_RESTORE_ACCOUNT)
                        break
                    }
                }
            })
        }

        props.setInputEmail('')
        props.setInputNickname('')
        props.setInputEmailOrNickname('')
        props.setInputPassword('')
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