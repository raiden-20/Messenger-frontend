import React from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";

const ProfileButtonCreatingPost = () => {
    return (
        <button className={prof_butt_creat_post_css.button}>
            <section>
                <img src={create} alt={'create_icon'}/>
                Создать
            </section>
        </button>
    )
}

export default ProfileButtonCreatingPost