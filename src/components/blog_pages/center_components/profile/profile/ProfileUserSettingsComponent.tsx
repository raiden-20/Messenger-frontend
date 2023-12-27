import React from 'react';

import profile_css from './ProfileUser.module.css'

import profile_settings from '../../../../../assets/images/other/profile_settings.svg'
import ProfileSettingContainer from "./profile_setting/ProfileSettingContainer";
import {
    PropsButtonPressed
} from "../../../../../redux/interfaces/profile/settings/profileSettings";

const ProfileUserSettingsComponent = (props: PropsButtonPressed) => {
    const showSettings = () => {
        props.setButtonSettingPressed(true)
    }

    return (
        <section className={profile_css.profile_icons}>
            <img src={profile_settings} alt={'settings'} onClick={showSettings}/>
            {props.isButtonSettingPressed? <ProfileSettingContainer/> : null}
        </section>
    )
}

export default ProfileUserSettingsComponent