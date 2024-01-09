import new_post_css from './ProfileNewPost.module.css'
import prof_setting from '../profile_setting/ProfileSetting.module.css'

import add_photo_to_post from '../../../../../../assets/images/other/add_photo_to_post.svg'
import delete_photo from '../../../../../../assets/images/photo/delete_photo.svg'
import React from "react";
import {
    PropsCreatePostButtonComponent
} from "../../../../../../redux/interfaces/post/CreatePost";
import ErrorComponent from "../../../settings/components/error/ErrorComponent";

const ProfileNewPostComponent = (props: PropsCreatePostButtonComponent) => {

    const setFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMessage('')
        if (props.input_postPhotoUrl.length < 6) {
            if (event.target.files !== null) {
                const file = event.target.files[0];
                if (event.target.files[0].size <= 2097152) {
                    const reader = new FileReader();

                    reader.onload = (event) => {
                        if (event.target !== null && event.target.result !== null) {
                            props.setInputPostPhotoUrl(event.target.result.toString());
                        }
                    };
                    reader.readAsDataURL(file);
                    props.setInputPostPhoto(event.target.files[0], false)
                } else {
                    props.setMessage('Большой размер файла')
                }
            }
        } else {
            props.setMessage('Достигнут лимит фото')
        }

    }

    const setText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value.length <= 1000) {
            props.setInputPostText(event.target.value)
        }
    }

    const deletePhoto = (i : number) => {
        props.setInputPostPhotoDelete(i)
    }

    const cancel = () => {
        props.setInputPostAllPhotoDelete()
        props.setInputPostText('')
        props.changePost()
        props.setMessage('')
    }
    const setNewPost = () => {
        props.setNewPost()
    }


    return (
        <div>
            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.overflay} onClick={cancel}></section>
                <section className={new_post_css.new_post_window}>
                    <section className={new_post_css.section}>
                        <textarea placeholder={'Напишите что-нибудь'} value={props.input_postText} onChange={setText}></textarea>
                        <section className={
                            props.input_postPhotoUrl.length !== 0 ?
                                props.input_postPhotoUrl.length === 1 || props.input_postPhotoUrl.length === 2 ?  new_post_css.input_photo2 :
                                props.input_postPhotoUrl.length === 3 ? new_post_css.input_photo3 :
                                props.input_postPhotoUrl.length === 4 ? new_post_css.input_photo4 :
                                    props.input_postPhotoUrl.length === 5 || props.input_postPhotoUrl.length === 6 ? new_post_css.input_photo5 : '' :
                                new_post_css.input_photo0}>
                            {props.input_postPhotoUrl.map((url: string, i) => (
                                <section>
                                    <img src={url} alt={'input img'} className={new_post_css.one_photo}/>
                                    <img src={delete_photo} alt={'delete_photo icon'} className={new_post_css.delete_photo} onClick={() => deletePhoto(i)}/>
                                </section>
                            ))}
                        </section>
                        <footer>
                            <button className={new_post_css.cancel} onClick={cancel}>Отменить</button>
                            <section>
                                <input className={prof_setting.hidden} type="file" id="setFiles-btn" onChange={setFile}/>
                                <label htmlFor="setFiles-btn" className={new_post_css.label}>
                                    <img src={add_photo_to_post} alt={'add file'}/>
                                </label>
                                <button className={new_post_css.publish} onClick={setNewPost}>Опубликовать</button>
                            </section>
                        </footer>
                    </section>
                    {props.message !== '' ?
                        <ErrorComponent message={props.message}/> : null
                    }
                </section>
            </section>
        </div>

    )
}
export default ProfileNewPostComponent