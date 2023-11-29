import React, {Component} from "react";
import {
    PropsChangePassword,
    StateChangePassword
} from "../../../../../../redux/interfaces/settings/SettingsChangePassword";
import DefaultSeePassword from "./components/default_see_password/DefaultSeePassword";
import ChangeOldPasswordForm from "./components/change_old_password/ChangeOldPasswordForm";
import NewPasswordForm from "./components/new_password_form/NewPasswordForm";

class ChangePassword extends Component<PropsChangePassword, StateChangePassword> {
    render() {
        return (
            <div>
                {this.props.buttonChangePasswordSecondStep ?
                    <NewPasswordForm input_password={this.props.input_password}
                                     input_passwordConfirm={this.props.input_passwordConfirm}
                                     input_code={this.props.input_code}
                                     setInputPassword={this.props.setInputPassword}
                                     setInputPasswordConfirm={this.props.setInputPasswordConfirm}
                                     setInputCode={this.props.setInputCode}
                                     setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}/>
                    : !this.props.buttonChangePasswordFirstStep ?
                            <DefaultSeePassword buttonChangeEmail={this.props.buttonChangeEmail}
                                                setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}/>
                            : <ChangeOldPasswordForm input_password={this.props.input_password}
                                                     setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                                     setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                                     setInputPassword={this.props.setInputPassword}/>
                }
            </div>
        )
    }


}

export default ChangePassword