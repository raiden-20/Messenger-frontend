import React, {Component} from "react";
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";
import axios from "axios";
import RegistrationForgotPasswordComponent from "./RegistrationForgotPasswordComponent";

class RegistrationForgotPasswordClass extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{

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
        return <RegistrationForgotPasswordComponent input_email={this.props.input_email}
                                                    message={this.props.message}
                                                    buttonShowMessage={this.props.buttonShowMessage}
                                                    code={this.props.code}
                                                    setInputEmail={this.props.setInputEmail}
                                                    setShowMessage={this.props.setShowMessage}
                                                    setMessage={this.props.setMessage}
                                                    setCode={this.props.setCode}
                                                    sendPassword={this.sendPassword}/>
    }
}

export default RegistrationForgotPasswordClass