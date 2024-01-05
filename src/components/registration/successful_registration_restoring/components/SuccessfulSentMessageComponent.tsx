import React from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulActivationComponent
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import {useNavigate} from "react-router-dom";
import {AUTHORIZATION} from "../../../paths/authPath";

const SuccessfulSentMessageComponent = (props: PropsSuccessfulActivationComponent) => {
    const navigate = useNavigate()
    const toAuthorize = () => {
        navigate(AUTHORIZATION)
        props.setMessage('')
    }

    return (
        <div className={success_reg_res_css.root}>
            <p>{props.message}</p>
            <button onClick={toAuthorize} className={success_reg_res_css.button}>Войти</button>
        </div>
    )
}

export default SuccessfulSentMessageComponent