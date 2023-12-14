import React from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";
import {useNavigate} from "react-router-dom";
import {PROFILE_USER_SETTINGS} from "../../../../../paths/profilePath";

const ProfileButtonCreatingPost = () => {
    const navigate = useNavigate()
    return (
        <button className={prof_butt_creat_post_css.button} onClick={() => navigate(PROFILE_USER_SETTINGS)}>
            <section>
                <img src={create} alt={'create_icon'}/>
                <strong>Создать</strong>
            </section>
        </button>
    )
}

export default ProfileButtonCreatingPost