import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulEmail,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";

class SuccessfulChangeEmailClass extends Component<PropsSuccessfulEmail, StateSuccessfulSmth> {
    componentDidMount() {
        this.props.ChangeEmailMessage(this.props.newEmail)
    }

    render() {
        return (
            <div className={success_reg_res_css.root}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default SuccessfulChangeEmailClass