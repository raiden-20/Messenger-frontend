import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import main_aside_css from "../profile/main_profile_css/MainProfileAside.module.css";
import {PROFILE_USER} from "../../../paths/profilePath";
import {PropsUserProfileAsideComponent} from "../../../../redux/interfaces/profile/profileBase";
import {FRIENDS_USER} from "../../../paths/usersPath";
import {PropsOneFriend} from "../../../../redux/interfaces/friends/oneFriend";

import default_profile_ava from '../../../../assets/images/default_profile_ava.svg'

import './ProfileAsideFriends.css'
import UserFriendsShortInfoClass from "./shortProfile/UserFriendsShortInfoClass";
import {PROFILE_USER_PHOTO} from "../../../paths/photoPath";
import ProfileButtonCreatingPostContainer
    from "../profile/profile/profile_button_creating_post/ProfileButtonCreatingPostContainer";

const MainProfileAsideComponent = (props: PropsUserProfileAsideComponent) => {

    const location = useLocation()
    const navigation = useNavigate()

    return (
        <aside className={main_aside_css.aside}>
            <section className={main_aside_css.photo} onClick={() => navigation(PROFILE_USER_PHOTO)}>
                <section>
                    <strong>Фото</strong> {props.countPhoto}
                </section>
                <section className={main_aside_css.group_photo}>
                    <section className={main_aside_css.photo_section}>

                    </section>
                    <section className={main_aside_css.photo_section}>

                    </section>
                    <section className={main_aside_css.photo_section}>

                    </section>
                </section>
            </section>
            <section className={main_aside_css.friends} onClick={() => navigation(FRIENDS_USER)}>
                <section>
                    <strong>Друзья</strong> {props.countFriends}
                </section>
                <section className={main_aside_css.friendsSector}>
                    <section className={main_aside_css.friendsAva}>
                        {props.usersShortInfo.map( (user:PropsOneFriend, i) => // todo никнейм
                            <section className={main_aside_css.friendPhoto + ' friendPhotoSection' + i}>
                                <img src={user.avatarUrl === '' ? default_profile_ava : user.avatarUrl}
                                     className={'friendPhoto' + i} alt={'user_ava'}/>
                                <section className={main_aside_css.shortInfoSection + ' friendMiniProfile' + i}>
                                    <UserFriendsShortInfoClass id={user.id}
                                                               name={user.name}
                                                               nickname={user.nickname}
                                                               bio={user.bio}
                                                               avatarUrl={user.avatarUrl}/>
                                </section>
                            </section>)}
                    </section>
                </section>
            </section>
            <section>
                {location.pathname === PROFILE_USER ? <ProfileButtonCreatingPostContainer/> : null}
            </section>
        </aside>
    )
}

export default MainProfileAsideComponent