import {
    PropsOldPassword,
    StateOldPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";
import {Component} from "react";
import CheckOldPasswordComponent from "./CheckOldPasswordComponent";
class CheckOldPasswordForm extends Component<PropsOldPassword, StateOldPassword>{
    saveButtonActionFirstStep = () => {
        if (this.props.input_password != null) {
            if (this.props.input_password === localStorage.getItem('password')) {
                this.props.CheckOldPassword(this.props.input_password)
            } else {
                this.props.setMessage('Неправильный пароль')
            }
        }
        this.props.setInputPassword('')
    }

    render() {
        return <CheckOldPasswordComponent input_password={this.props.input_password}
                                          message={this.props.message}
                                          setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                          setInputPassword={this.props.setInputPassword}
                                          setMessage={this.props.setMessage}
                                          saveButtonActionFirstStep={this.saveButtonActionFirstStep}/>
    }
}

export default CheckOldPasswordForm