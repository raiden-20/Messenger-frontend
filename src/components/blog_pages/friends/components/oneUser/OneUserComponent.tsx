import main_css from "./OneUser.module.css";
import chatting from "../../../../../assets/images/other/chat_with_user.svg";
import React, {useState} from "react";
import {PropsOneFriendComponent} from "../../../../../redux/interfaces/friends/oneFriend";
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER} from "../../../../paths/profilePath";
import default_ava from '../../../../../assets/images/default_profile_ava.svg'
import check_mark from '../../../../../assets/images/friends/check_mark.svg'
import delete_mark from '../../../../../assets/images/friends/delete_mark.svg'
import FriendsImages from "./imagesForWhoOpened/FriendsImages";
import SubscriptionsImages from "./imagesForWhoOpened/SubscriptionsImages";
import SearchImages from "./imagesForWhoOpened/SearchImages";

const OneUserComponent = (props: PropsOneFriendComponent) => {
    const navigation = useNavigate()
    const toProfile = () => {
        localStorage.setItem('idUser', props.id)
        console.log(PROFILE_OTHER_USER)
        navigation(PROFILE_OTHER_USER)
    }

    const setAction = () => {
        switch (props.whoOpened) {
            case 'friends' : {
                props.changeFriendStatus('DELETE_FRIEND')
                break
            }
            case 'search' : {
                props.changeFriendStatus('CREATE')
                break
            }
            case 'subscriptions' : {
                props.changeFriendStatus('DELETE_REQUEST')
                break
            }
        }
    }

    const accept = () =>{
        props.changeFriendStatus('ACCEPT')
    }
    const reject = () =>{
        props.changeFriendStatus('REJECT')
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
            {props.id !== localStorage.getItem('id') ?
                props.whoOpened === 'subscribers' ?
                        <section className={main_css.friend_functional_subscribers}>
                            <button className={main_css.chat}>
                                <img src={chatting} alt={'chat'}/>
                            </button>
                            <section className={main_css.section_buttons}>
                                <button className={main_css.add} onClick={accept}>
                                    <img src={check_mark} alt={'mark'}/>
                                    Добавить
                                </button>
                                <button className={main_css.delete} onClick={reject}>
                                    <img src={delete_mark} alt={'mark'}/>
                                    Удалить
                                </button>
                            </section>
                        </section>
                        :
                        <section className={main_css.friend_functional}>
                            <button>
                                <img src={chatting} alt={'chat'}/>
                            </button>
                            <button onClick={setAction}>
                                {props.whoOpened === 'friends' ? <FriendsImages/> :
                                    props.whoOpened === 'subscriptions' ? <SubscriptionsImages/> :
                                        props.whoOpened === 'search' ? <SearchImages/> : null}
                            </button>
                        </section>
                : null
            }


        </section>
    )
}

export default OneUserComponent