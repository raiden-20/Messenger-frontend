import reg_forgot_css from './RegistrationForgotPassword.module.css'
import React, {Component} from "react";
import options_reg from '../css_options/Options.module.css'
import {PropsAuthReg, StateAuthReg} from "../../../redux/interfaces/auth/authRegistration";
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";

class RegistrationForgotPassword extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{
    setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (!this.props.input_email.split('').includes('@')) {
            //обводить красным контуром
        }
        this.props.setInputEmail(event.target.value)
    }
    sendPassword = () => {

        if (this.props.input_email !== null) {
            //post
            this.props.setInputEmail(null)
        }
    }

    render() {
        return (
            <section className={reg_forgot_css.functional}>
                <section className={reg_forgot_css.text}>
                    <p><strong>Проблемы со входом?</strong></p>
                    <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                </section>
                <form>
                    <section className={reg_forgot_css.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={this.setInputEmail}
                               value={this.props.input_email} placeholder={'Электронный адрес'}/>
                    </section>
                    <button type={'submit'} className={options_reg.main_page_button} onClick={this.sendPassword}>Сбросить пароль</button>
                </form>
            </section>
        )
    }
}

export default RegistrationForgotPassword