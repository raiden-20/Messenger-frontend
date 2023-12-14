import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import ProfileButtonCreatingPost from "../profile/profile/profile_button_creating_post/ProfileButtonCreatingPost";

import main_aside_css from "../profile/main_profile_css/MainProfileAside.module.css";
import {PROFILE_USER} from "../../../paths/profilePath";
import {PropsUserProfileAsideComponent} from "../../../../redux/interfaces/profile/profileBase";
import {FRIENDS_USER} from "../../../paths/usersPath";
import {PropsOneFriend} from "../../../../redux/interfaces/friends/oneFriend";

const MainProfileAside = (props: PropsUserProfileAsideComponent) => {

    const location = useLocation()
    const navigation = useNavigate()

    return (
        <aside className={main_aside_css.aside}>
            <section className={main_aside_css.photo}>
                <section>
                    <strong>Фото</strong> 6
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
                        {props.users.map( (user:PropsOneFriend) => <section className={main_aside_css.friendPhoto}></section>)}
                    </section>
                </section>
            </section>
            <section>
                {location.pathname === PROFILE_USER ? <ProfileButtonCreatingPost/> : null}
            </section>
        </aside>
    )
}

export default MainProfileAside