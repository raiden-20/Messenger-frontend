import React, {Component} from "react";
import {
    PropsChangePassword,
    StateChangePassword
} from "../../../../../../redux/interfaces/settings/SettingsChangePassword";
import DefaultSeePassword from "./components/default_see_password/DefaultSeePassword";
import CheckOldPasswordForm from "./components/change_old_password/CheckOldPasswordForm";
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
                                     setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                     message={this.props.message}
                                     setMessage={this.props.setMessage}
                                     SetNewPassword={this.props.SetNewPassword}/>
                    : !this.props.buttonChangePasswordFirstStep ?
                            <DefaultSeePassword buttonChangeEmail={this.props.buttonChangeEmail}
                                                setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}/>
                            : <CheckOldPasswordForm input_password={this.props.input_password}
                                                    setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                                    setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                                    setInputPassword={this.props.setInputPassword}
                                                    message={this.props.message}
                                                    setMessage={this.props.setMessage}
                                                    CheckOldPassword={this.props.CheckOldPassword}/>
                }
            </div>
        )
    }


}

export default ChangePassword