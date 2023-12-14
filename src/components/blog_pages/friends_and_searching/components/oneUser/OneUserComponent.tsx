import main_css from "./OneUser.module.css";
import chatting from "../../../../../assets/images/other/chat_with_user.svg";
import submit_app from "../../../../../assets/images/friends/submitted_application.svg";
import React from "react";
import {PropsOneFriendComponent} from "../../../../../redux/interfaces/friends/oneFriend";
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER} from "../../../../paths/profilePath";

const OneUserComponent = (props : PropsOneFriendComponent) => {
    const navigation = useNavigate()
    const toProfile = () => {
        localStorage.setItem('idUser', props.id)
        navigation(PROFILE_OTHER_USER)
    }

    return (
        <section className={main_css.one_friend}>
            <section className={main_css.navlink} onClick={toProfile}>
                <section className={main_css.friend_ava}>

                </section>
                <section className={main_css.friend_data}>
                    <section className={main_css.name_nick_header}>
                        <section className={main_css.friend_name}>
                            {props.name}
                        </section>
                        <section className={main_css.friend_nickname}>
                            {props.nickname}
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
                    <img src={submit_app} alt={'submit'}/>
                </button>

            </section>
        </section>
    )
}

export default OneUserComponent