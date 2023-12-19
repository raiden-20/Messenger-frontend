import React, {useState} from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";
import ProfileNewPost from "../profile_new_post/ProfileNewPost";

const ProfileButtonCreatingPost = () => {

    const [isButtonCreatPostPressed, setButtonCreatPostPressed] = useState(false)

    return (
        <div className={prof_butt_creat_post_css.div}>
            <button className={prof_butt_creat_post_css.button} onClick={() => (setButtonCreatPostPressed(true))}>
                <section>
                    <img src={create} alt={'create_icon'}/>
                    <strong>Создать</strong>
                </section>
            </button>
            {isButtonCreatPostPressed ? <ProfileNewPost setButtonCreatPostPressed={setButtonCreatPostPressed}/> : null}
        </div>

    )
}

export default ProfileButtonCreatingPost