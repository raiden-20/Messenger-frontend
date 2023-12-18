import main_css from "./OneUser.module.css";
import chatting from "../../../../../assets/images/other/chat_with_user.svg";
import React from "react";
import {PropsOneFriendComponent} from "../../../../../redux/interfaces/friends/oneFriend";
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER} from "../../../../paths/profilePath";
import default_ava from '../../../../../assets/images/default_profile_ava.svg'
import delete_icon from '.././../../../../assets/images/friends/delete.svg'
import add_icon from '.././../../../../assets/images/friends/accept.svg'
import create_icon from '.././../../../../assets/images/friends/create.svg'
import reject_icon from '.././../../../../assets/images/friends/reject.svg'

const OneUserComponent = (props : PropsOneFriendComponent) => {
    const navigation = useNavigate()
    const toProfile = () => {
        debugger
        localStorage.setItem('idUser', props.id)
        console.log(PROFILE_OTHER_USER)
        navigation(PROFILE_OTHER_USER)
    }

    return (
        <section className={main_css.one_friend}>
            <section className={main_css.navlink} onClick={toProfile}>
                <section className={main_css.friend_ava}>
                    <img src={props.avatarUrl === '' ? default_ava : props.avatarUrl} alt={'user ava'}/>
                </section>
                <section className={main_css.friend_data}>
                    <section className={main_css.name_nick_header}>
                        <section className={main_css.friend_name}>
                            {props.name}
                        </section>
                        <section className={main_css.friend_nickname}>
                            {'@' + props.nickname}
                        </section>
                    </section>
                    <section className={main_css.friend_description}>
                        {props.bio}
                    </section>
                </section>
            </section>

            <section className={main_css.friend_functional}>
                <button>
                    <img src={chatting} alt={'chat'}/>
                </button>
                <button onClick={props.changeFriendStatus}>
                    <img src={props.whoOpened === 'friends' ? delete_icon :
                                props.whoOpened === 'subscriptions' ? add_icon :
                                props.whoOpened === 'subscribers' ? reject_icon :
                                props.whoOpened === 'search' ? create_icon : ''} alt={'icon'}/>
                </button>

            </section>
        </section>
    )
}

export default OneUserComponent