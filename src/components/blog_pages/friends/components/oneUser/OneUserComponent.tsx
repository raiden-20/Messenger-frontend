import main_css from "./OneUser.module.css";
import chatting from "../../../../../assets/images/other/chat_with_user.svg";
import React from "react";
import {PropsOneFriendComponent} from "../../../../../redux/interfaces/friends/oneFriend";
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER, SET_NEW_URL_PROFILE} from "../../../../paths/profilePath";
import default_ava from '../../../../../assets/images/default_profile_ava.svg'
import check_mark from '../../../../../assets/images/friends/check_mark.svg'
import delete_mark from '../../../../../assets/images/friends/delete_mark.svg'
import UsersImagesComponent from "./imagesForWhoOpened/UsersImagesComponent";

const OneUserComponent = (props: PropsOneFriendComponent) => {
    const navigation = useNavigate()
    const toProfile = () => {
        debugger
        localStorage.setItem('idUser', props.id)
        SET_NEW_URL_PROFILE(props.id)
        console.log(PROFILE_OTHER_USER)
        navigation(PROFILE_OTHER_USER)
    }

    const setAction = () => {
        switch (props.status) {
            case 'FRIENDS' : {
                props.changeFriendStatus('DELETE_FRIEND')
                break
            }
            case null : {
                props.changeFriendStatus('CREATE')
                break
            }
            case 'SEND_FIRST' : {
                props.changeFriendStatus('DELETE_REQUEST')
                break
            }
            case 'SEND_SECOND' : {
                props.changeFriendStatus('REJECT')
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
                            <button onClick={setAction} className={main_css.main_button}>
                                <UsersImagesComponent status={props.status}/>
                            </button>
                            <button className={main_css.button}>
                                <img src={chatting} alt={'chat'}/>
                            </button>
                        </section>
                : null
            }


        </section>
    )
}

export default OneUserComponent