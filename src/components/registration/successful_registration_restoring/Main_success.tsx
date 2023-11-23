import React from 'react';
import success_reg_res_css from './Successful_registration_restoring.module.css'
import page_css from '../css_options/Page.module.css'
import {useLocation} from "react-router-dom";
import Successful_restoring from "./components/Successful_restoring";
import Successful_registration from "./components/Successful_registration";
import Successful_change_email from "./components/Successful_change_email";

const Main_success = () => {

    const location = useLocation()

    return (
        <div className={page_css.div}>
            <main className={page_css.content + ' ' + success_reg_res_css.main}>
                {location.pathname === '/successful_registration' ? <Successful_registration/> :
                location.pathname === '/successful_restoring' ? <Successful_restoring/> :
                location.pathname === '/successful_change_email' ? <Successful_change_email/> : null}
            </main>
        </div>
    )
}

export default Main_success