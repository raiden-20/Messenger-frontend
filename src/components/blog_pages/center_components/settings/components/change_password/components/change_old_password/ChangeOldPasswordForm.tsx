import {
    PropsOldPassword,
    StateOldPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";
import {ChangeOldPasswordAxios} from "../../../../../../../axios/auth/AuthAxios";
import {Component} from "react";
import ChangeOldPasswordComponent from "./ChangeOldPasswordComponent";

class ChangeOldPasswordForm extends Component<PropsOldPassword, StateOldPassword>{
    saveButtonActionFirstStep = () => {
        if (this.props.input_password != null) {
            if (this.props.input_password === localStorage.getItem('password')) {
                ChangeOldPasswordAxios( {
                    input_password: this.props.input_password,

                    setMessage: this.props.setMessage,
                    setButtonChangePasswordFirstStepPressed: this.props.setButtonChangePasswordFirstStepPressed,
                    setButtonChangePasswordSecondStepPressed: this.props.setButtonChangePasswordSecondStepPressed
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