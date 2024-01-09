import React, {Component} from "react";
import {
    PropsNewPassword,
    StateNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";
import NewPasswordComponent from "./NewPasswordComponent";

class NewPasswordForm extends Component<PropsNewPassword, StateNewPassword>{

    saveButtonActionSecondStep = () => {
        this.props.SetNewPassword(this.props.input_code, this.props.input_password)

        this.props.setInputPassword('')
        this.props.setInputPasswordConfirm('')
        this.props.setInputCode('')
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
                                     saveButtonActionSecondStep={this.saveButtonActionSecondStep}/>
    }

}

export default NewPasswordForm