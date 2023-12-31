import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulEmail,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import {SuccessfulChangeEmail} from "../../../axios/auth/AuthAxios";

class SuccessfulChangeEmailClass extends Component<PropsSuccessfulEmail, StateSuccessfulSmth>{
    componentDidMount() {
        SuccessfulChangeEmail( {
            newEmail: this.props.newEmail,

            setMessage: this.props.setMessage,
            setEmail: this.props.setEmail
        })
    }

    render() { //todo вынести
        return (
            <div className={success_reg_res_css.root}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default SuccessfulChangeEmailClass