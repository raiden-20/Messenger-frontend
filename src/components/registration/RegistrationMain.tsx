import React from 'react';
import {useLocation} from "react-router-dom";

import Registration from "./registration/Registration";

import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import RegistrationOrAuthorisation from "./registration_or_authorization/RegistrationOrAuthorisation";
import RegistrationForgotPassword from "./registration_forgot_password/RegistrationForgotPassword";
import RestoreAccount from "./restore_account/RestoreAccount";
import {PropsAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {
    ADD_NAME_SURNAME,
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL
} from "../paths/authPath";
import RegistrationAddNameSurname from "./registration_set_name_surname/RegistrationAddNameSurname";
import {PropsProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import MainSuccess from "./successful_registration_restoring/MainSuccess";

const Registration_main = (props : PropsAuthReg & PropsProfileNameSurname) => {
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
                                                                                    setInputPassword={props.setInputPassword}
                                                                                    message={props.message}
                                                                                    setMessage={props.setMessage}
                                                                                    input_emailOrNickname={props.input_emailOrNickname}
                                                                                    setInputEmailOrNickname={props.setInputEmailOrNickname}
                                                                                    setToken={props.setToken}
                                                                                    token={props.token}/> :
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
                                                                   setToken={props.setToken} // todo no need
                                                                   token={props.token}/> : // todo no need
                location.pathname === REGISTRATION_FORGOT_PASSWORD ? <RegistrationForgotPassword input_email={props.input_email}
                                                                                                 setInputEmail={props.setInputEmail}
                                                                                                 message={props.message}
                                                                                                 setMessage={props.setMessage}/> :
                location.pathname === REGISTRATION_RESTORE_ACCOUNT ? <RestoreAccount/> :
                location.pathname === SUCCESSFUL_ACTIVATION ? <MainSuccess message={props.message}
                                                                           setMessage={props.setMessage}
                                                                           setEmail={props.setEmail}
                                                                           newEmail={props.newEmail}
                                                                           token={props.token}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <MainSuccess message={props.message}
                                                                             setMessage={props.setMessage} setEmail={props.setEmail}
                                                                             newEmail={props.newEmail}
                                                                             token={props.token}/> :
                location.pathname === ADD_NAME_SURNAME ? <RegistrationAddNameSurname input_name={props.input_name}
                                                                                     input_surname={props.input_surname}
                                                                                     setInputName={props.setInputName}
                                                                                     setInputSurname={props.setInputSurname}
                                                                                     setName={props.setName}
                                                                                     setSurname={props.setSurname}
                                                                                     message={props.message}
                                                                                     setMessage={props.setMessage}/>: null}
            </section>
        </div>
    )
}

export default Registration_main