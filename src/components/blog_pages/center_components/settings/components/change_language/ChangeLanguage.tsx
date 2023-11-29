import React from "react";
import settings_css from "../../Settings.module.css";
import settings_el_css from '../ChangeSettingsElements.module.css'

const ChangeLanguage = () => {
    return (
        <section className={settings_css.section_and_edit}>
            <select className={settings_el_css.section_and_edit_select}>
                <option>Русский</option>
                <option>English</option>
                <option>한국어</option>
            </select>
            <section></section>
        </section>
    )
}

export default ChangeLanguage