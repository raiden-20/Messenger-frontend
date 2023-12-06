import React, {Component} from "react";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../../redux/interfaces/settings/SettingsChangeEmail";
import DefaultSeeEmail from "./components/default_see_email/DefaultSeeEmail";
import ChangeEmailForm from "./components/change_email_form/ChangeEmailForm";


class ChangeEmail extends Component<PropsChangeEmail, StateChangeEmail> {
    render() {
        return (
            <div>
                {!this.props.buttonChangeEmail ?
                    <DefaultSeeEmail buttonChangeEmail={this.props.buttonChangeEmail}
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
                                       token={this.props.token}
                                       message={this.props.message}
                                       setMessage={this.props.setMessage}
                                       setNewEmail={this.props.setNewEmail}
                                       setToken={this.props.setToken}/>
                }
            </div>
        )
    }
}

export default ChangeEmail