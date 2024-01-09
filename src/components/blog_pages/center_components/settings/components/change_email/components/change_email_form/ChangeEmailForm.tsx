import React, {Component} from "react";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import ChangeEmailFormComponent from "./ChangeEmailFormComponent";

class ChangeEmailForm extends Component<PropsChangeEmail, StateChangeEmail>{

    saveButtonAction = () => {
        if (this.props.input_email !== null && this.props.input_password !== null) {
           this.props.ChangeEmail(this.props.input_password, this.props.input_email)

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