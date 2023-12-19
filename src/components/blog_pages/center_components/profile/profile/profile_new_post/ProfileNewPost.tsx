import new_post_css from './ProfileNewPost.module.css'
import prof_setting from '../profile_setting/ProfileSetting.module.css'

import add_photo_to_post from '../../../../../../assets/images/other/add_photo_to_post.svg'
import React from "react";
import {PropsCreatePost} from "../../../../../../redux/interfaces/post/CreatePost";

const ProfileNewPost = (props: PropsCreatePost) => {

    const setFile = () => {

    }


    return (
        <div>
            <section className={prof_setting.overflay}></section>
            <section className={prof_setting.location_edit_window}>
                <section className={new_post_css.new_post_window}>
                    <section className={new_post_css.section}>
                        <textarea placeholder={'Напишите что-нибудь'}></textarea>
                        <footer>
                            <button className={new_post_css.cancel} onClick={() => props.setButtonCreatPostPressed(false)}>Отменить</button>
                            <section>
                                <input className={prof_setting.hidden} type="file" id="setFiles-btn" onChange={setFile}/>
                                <label htmlFor="setFiles-btn" className={new_post_css.label}>
                                    <img src={add_photo_to_post} alt={'add file'}/>
                                </label>
                                <button className={new_post_css.publish}>Опубликовать</button>
                            </section>
                        </footer>
                    </section>
                </section>
            </section>
        </div>

    )
}
export default ProfileNewPost