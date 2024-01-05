import React, {Component} from "react";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../../redux/interfaces/settings/SettingsChangeEmail";
import DefaultSeeEmailClass from "./components/default_see_email/DefaultSeeEmailClass";
import ChangeEmailForm from "./components/change_email_form/ChangeEmailForm";


class ChangeEmail extends Component<PropsChangeEmail, StateChangeEmail> {
    render() {
        return (
            <div>
                {!this.props.buttonChangeEmail ?
                    <DefaultSeeEmailClass buttonChangeEmail={this.props.buttonChangeEmail}
                                          buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                          email={this.props.email}
                                          setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                          buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                          setEmail={this.props.setEmail}/>
                    : <ChangeEmailForm input_email={this.props.input_email}
                                       input_password={this.props.input_password}
                                       setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                       setInputPassword={this.props.setInputPassword}
                                       setInputEmail={this.props.setInputEmail}
                                       message={this.props.message}
                                       setMessage={this.props.setMessage}
                                       setNewEmail={this.props.setNewEmail}/>
                }
            </div>
        )
    }
}

export default ChangeEmail