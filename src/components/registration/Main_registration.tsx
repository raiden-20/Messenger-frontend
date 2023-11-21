import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import React from 'react';
import Registration_or_autorisation from "./registration_or_authorization/Registration_or_autorisation";
import Registration from "./registration/Registration";
import Registration_forgot_password from "./registration_forgot_password/Registration_forgot_password";
import Restore_account from "./restore_account/Restore_account";

import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Registration_new_password from "./registration_new_password/Registration_new_password";
import {Box} from "@mui/joy";

const Registration_main = () => {
    const location = useLocation()
    return (
        <div>
            <section className={page_reg.content}>
                <header className={options_reg.header}>СимОн</header>
                {location.pathname === '/' ? <Registration_or_autorisation/> :
                location.pathname === '/registration' ? <Registration/> :
                location.pathname === '/registration_forgot_password' ? <Registration_forgot_password/> :
                location.pathname === '/registration_new_password' ? <Registration_new_password/> :
                location.pathname === '/registration_restore_account' ? <Restore_account/> : null}
            </section>
        </div>
    )
}

export default Registration_main