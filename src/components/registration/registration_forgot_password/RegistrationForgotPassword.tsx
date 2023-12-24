import reg_forgot_css from './RegistrationForgotPassword.module.css'
import React, {Component} from "react";
import options_reg from '../css_options/Options.module.css'
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";
import axios from "axios";
import SuccessfulRegistration from "../registration/options/successful_registration/SuccessfulRegistration";
import ErrorRegistration from "../registration/options/error_registration/ErrorRegistration";

class RegistrationForgotPassword extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{
    setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.split('').includes('@')) {
            //обводить красным контуром
        }
        this.props.setInputEmail(event.target.value)
    }
    sendPassword = () => {
        if (this.props.input_email !== null) {
            axios.put('http://localhost:8080/auth/forget/password', {
                email: this.props.input_email
            }).then(response => {
                this.props.setShowMessage(true)
                this.props.setCode(response.status)
                switch (response.status) {
                    case 200: {
                        if (response.data === 'Check your mailbox') {
                            this.props.setMessage('Проверьте почту. При входе в аккаунт, сразу поменяйте пароль, время действия высланного пароля ограничено.')
                        }
                    }
                }
                this.props.setInputEmail('')
            }).catch(error => {
                this.props.setShowMessage(true)
                this.props.setCode(error.response.status)
                switch (error.response.status) {
                    case 400: {
                        if (error.response.data === 'User doesn\'t exist') {
                            this.props.setMessage('Пользователя с данной почтой не существует')
                        }else if (error.response.data === "Bad token") {
                            this.props.setMessage('Плохой токен')
                        }
                        break
                    }
                    case 409: {
                        if (error.response.data === 'The password was changed less than 5 minutes ago, please try again later') {
                            this.props.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                        }
                    }
                }
                this.props.setInputEmail('')
            })
        }
    }

    render() {
        return (
            <div>
                <section className={reg_forgot_css.functional}>
                    <section className={reg_forgot_css.text}>
                        <p><strong>Проблемы со входом?</strong></p>
                        <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                    </section>
                    <section className={reg_forgot_css.form}>
                        <section className={reg_forgot_css.inputs}>
                            <input type={'text'} className={options_reg.input} onChange={this.setInputEmail}
                                   value={this.props.input_email} placeholder={'Электронный адрес'}/>
                        </section>
                        <button type={'submit'} className={options_reg.main_page_button} onClick={this.sendPassword}>Сбросить пароль</button>
                    </section>
                </section>
                {this.props.buttonShowMessage ? this.props.code === 200 ? <SuccessfulRegistration message={this.props.message}/> :
                    <ErrorRegistration message={this.props.message}/> : null}
            </div>

        )
    }
}

export default RegistrationForgotPassword