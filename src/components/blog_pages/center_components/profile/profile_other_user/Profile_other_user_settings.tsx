import React from 'react';

import prof_oth_us from './Profile_other_user.module.css'

import chatting from '../../../../../assets/images/other/chat_with_user.svg'
import adding_to_friend from '../../../../../assets/images/other/adding_to_friend.svg'

const Profile_other_user_settings = () => {
    return (
        <section className={prof_oth_us.profile_icons}>
            <img src={chatting} alt={'chat'}/>
            <img src={adding_to_friend} alt={'adding to friend'}/>
        </section>
    )
}

export default Profile_other_user_settings