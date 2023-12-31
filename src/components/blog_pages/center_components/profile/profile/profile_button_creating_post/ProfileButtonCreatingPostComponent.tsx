import React, {useState} from "react";

import prof_butt_creat_post_css from './ProfileButtonCreatingPost.module.css'

import create from "../../../../../../assets/images/other/create_post.svg";
import {PropsCreatePostButton} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostClass from "../profile_new_post/ProfileNewPostClass";

const ProfileButtonCreatingPostComponent = (props: PropsCreatePostButton) => {

    const [isButtonCreatPostPressed, setButtonCreatPostPressed] = useState(false)

    return (
        <div className={prof_butt_creat_post_css.div}>
            <button className={prof_butt_creat_post_css.button} onClick={() => (setButtonCreatPostPressed(true))}>
                <section>
                    <img src={create} alt={'create_icon'}/>
                    <strong>Создать</strong>
                </section>
            </button>
            {isButtonCreatPostPressed ? <ProfileNewPostClass setButtonCreatPostPressed={setButtonCreatPostPressed}
                                                             setInputPostPhoto={props.setInputPostPhoto}
                                                             setInputPostText={props.setInputPostText}
                                                             input_postPhoto={props.input_postPhoto}
                                                             input_postText={props.input_postText}
                                                             input_postPhotoUrl={props.input_postPhotoUrl}
                                                             setInputPostPhotoUrl={props.setInputPostPhotoUrl}
                                                             setInputPostPhotoDelete={props.setInputPostPhotoDelete}
                                                             setInputPostAllPhotoDelete={props.setInputPostAllPhotoDelete}
                                                             setPosts={props.setPosts}
                                                             addOnePost={props.addOnePost}/> : null}
        </div>

    )
}

export default ProfileButtonCreatingPostComponent