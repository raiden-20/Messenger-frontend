import React from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";
import ProfileNewPostContainer from "../profile_new_post/ProfileNewPostContainer";
import {PropsButtonNewPost} from "../../../../../../redux/interfaces/post/CreatePost";

const ProfileButtonCreatingPostComponent = (props: PropsButtonNewPost) => {


    return (
        <div className={prof_butt_creat_post_css.div}>
            <button className={prof_butt_creat_post_css.button} onClick={() => (props.setButtonCreatePostClick(true))}>
                <section>
                    <img src={create} alt={'create_icon'}/>
                    <strong>Создать</strong>
                </section>
            </button>
            {props.buttonCreatePost ? <ProfileNewPostContainer/> : null}
        </div>

    )
}

export default ProfileButtonCreatingPostComponent