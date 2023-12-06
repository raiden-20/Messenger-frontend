import {
    PropsChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingDefoltSeeEmail";
import settings_css from "../../../../Settings.module.css";
import settings_el_css from '../../../ChangeSettingsElements.module.css'
import setting_pencil from "../../../../../../../../assets/images/other/setting_pencil.svg";
import React from "react";

const DefaultSeeEmail = (props : PropsChangeEmail) => {
    const changeButtonChangeEmail = () => {
        if (!props.buttonChangePasswordFirstStep && !props.buttonChangePasswordSecondStep) {
            props.setButtonChangeEmailPressed(true)
        }
    }

    const getEmail = () => {
        debugger
        // id запрос на получение email
        return // email
    }

    return (
        <section className={settings_css.section_and_edit}>
            {props.email}
            <button onClick={changeButtonChangeEmail} className={settings_el_css.section_and_edit_button}>
                <img tabIndex={0} src={setting_pencil}
                     className={settings_el_css.section_and_edit_img} alt={'setting pencil'}/>
            </button>
        </section>
    )
}

export default DefaultSeeEmail