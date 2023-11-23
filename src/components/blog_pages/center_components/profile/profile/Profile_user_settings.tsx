import React from 'react';

import profile_css from './Profile_user.module.css'

import profile_settings from '../../../../../assets/images/other/profile_settings.svg'

const Profile_user_settings = () => {

    return (
        <section className={profile_css.profile_icons}>
            <img src={profile_settings} alt={'settings'}/>
        </section>
    )
}

export default Profile_user_settings