import React from 'react';
import success_reg_res_css from './SuccessfulRegistrationRestoring.module.css'
import page_css from '../css_options/Page.module.css'
import {useLocation} from "react-router-dom";
import SuccessfulActivation from "./components/SuccessfulActivation";
import SuccessfulChangeEmail from "./components/SuccessfulChangeEmail";

const MainSuccess = () => {

    const location = useLocation()

    return (
        <div className={page_css.div}>
            <main className={page_css.content + ' ' + success_reg_res_css.main}>
                {location.pathname === '/successful_activation' ? <SuccessfulActivation/> :
                location.pathname === '/successful_change_email' ? <SuccessfulChangeEmail/> : null}
            </main>
        </div>
    )
}

export default MainSuccess