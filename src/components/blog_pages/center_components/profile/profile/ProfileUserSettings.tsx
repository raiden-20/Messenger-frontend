import React from 'react';

import profile_css from './ProfileUser.module.css'

import profile_settings from '../../../../../assets/images/other/profile_settings.svg'
import {useNavigate} from "react-router-dom";
import {PROFILE_USER_SETTINGS} from "../../../../paths/profilePath";

const ProfileUserSettings = () => {
    const navigation = useNavigate()

    const navToUserSettings = () => {
        navigation(PROFILE_USER_SETTINGS)
    }


    return (
        <section className={profile_css.profile_icons}>
            <img src={profile_settings} alt={'settings'} onClick={navToUserSettings}/>
        </section>
    )
}

export default ProfileUserSettings