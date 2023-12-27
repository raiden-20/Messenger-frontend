import React from 'react';

import prof_oth_us from './ProfileOtherUser.module.css'

import chatting from '../../../../../assets/images/other/chat_with_user.svg'
import sub_app from '../../../../../assets/images/friends/submitted_application.svg'

const ProfileOtherUserSettingsComponent = () => {
    return (// todo status
        <section className={prof_oth_us.profile_icons}>
            <img src={chatting} alt={'chat'}/>
            <img src={sub_app} alt={'adding to friend'}/>
        </section>
    )
}

export default ProfileOtherUserSettingsComponent