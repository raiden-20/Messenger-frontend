import React, {Component} from "react";
import {
    PropsNewPassword,
    StateNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";
import {Auth} from "../../../../../../../../axios/auth/AuthAxios";
import NewPasswordComponent from "./NewPasswordComponent";

class NewPasswordForm extends Component<PropsNewPassword, StateNewPassword>{

    saveButtonActionSecondStep = () => {
        if (this.props.input_password != null && this.props.input_passwordConfirm != null) {
            if (this.props.input_password === this.props.input_passwordConfirm) {
                Auth.NewPasswordAxios( {
                    input_code: this.props.input_code,
                    input_password: this.props.input_password
                }).then(response => {
                    switch (response[0]) {
                        case 200 : {
                            this.props.setPassword(this.props.input_password)
                            localStorage.setItem('password', this.props.input_password)
                            if (response[1].split(' ').length === 2) {
                                localStorage.setItem('token', response[1].split(' ')[1])
                            } else {
                                localStorage.setItem('token', response[1])
                            }
                            break
                        }
                        case 400 : {
                            if (response[1] === "User doesn't exist") {
                                this.props.setMessage('Пользователя не существует')
                            } else if (response[1] === "Code doesn't match") {
                                this.props.setMessage('Неверный код')
                            } else if (response[1] === "The code is not relevant") {
                                this.props.setMessage('Истекло время использования кода')
                            }
                            break
                        }
                        case 401 : {
                            this.props.setMessage('Плохой токен')
                            break
                        }
                        default:
                    }
                })

                this.props.setInputPassword('')
                this.props.setInputPasswordConfirm('')
                this.props.setInputCode('')
            } else {
                this.props.setMessage('Пароли не совпадают')
            }
        }
    }

    render() {
        return <NewPasswordComponent input_password={this.props.input_password}
                                     input_passwordConfirm={this.props.input_passwordConfirm}
                                     input_code={this.props.input_code}
                                     message={this.props.message}
                                     setInputPassword={this.props.setInputPassword}
                                     setInputPasswordConfirm={this.props.setInputPasswordConfirm}
                                     setInputCode={this.props.setInputCode}
                                     setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                     setMessage={this.props.setMessage}
                                     setPassword={this.props.setPassword}
                                     saveButtonActionSecondStep={this.saveButtonActionSecondStep}/>
    }

}

export default NewPasswordForm