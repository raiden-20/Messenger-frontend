import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import RegistrationClass from "./registration/RegistrationClass";
import RegistrationOrAuthorisationClass from "./registration_or_authorization/RegistrationOrAuthorisationClass";
import RegistrationForgotPasswordClass from "./registration_forgot_password/RegistrationForgotPasswordClass";
import RestoreAccountComponent from "./restore_account/RestoreAccountComponent";
import MainSuccessComponent from "./successful_registration_restoring/MainSuccessComponent";

import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';

import {PropsAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {PropsProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";

import {
    AUTHORIZATION, REGISTRATION, REGISTRATION_FORGOT_PASSWORD, REGISTRATION_RESTORE_ACCOUNT,
    SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL, SUCCESSFUL_SENT_MESSSAGE
} from "../../paths/authPath";


const Registration_main = (props : PropsAuthReg & PropsProfileNameSurname) => {
    const navigate = useNavigate()

    const clickToHeader = () => {
        props.setCode(0)
        props.setShowMessage(false)
        props.setInputClearData()
        props.setInputClearDataProfile()
        navigate(AUTHORIZATION)
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
                {location.pathname === AUTHORIZATION ? <RegistrationOrAuthorisationClass input_email={props.input_email}
                                                                                         input_nickname={props.input_nickname}
                                                                                         input_password={props.input_password}
                                                                                         setInputEmail={props.setInputEmail}
                                                                                         setInputNickname={props.setInputNickname}
                                                                                         setInputPassword={props.setInputPassword}
                                                                                         message={props.message}
                                                                                         setMessage={props.setMessage}
                                                                                         input_emailOrNickname={props.input_emailOrNickname}
                                                                                         setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                                                         code={props.code}
                                                                                         buttonShowMessage={props.buttonShowMessage}
                                                                                         setShowMessage={props.setShowMessage}
                                                                                         input_passwordShow={props.input_passwordShow}
                                                                                         Authorization={props.Authorization}
                                                                                         setInputClearData={props.setInputClearData}/> :
                location.pathname === REGISTRATION ? <RegistrationClass input_email={props.input_email}
                                                                        input_nickname={props.input_nickname}
                                                                        input_password={props.input_password}
                                                                        input_confirmPassword={props.input_confirmPassword}
                                                                        setInputEmail={props.setInputEmail}
                                                                        setInputNickname={props.setInputNickname}
                                                                        setInputPassword={props.setInputPassword}
                                                                        setInputConfirmPassword={props.setInputConfirmPassword}
                                                                        message={props.message}
                                                                        setMessage={props.setMessage}
                                                                        input_emailOrNickname={props.input_emailOrNickname}
                                                                        setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                                        code={props.code}
                                                                        buttonShowMessage={props.buttonShowMessage}
                                                                        setShowMessage={props.setShowMessage}
                                                                        input_name={props.input_name}
                                                                        setInputName={props.setInputName}
                                                                        input_birthDate={props.input_birthDate}
                                                                        setInputBirthDate={props.setInputBirthDate}
                                                                        setInputClearData={props.setInputClearData}
                                                                        setInputClearDataProfile={props.setInputClearDataProfile}
                                                                        Registration={props.Registration}/> :
                location.pathname === REGISTRATION_FORGOT_PASSWORD ? <RegistrationForgotPasswordClass input_email={props.input_email}
                                                                                                      setInputEmail={props.setInputEmail}
                                                                                                      message={props.message}
                                                                                                      setMessage={props.setMessage}
                                                                                                      code={props.code}
                                                                                                      setCode={props.setCode}
                                                                                                      buttonShowMessage={props.buttonShowMessage}
                                                                                                      setShowMessage={props.setShowMessage}
                                                                                                      ForgotPassword={props.ForgotPassword}/> :
                location.pathname === REGISTRATION_RESTORE_ACCOUNT ? <RestoreAccountComponent/> :
                location.pathname === SUCCESSFUL_ACTIVATION ? <MainSuccessComponent message={props.message}
                                                                                    setMessage={props.setMessage}
                                                                                    newEmail={props.newEmail}
                                                                                    email={props.email}
                                                                                    AccountActivationMessage={props.AccountActivationMessage}
                                                                                    ChangeEmailMessage={props.ChangeEmailMessage}/> :
                location.pathname === SUCCESSFUL_SENT_MESSSAGE ? <MainSuccessComponent message={props.message}
                                                                                       setMessage={props.setMessage}
                                                                                       newEmail={props.newEmail}
                                                                                       email={props.email}
                                                                                       AccountActivationMessage={props.AccountActivationMessage}
                                                                                       ChangeEmailMessage={props.ChangeEmailMessage}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <MainSuccessComponent message={props.message}
                                                                                      setMessage={props.setMessage}
                                                                                      newEmail={props.newEmail}
                                                                                      email={props.email}
                                                                                      AccountActivationMessage={props.AccountActivationMessage}
                                                                                      ChangeEmailMessage={props.ChangeEmailMessage}/> : null}
            </section>
        </div>
    )
}

export default Registration_main