import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import RegistrationClass from "./registration/RegistrationClass";

import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import RegistrationOrAuthorisationClass from "./registration_or_authorization/RegistrationOrAuthorisationClass";
import RegistrationForgotPasswordClass from "./registration_forgot_password/RegistrationForgotPasswordClass";
import RestoreAccountComponent from "./restore_account/RestoreAccountComponent";
import {PropsAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL, SUCCESSFUL_SENT_MESSSAGE
} from "../paths/authPath";
import {PropsProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import MainSuccessComponent from "./successful_registration_restoring/MainSuccessComponent";

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
                {location.pathname === AUTHORIZATION ? <RegistrationOrAuthorisationClass input_email={props.input_email}
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
                                                                                         code={props.code}
                                                                                         setCode={props.setCode}
                                                                                         buttonShowMessage={props.buttonShowMessage}
                                                                                         setShowMessage={props.setShowMessage}
                                                                                         input_passwordShow={props.input_passwordShow}
                                                                                         setInputPasswordShow={props.setInputPasswordShow}/> :
                location.pathname === REGISTRATION ? <RegistrationClass input_email={props.input_email}
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
                                                                        setInputName={props.setInputName}
                                                                        input_birthDate={props.input_birthDate}
                                                                        setBirthDate={props.setBirthDate}
                                                                        setInputBirthDate={props.setInputBirthDate}
                                                                        input_passwordShow={props.input_passwordShow}
                                                                        setInputPasswordShow={props.setInputPasswordShow}
                                                                        input_confirmPasswordShow={props.input_confirmPasswordShow}
                                                                        setInputConfirmPasswordShow={props.setInputConfirmPasswordShow}/> :
                location.pathname === REGISTRATION_FORGOT_PASSWORD ? <RegistrationForgotPasswordClass input_email={props.input_email}
                                                                                                      setInputEmail={props.setInputEmail}
                                                                                                      message={props.message}
                                                                                                      setMessage={props.setMessage}
                                                                                                      code={props.code}
                                                                                                      setCode={props.setCode}
                                                                                                      buttonShowMessage={props.buttonShowMessage}
                                                                                                      setShowMessage={props.setShowMessage}/> :
                location.pathname === REGISTRATION_RESTORE_ACCOUNT ? <RestoreAccountComponent message={props.message}
                                                                                          setMessage={props.setMessage}/> :
                location.pathname === SUCCESSFUL_ACTIVATION ? <MainSuccessComponent message={props.message}
                                                                                    setMessage={props.setMessage}
                                                                                    setEmail={props.setEmail}
                                                                                    newEmail={props.newEmail}
                                                                                    email={props.email}/> :
                location.pathname === SUCCESSFUL_SENT_MESSSAGE ? <MainSuccessComponent message={props.message}
                                                                                       setMessage={props.setMessage}
                                                                                       setEmail={props.setEmail}
                                                                                       newEmail={props.newEmail}
                                                                                       email={props.email}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <MainSuccessComponent message={props.message}
                                                                                      setMessage={props.setMessage} setEmail={props.setEmail}
                                                                                      newEmail={props.newEmail}
                                                                                      email={props.email}/> : null}
            </section>
        </div>
    )
}

export default Registration_main