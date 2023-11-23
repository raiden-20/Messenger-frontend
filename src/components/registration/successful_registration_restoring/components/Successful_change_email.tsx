import React from 'react';
import success_reg_res_css from '../Successful_registration_restoring.module.css'
import {useLocation} from "react-router-dom";
const Successful_change_email = () => {
    return (
        <div className={success_reg_res_css.root}>
            <p>Ваша почта была изменена</p>
        </div>
    )
}

export default Successful_change_email