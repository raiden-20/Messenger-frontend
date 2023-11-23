import React from "react";

import prof_butt_creat_post_css from './Profile_button_creating_post.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";

const Profile_button_creating_post = () => {
    return (
        <button className={prof_butt_creat_post_css.button}>
            <section>
                <img src={create} alt={'create_icon'}/>
                Создать
            </section>
        </button>
    )
}

export default Profile_button_creating_post