import {
    PropsOldPassword,
    StateOldPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";
import {Auth} from "../../../../../../../../axios/auth/AuthAxios";
import {Component} from "react";
import ChangeOldPasswordComponent from "./ChangeOldPasswordComponent";
class ChangeOldPasswordForm extends Component<PropsOldPassword, StateOldPassword>{
    saveButtonActionFirstStep = () => {
        if (this.props.input_password != null) {
            if (this.props.input_password === localStorage.getItem('password')) {
                Auth.ChangeOldPasswordAxios( {
                    input_password: this.props.input_password
                }).then(response => {
                    switch (response[0]) {
                        case 200 : {
                            if (response[1] === "Check your mailbox to confirm new password") {
                                this.props.setMessage('На Вашу почту был отправлен одноразовый код')
                            }

                            this.props.setButtonChangePasswordFirstStepPressed(false)
                            this.props.setButtonChangePasswordSecondStepPressed(true)
                            break
                        }
                        case 400 : {
                            if (response[1] === "User doesn't exist") {
                                this.props.setMessage('Пользователя не существует')
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
                            if (response[1] === "The password was changed less than 5 minutes ago, please try again later") {
                                this.props.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                            }
                            break
                        }
                    }
                })
                this.props.setInputPassword('')
            } else {
                this.props.setMessage('Неправильный пароль')
                this.props.setInputPassword('')
            }
        }
    }

    render() {
        return <ChangeOldPasswordComponent input_password={this.props.input_password}
                                           password={this.props.password}
                                           message={this.props.message}
                                           setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                           setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                           setInputPassword={this.props.setInputPassword}
                                           setMessage={this.props.setMessage}
                                           saveButtonActionFirstStep={this.saveButtonActionFirstStep}/>
    }
}

export default ChangeOldPasswordForm