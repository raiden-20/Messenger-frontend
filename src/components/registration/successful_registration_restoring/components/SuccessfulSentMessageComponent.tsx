import React from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulActivationComponent
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";

const SuccessfulSentMessageComponent = (props: PropsSuccessfulActivationComponent) => {
    return (
        <div className={success_reg_res_css.root}>
            <p>{props.message}</p>
            <button onClick={props.toAuthorize} className={success_reg_res_css.button}>Войти</button>
        </div>
    )
}

export default SuccessfulSentMessageComponent