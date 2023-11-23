import page_reg from "./css_options/Page.module.css";
import options_reg from './css_options/Options.module.css';
import React from 'react';
import Registration_or_autorisation from "./registration_or_authorization/Registration_or_autorisation";
import Registration from "./registration/Registration";
import Registration_forgot_password from "./registration_forgot_password/Registration_forgot_password";
import Restore_account from "./restore_account/Restore_account";

import {useLocation} from "react-router-dom";
import Registration_new_password from "./registration_new_password/Registration_new_password";
import Successful_registration from "./successful_registration_restoring/components/Successful_registration";
import Successful_restoring from "./successful_registration_restoring/components/Successful_restoring";
import Successful_change_email from "./successful_registration_restoring/components/Successful_change_email";

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
                location.pathname === '/registration_restore_account' ? <Restore_account/> :
                location.pathname === '/successful_registration' ? <Successful_registration/> :
                location.pathname === '/successful_restoring' ? <Successful_restoring/> :
                location.pathname === '/successful_change_email' ? <Successful_change_email/> : null}
            </section>
        </div>
    )
}

export default Registration_main