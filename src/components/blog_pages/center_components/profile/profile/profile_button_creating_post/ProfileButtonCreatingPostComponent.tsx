import React from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";
import ProfileButtonCreatingPostContainer from "../profile_new_post/ProfileNewPostContainer";
import {PropsButtonCreatingPost} from "../../../../../../redux/interfaces/profile/post/editPost";

const ProfileButtonCreatingPostComponent = (props: PropsButtonCreatingPost) => {

    return (
        <div className={prof_butt_creat_post_css.div}>
            <button className={prof_butt_creat_post_css.button} onClick={() => (props.setButtonEditPostClick(true))}>
                <section>
                    <img src={create} alt={'create_icon'}/>
                    <strong>Создать</strong>
                </section>
            </button>
            {props.buttonEditPost ? <ProfileButtonCreatingPostContainer/> : null}
        </div>

    )
}

export default ProfileButtonCreatingPostComponent