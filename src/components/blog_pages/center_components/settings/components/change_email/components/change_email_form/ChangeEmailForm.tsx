import React, {Component} from "react";
import {
    PropsChangeEmail,
    StateChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import {Auth} from "../../../../../../../../axios/auth/AuthAxios";
import ChangeEmailFormComponent from "./ChangeEmailFormComponent";

class ChangeEmailForm extends Component<PropsChangeEmail, StateChangeEmail>{

    saveButtonAction = () => {
        if (this.props.input_email !== null && this.props.input_password !== null) {
            Auth.ChangeEmailAxios( {
                input_password: this.props.input_password,
                input_email: this.props.input_email
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                        this.props.setNewEmail(this.props.input_email)
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            this.props.setMessage('Пользователя с такой почтой не существует')
                        } else if (response[1] === "Password mismatch") {
                            this.props.setMessage('Неверный пароль')
                        }
                        break
                    }
                    case 401 : {
                        this.props.setMessage('Плохой токен')
                        break
                    }
                    case 409 : {
                        this.props.setMessage('Данный email уже используется')
                        break
                    }
                    default:
                }
            })
            this.props.setInputEmail('')
            this.props.setInputPassword('')
        }
    }


    render() {
        return <ChangeEmailFormComponent input_email={this.props.input_email}
                                         input_password={this.props.input_password}
                                         message={this.props.message}
                                         setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                         setInputPassword={this.props.setInputPassword}
                                         setInputEmail={this.props.setInputEmail}
                                         saveButtonAction={this.saveButtonAction}
                                         setMessage={this.props.setMessage}/>
    }
}

export default ChangeEmailForm