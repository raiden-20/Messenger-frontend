import reg_forgot_css from "./RegistrationForgotPassword.module.css";
import options_reg from "../css_options/Options.module.css";
import SuccessfulRegistrationComponent
    from "../registration/options/successful_registration/SuccessfulRegistrationComponent";
import ErrorRegistrationComponent from "../registration/options/error_registration/ErrorRegistrationComponent";
import React from "react";
import {
    PropsAuthForgotPasswordComponent
} from "../../../redux/interfaces/auth/authForgotPassword";
import reg from "../registration_or_authorization/RegistrationOrAutorisation.module.css";

const RegistrationForgotPasswordComponent = (props: PropsAuthForgotPasswordComponent) => {
    const setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.split('').includes('@')) {
            //обводить красным контуром
        }
        props.setInputEmail(event.target.value)
    }

    const sendPassword = () => {
        if (props.input_email !== null) {
            if (!props.input_email.split('').includes('@')) {
                props.setMessage('Неправильный формат email')
            } else {
                props.sendPassword()
            }
        }
    }

    return (
        <div className={reg.div}>
            <section className={reg_forgot_css.functional}>
                <section className={reg_forgot_css.text}>
                    <p><strong>Проблемы со входом?</strong></p>
                    <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                </section>
                <section className={reg_forgot_css.form}>
                    <section className={reg_forgot_css.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={setInputEmail}
                               value={props.input_email} placeholder={'Электронный адрес'}/>
                    </section>
                    <button type={'submit'} className={options_reg.main_page_button} onClick={sendPassword}>Сбросить пароль</button>
                </section>
            </section>
            {props.buttonShowMessage ? props.code === 200 ? <SuccessfulRegistrationComponent message={props.message}/> :
                <ErrorRegistrationComponent message={props.message}/> : null}
        </div>
    )
}

export default RegistrationForgotPasswordComponent