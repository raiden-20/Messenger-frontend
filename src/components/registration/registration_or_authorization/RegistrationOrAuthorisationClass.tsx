import React from "react";
import { useNavigate } from 'react-router-dom';
import {PropsAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {
    AUTHORIZATION,
    REGISTRATION, REGISTRATION_FORGOT_PASSWORD, REGISTRATION_RESTORE_ACCOUNT
} from "../../../paths/authPath";
import RegistrationOrAuthorisationComponent from "./RegistrationOrAuthorisationComponent";
import {PROFILE_USER} from "../../../paths/profilePath";
const RegistrationOrAuthorisationClass = (props : PropsAuthAuth) => {

    const navigate = useNavigate()
    const authorise = () => {
        if (props.input_emailOrNickname !== '' && props.input_password !== '') {
            props.Authorization(props.input_email, props.input_nickname, props.input_password)
            if (localStorage.getItem('idUser') !== null) {
                navigate(PROFILE_USER)
            } else if (localStorage.getItem('id') !== null) {
                navigate(REGISTRATION_RESTORE_ACCOUNT)
            } else {
                navigate(AUTHORIZATION)
            }
            //
            // switch (props.code) {
            //     case 200 : {
            //         navigate(PROFILE_USER)
            //         break
            //     }
            //     case 400 : {
            //         navigate(AUTHORIZATION)
            //         break
            //     }
            //     case 403 : {
            //         navigate(REGISTRATION_RESTORE_ACCOUNT)
            //         break
            //     }
            // }
        }
        cleanMessageAndChangePath()
    }

    const forgotPassword = () => {
        props.setShowMessage(false)
        navigate(REGISTRATION_FORGOT_PASSWORD)
    }

    const cleanMessageAndChangePath = () => {
        props.setMessage('')
        props.setInputClearData()
        props.setShowMessage(false)
    }

    const toRegistration = () => {
        cleanMessageAndChangePath()
        navigate(REGISTRATION)
    }

    return (
        <RegistrationOrAuthorisationComponent input_email={props.input_email}
                                                 input_nickname={props.input_nickname}
                                                 input_password={props.input_password}
                                                 input_emailOrNickname={props.input_emailOrNickname}
                                                 message={props.message}
                                                 setInputEmail={props.setInputEmail}
                                                 setInputPassword={props.setInputPassword}
                                                 setInputNickname={props.setInputNickname}
                                                 setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                 authorise={authorise}
                                                 toRegistration={toRegistration}
                                                 forgotPassword={forgotPassword}
                                                 buttonShowMessage={props.buttonShowMessage}
                                                 input_passwordShow={props.input_passwordShow}
                                              code={props.code}/>
    )
}

export default RegistrationOrAuthorisationClass