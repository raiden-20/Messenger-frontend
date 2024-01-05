import React, {Component} from "react";
import {
    PropsNewPassword,
    StateNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";
import {NewPasswordAxios} from "../../../../../../../axios/auth/AuthAxios";
import NewPasswordComponent from "./NewPasswordComponent";

class NewPasswordForm extends Component<PropsNewPassword, StateNewPassword>{

    saveButtonActionSecondStep = () => {
        if (this.props.input_password != null && this.props.input_passwordConfirm != null) {
            if (this.props.input_password === this.props.input_passwordConfirm) {
                NewPasswordAxios( {
                    input_code: this.props.input_code,
                    input_password: this.props.input_password,

                    setMessage: this.props.setMessage,
                    setPassword: this.props.setPassword
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