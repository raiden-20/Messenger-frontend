import React from 'react';
import {useLocation} from "react-router-dom";

import Registration from "./registration/Registration";

import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import RegistrationOrAuthorisation from "./registration_or_authorization/RegistrationOrAuthorisation";
import RegistrationForgotPassword from "./registration_forgot_password/RegistrationForgotPassword";
import RestoreAccount from "./restore_account/RestoreAccount";
import SuccessfulRegistration from "./registration/options/successful_registration/SuccessfulRegistration";
import SuccessfulChangeEmail from "./successful_registration_restoring/components/SuccessfulChangeEmail";
import {PropsAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL
} from "../paths/authPath";

const Registration_main = (props : PropsAuthReg) => {
    const location = useLocation()
    return (
        <div>
            <section className={page_reg.content}>
                <header className={options_reg.header}>СимОн</header>
                {location.pathname === AUTHORIZATION ? <RegistrationOrAuthorisation input_email={props.input_email}
                                                                          input_nickname={props.input_nickname}
                                                                          input_password={props.input_password}
                                                                          setEmail={props.setEmail}
                                                                          setNickname={props.setNickname}
                                                                          setPassword={props.setPassword}
                                                                          setInputEmail={props.setInputEmail}
                                                                          setInputNickname={props.setInputNickname}
                                                                          setInputPassword={props.setInputPassword}/> :
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
                                                                      setInputConfirmPassword={props.setInputConfirmPassword}/> :
                location.pathname === REGISTRATION_FORGOT_PASSWORD ? <RegistrationForgotPassword input_email={props.input_email}
                                                                                                    setInputEmail={props.setInputEmail}/> :
                location.pathname === REGISTRATION_RESTORE_ACCOUNT ? <RestoreAccount/> :
                location.pathname === SUCCESSFUL_ACTIVATION ? <SuccessfulRegistration/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <SuccessfulChangeEmail/> : null}
            </section>
        </div>
    )
}

export default Registration_main