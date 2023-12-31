import React, {Component} from "react";
import {PropsAuthForgotPassword, StateAuthForgotPassword} from "../../../redux/interfaces/auth/authForgotPassword";
import RegistrationForgotPasswordComponent from "./RegistrationForgotPasswordComponent";
import {ForgotPasswordAxios} from "../../axios/auth/AuthAxios";

class RegistrationForgotPasswordClass extends Component<PropsAuthForgotPassword, StateAuthForgotPassword>{

    sendPassword = () => {
        if (this.props.input_email !== null) {
            ForgotPasswordAxios({
                input_email: this.props.input_email,

                setShowMessage: this.props.setShowMessage,
                setCode: this.props.setCode,
                setMessage: this.props.setMessage
            })
            this.props.setInputEmail('')
        }
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