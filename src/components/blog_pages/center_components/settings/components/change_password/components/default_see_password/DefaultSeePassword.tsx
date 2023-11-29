import settings_css from "../../../../Settings.module.css";
import settings_el_css from '../../../ChangeSettingsElements.module.css'
import setting_pencil from "../../../../../../../../assets/images/other/setting_pencil.svg";
import React from "react";
import {
    PropsChangePasswordD
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingDefaultSeePassword";

const DefaultSeePassword = (props : PropsChangePasswordD) => {
    const changeButtonChangePassword = () => {
        if (!props.buttonChangeEmail) {
            props.setButtonChangePasswordFirstStepPressed(true)
        }
    }

    return (
        <section className={settings_css.section_and_edit}>
            ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
            <button onClick={changeButtonChangePassword} className={settings_el_css.section_and_edit_button}>
                <img src={setting_pencil} className={settings_el_css.section_and_edit_img}
                     alt={'setting pencil'}/>
            </button>
        </section>
    )
}

export default DefaultSeePassword