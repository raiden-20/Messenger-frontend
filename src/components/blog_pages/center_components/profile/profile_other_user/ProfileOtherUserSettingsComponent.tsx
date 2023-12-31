import React from 'react';

import prof_oth_us from './ProfileOtherUser.module.css'

import chatting from '../../../../../assets/images/other/chat_with_user.svg'
import UsersImagesComponent from "../../../friends/components/oneUser/imagesForWhoOpened/UsersImagesComponent";
import SearchImagesComponent from "../../../friends/components/oneUser/imagesForWhoOpened/SearchImagesComponent";
import {PropsStatus} from "../../../../../redux/interfaces/friends/oneFriend";

const ProfileOtherUserSettingsComponent = (props: PropsStatus) => {
    return (// todo status
        <section className={prof_oth_us.profile_icons}>
            <img src={chatting} alt={'chat'}/>
            {props.status !== 'search' ? <UsersImagesComponent status={props.status}/> :
                <SearchImagesComponent/>}
        </section>
    )
}

export default ProfileOtherUserSettingsComponent