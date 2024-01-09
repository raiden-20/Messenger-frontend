import React from "react";

import settings_css from "./Settings.module.css";

const MainSettingsAside = () => { // todo исправить
    return (
        <section className={settings_css.nav_settings}>
            <section>
                <button><strong>Учетная запись</strong></button>
            </section>
            <section>
                <button><strong>Безопасность</strong></button>
            </section>
        </section>
    )
}

export default MainSettingsAside