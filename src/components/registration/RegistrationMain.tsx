import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import Registration from "./registration/Registration";

import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import RegistrationOrAuthorisation from "./registration_or_authorization/RegistrationOrAuthorisation";
import RegistrationForgotPassword from "./registration_forgot_password/RegistrationForgotPassword";
import RestoreAccount from "./restore_account/RestoreAccount";
import {PropsAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL
} from "../paths/authPath";
import {PropsProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import MainSuccess from "./successful_registration_restoring/MainSuccess";

const Registration_main = (props : PropsAuthReg & PropsProfileNameSurname) => {
    const navigate = useNavigate()

    const clickToHeader = () => {
        props.setCode(0)
        props.setShowMessage(false)
        navigate(AUTHORIZATION)

        props.setInputEmail('')
        props.setInputNickname('')
        props.setInputPassword('')
        props.setInputConfirmPassword('')
    }

    const location = useLocation()
    return (
        <div className={page_reg.div}>
            <section className={page_reg.content}>
                <header className={options_reg.header} onClick={clickToHeader}>
                    <button onClick={clickToHeader} className={options_reg.button_header}>
                        СимОн
                    </button>
                </header>
                {location.pathname === AUTHORIZATION ? <RegistrationOrAuthorisation input_email={props.input_email}
                                                                                    input_nickname={props.input_nickname}
                                                                                    input_password={props.input_password}
                                                                                    setEmail={props.setEmail}
                                                                                    setNickname={props.setNickname}
                                                                                    setPassword={props.setPassword}
                                                                                    setInputEmail={props.setInputEmail}
                                                                                    setInputNickname={props.setInputNickname}
                                                                                    setInputPassword={props.setInputPassword}
                                                                                    message={props.message}
                                                                                    setMessage={props.setMessage}
                                                                                    input_emailOrNickname={props.input_emailOrNickname}
                                                                                    setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                                                    setToken={props.setToken}
                                                                                    token={props.token}
                                                                                    code={props.code}
                                                                                    setCode={props.setCode}
                                                                                    buttonShowMessage={props.buttonShowMessage}
                                                                                    setShowMessage={props.setShowMessage}/> :
                location.pathname === REGISTRATION ? <Registration input_email={props.input_email}
                                                                   input_nickname={props.input_nickname}
                                                                   input_password={props.input_password}
                                                                   input_confirmPassword={props.input_confirmPassword}
                                                                   setEmail={props.setEmail}
                                                                   setNickname={props.setNickname}
                                                                   setPassword={props.setPassword}
                                                                   setConfirmPassword={props.setConfirmPassword}
                                                                   setInputEmail={props.setInputEmail}
                                                                   setInputNickname={props.setInputNickname}
                                                                   setInputPassword={props.setInputPassword}
                                                                   setInputConfirmPassword={props.setInputConfirmPassword}
                                                                   message={props.message}
                                                                   setMessage={props.setMessage}
                                                                   input_emailOrNickname={props.input_emailOrNickname}
                                                                   setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                                   code={props.code}
                                                                   setCode={props.setCode}
                                                                   buttonShowMessage={props.buttonShowMessage}
                                                                   setShowMessage={props.setShowMessage}
                                                                   input_name={props.input_name}
                                                                   setName={props.setName}
                                                                   setInputName={props.setInputName}/> :
                location.pathname === REGISTRATION_FORGOT_PASSWORD ? <RegistrationForgotPassword input_email={props.input_email}
                                                                                                 setInputEmail={props.setInputEmail}
                                                                                                 message={props.message}
                                                                                                 setMessage={props.setMessage}
                                                                                                 code={props.code}
                                                                                                 setCode={props.setCode}
                                                                                                 buttonShowMessage={props.buttonShowMessage}
                                                                                                 setShowMessage={props.setShowMessage}/> :
                location.pathname === REGISTRATION_RESTORE_ACCOUNT ? <RestoreAccount message={props.message}
                                                                                     setMessage={props.setMessage}
                                                                                     /> :
                location.pathname === SUCCESSFUL_ACTIVATION ? <MainSuccess message={props.message}
                                                                           setMessage={props.setMessage}
                                                                           setEmail={props.setEmail}
                                                                           newEmail={props.newEmail}
                                                                           token={props.token}
                                                                           id={props.id}
                                                                           setId={props.setId}
                                                                           setToken={props.setToken}
                                                                           email={props.email}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <MainSuccess message={props.message}
                                                                             setMessage={props.setMessage} setEmail={props.setEmail}
                                                                             newEmail={props.newEmail}
                                                                             token={props.token}
                                                                             id={props.id}
                                                                             setId={props.setId}
                                                                             setToken={props.setToken}
                                                                             email={props.email}/> : null}
            </section>
        </div>
    )
}

export default Registration_main