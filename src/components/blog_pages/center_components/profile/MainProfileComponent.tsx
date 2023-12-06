import React from 'react';
import {useLocation} from "react-router-dom";

import ProfileOtherUserSettings from "./profile_other_user/ProfileOtherUserSettings";
import Post from "./post/Post";

import main_css from "./main_profile_css/MainProfile.module.css";
import main_elements_css from "./main_profile_css/MainProfileElements.module.css";

import cat from "../../../../assets/images/cat_registration.jpg";
import {PropsUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import ProfileUserSettings from "./profile/ProfileUserSettings";
import {PROFILE_USER} from "../../../paths/profilePath";



const MainProfileComponent = (props: PropsUserProfile) => {
    const location = useLocation()

    return(
        <section className={main_css.info}>
            <section className={main_elements_css.bg_photo}>
            </section>
            <main>
                <section className={main_css.bio}>
                    <section className={main_css.bio_row}>
                        <figure className={main_elements_css.figure}>
                            <img src={cat} alt={'this is cat'}/>
                        </figure>
                        <section className={main_css.name_and_status}>
                            <div className={main_elements_css.name}>{props.name + ' ' + props.surname}</div>
                            <div className={main_elements_css.userName}>{'@' + props.nickname}</div>
                        </section>
                        {location.pathname === PROFILE_USER ? <ProfileUserSettings/> : <ProfileOtherUserSettings/>}
                    </section>
                    <section>
                        <p>{props.bio}</p>
                    </section>
                </section>
                <section className={main_css.posts}>
                    <Post/>
                </section>
            </main>
        </section>
    )
}

export default MainProfileComponent