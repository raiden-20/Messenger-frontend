import React, {Component} from "react";
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";
import RegistrationForgotPasswordComponent from "./RegistrationForgotPasswordComponent";

class RegistrationForgotPasswordClass extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{

    sendPassword = () => {
        this.props.ForgotPassword(this.props.input_email)
        this.props.setInputEmail('')
    }

    render() {
        return <RegistrationForgotPasswordComponent input_email={this.props.input_email}
                                                    message={this.props.message}
                                                    buttonShowMessage={this.props.buttonShowMessage}
                                                    code={this.props.code}
                                                    setInputEmail={this.props.setInputEmail}
                                                    setShowMessage={this.props.setShowMessage}
                                                    setMessage={this.props.setMessage}
                                                    setCode={this.props.setCode}
                                                    sendPassword={this.sendPassword}/>
    }
}

export default RegistrationForgotPasswordClass