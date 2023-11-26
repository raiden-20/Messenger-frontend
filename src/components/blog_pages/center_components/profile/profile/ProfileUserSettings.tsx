import React from 'react';

import profile_css from './ProfileUser.module.css'

import profile_settings from '../../../../../assets/images/other/profile_settings.svg'

const ProfileUserSettings = () => {

    return (
        <section className={profile_css.profile_icons}>
            <img src={profile_settings} alt={'settings'}/>
        </section>
    )
}

export default ProfileUserSettings