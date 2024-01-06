import prof_setting from "../profile/profile/profile_setting/ProfileSetting.module.css";
import token_css from './TokenIsntActual.module.css'
import React from "react";

const TokenIsntActual = () => {
    return (
        <section>
            <section className={prof_setting.overflay}></section>
            <section className={prof_setting.location_edit_window}>
                <section className={token_css.window}>

                </section>
            </section>
        </section>
    )
}

export default TokenIsntActual