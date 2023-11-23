import React from 'react';
import success_reg_res_css from '../Successful_registration_restoring.module.css'
import {useLocation} from "react-router-dom";
const Successful_registration = () => {
    return (
        <div className={success_reg_res_css.root}>
            <p>Ваш аккаунт был успешно зарегистрирован!</p>
        </div>
    )
}

export default Successful_registration