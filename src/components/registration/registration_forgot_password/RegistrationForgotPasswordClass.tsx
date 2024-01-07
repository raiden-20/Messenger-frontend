import React, {Component} from "react";
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";
import RegistrationForgotPasswordComponent from "./RegistrationForgotPasswordComponent";
import {Auth} from "../../../axios/auth/AuthAxios";

class RegistrationForgotPasswordClass extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{

    sendPassword = () => {
        if (this.props.input_email !== null) {
            Auth.ForgotPasswordAxios({
                input_email: this.props.input_email
            }).then(response => {
                this.props.setShowMessage(true)
                switch (response) {
                    case 200: {
                        this.props.setMessage('Проверьте почту. При входе в аккаунт, сразу поменяйте пароль, время действия высланного пароля ограничено.')
                        break
                    }
                    case 400: {
                        this.props.setMessage('Пользователя с данной почтой не существует')
                        break
                    }
                    case 401: {
                        this.props.setMessage('Плохой токен')
                        break
                    }
                    case 409: {
                        this.props.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                    }
                }
            })

            this.props.setInputEmail('')
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