import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import main_aside_css from "../profile/main_profile_css/MainProfileAside.module.css";
import {PropsUserProfileAsideComponent} from "../../../../redux/interfaces/profile/profileBase";
import {FRIENDS_USER} from "../../../../paths/usersPath";
import {PropsOneFriend2} from "../../../../redux/interfaces/friends/oneFriend";

import default_profile_ava from '../../../../assets/images/default_profile_ava.svg'

import './ProfileAsideFriends.css'
import {PROFILE_USER_PHOTO} from "../../../../paths/photoPath";
import {PhotoArr} from "../../../../redux/interfaces/profile/photo/photoProfile";
import UserFriendsShortInfoContainer from "./shortProfile/UserFriendsShortInfoContainer";
import ProfileButtonCreatingPostComponent
    from "../profile/profile/profile_button_creating_post/ProfileButtonCreatingPostComponent";
import ProfileButtonCreatingPostContainer
    from "../profile/profile/profile_button_creating_post/ProfileCreatingNewPostContainer";

const MainProfileAsideComponent = (props: PropsUserProfileAsideComponent) => {

    const navigation = useNavigate()
    const [isMouseEnter, setMouseEnter] = useState(false)
    return (
        <aside className={main_aside_css.aside}>
            <section className={main_aside_css.photo} onClick={() => navigation(PROFILE_USER_PHOTO)}>
                <section>
                    <strong>Фото</strong> {props.countPhoto}
                </section>
                <section className={main_aside_css.group_photo}>
                    {props.photoUrl.slice(0, 3).map((photo: PhotoArr) =>
                        <section className={main_aside_css.photo_section}>
                            <img src={photo.url} alt={''}/>
                        </section>
                    )}
                </section>
            </section>
            <section className={main_aside_css.friends} onClick={() => navigation(FRIENDS_USER)}>
                <section>
                    <strong>Друзья</strong> {props.countFriends}
                </section>
                <section className={main_aside_css.friendsSector}>
                    <section className={main_aside_css.friendsAva}>
                        {props.usersShortInfo.map( (user:PropsOneFriend2, i) =>
                            <section className={main_aside_css.friendPhoto + ' friendPhotoSection' + i}  onMouseLeave={() => setMouseEnter(false)}>
                                <img src={user.avatarUrl === '' ? default_profile_ava : user.avatarUrl}
                                     className={'friendPhoto' + i} alt={'user_ava'} onMouseEnter={() => setMouseEnter(true)}/>
                                {isMouseEnter ?
                                <section className={main_aside_css.shortInfoSection + ' friendMiniProfile' + i} onMouseEnter={() => setMouseEnter(true)}>
                                    <UserFriendsShortInfoContainer id={user.id}
                                                                   name={user.name}
                                                                   bio={user.bio}
                                                                   avatarUrl={user.avatarUrl}
                                                                   status={user.status}
                                                                   nickname={user.nickname}
                                                                   photo={user.photo}/>
                                </section> : null}
                            </section>)}
                    </section>
                </section>
            </section>
            <section>
                {localStorage.getItem('idUser') === localStorage.getItem('id') ? <ProfileButtonCreatingPostContainer/> : null}
            </section>
        </aside>
    )
}

export default MainProfileAsideComponent