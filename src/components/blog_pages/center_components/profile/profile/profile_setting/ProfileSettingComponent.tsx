import prof_setting from './ProfileSetting.module.css'
import {
    PropsProfileSettingsComponent
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import React, {useState} from "react";
import default_ava from '../../../../../../assets/images/default_profile_ava.svg'
import default_cover from '../../../../../../assets/images/default_cover.jpg'
import ErrorComponent from "../../../settings/components/error/ErrorComponent";

const ProfileSettingsComponent = (props: PropsProfileSettingsComponent) => {
    const [imageAvatarSrc, setImageAvatarSrc] = useState(props.avatarUrl);
    const [imageCoverSrc, setImageCoverSrc] = useState(props.coverUrl);


    const setName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputName(event.target.value)
    }
    const setNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputNickname(event.target.value)
    }
    const setBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setInputBio(event.target.value)
    }
    const setCover = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMessage('')
        if (event.target.files !== null) {
            const file = event.target.files[0];
            if (event.target.files[0].size <= 2097152) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        setImageCoverSrc(event.target.result.toString());
                    }

                };

                reader.readAsDataURL(file);
                props.setInputCoverUrl(event.target.files[0])
                if (props.coverUrl !== '') {
                    props.setDeleteCoverUrl(props.coverUrl)
                    props.setDeleteCoverFlag(true)
                }
            } else {
                props.setMessage('Большой размер файла')
            }
        }
    }
    const setAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setMessage('')
        if (event.target.files !== null) {
            const file = event.target.files[0];
            if (event.target.files[0].size <= 2097152) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        setImageAvatarSrc(event.target.result.toString());
                    }

                };
                reader.readAsDataURL(file);
                props.setInputAvatarUrl(event.target.files[0])
                if (props.avatarUrl !== '') {
                    props.setDeleteAvatarUrl(props.avatarUrl)
                    props.setDeleteAvatarFlag(true)
                }
            } else {
                props.setMessage('Большой размер файла')
            }
        }
    }
    const setBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputBirthDate(event.target.value)
    }
    const deleteInputCover = () => {
        setImageCoverSrc('')
        props.setInputCoverUrl(null)
        if (props.coverUrl !== '') {
            props.setDeleteCoverUrl(props.coverUrl)
            props.setDeleteCoverFlag(true)
        }

    }
    const deleteInputAvatar = () => {
        setImageAvatarSrc('')
        props.setInputAvatarUrl(null)
        if (props.coverUrl !== '') {
            props.setDeleteAvatarUrl(props.avatarUrl)
            props.setDeleteAvatarFlag(true)
        }

    }
    const cancel = () => {
        props.setButtonSettingPressed(false)
        props.setInputName('')
        props.setInputNickname('')
        props.setInputBirthDate('')
        props.setInputBio('')

        props.setDeleteCoverFlag(false)
        props.setDeleteAvatarFlag(false)
    }



    return (
        <div>
            <section className={prof_setting.overflay}></section>

            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.edit_prof_window}>
                    <section className={prof_setting.edit_form}>
                        <section className={prof_setting.bgc_and_ava}>
                            <section tabIndex={0} className={prof_setting.bgc_profile}>
                                <img src={imageCoverSrc === '' ? default_cover : imageCoverSrc} id='cover' alt={'input cover'} className={prof_setting.img_cover}/>
                                <section className={prof_setting.det_delete_bgc}>
                                    <section>
                                        <input className={prof_setting.hidden} type="file" id="setCover-btn" onChange={setCover}/>
                                        <label htmlFor="setCover-btn">Загрузить фото</label>
                                    </section>
                                    <section>
                                        <label onClick={deleteInputCover}>Удалить</label>
                                    </section>
                                </section>
                            </section>
                            <section tabIndex={0} className={prof_setting.ava}>
                                <img src={imageAvatarSrc === '' ? default_ava : imageAvatarSrc} id='avatar' className={prof_setting.img_ava} alt={'input ava'}/>
                                <section className={prof_setting.det_delete_ava}>
                                    <section>
                                        <input className={prof_setting.hidden} type="file" id="setAvanar-btn" onChange={setAvatar}/>
                                        <label htmlFor="setAvanar-btn">Загрузить фото</label>
                                    </section>
                                    <section>
                                        <label onClick={deleteInputAvatar}>Удалить</label>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className={prof_setting.form_cont}>
                            <section className={prof_setting.form}>
                                <section className={prof_setting.box1}>
                                    <legend>Имя</legend>
                                    <input value={props.input_name} onChange={setName}/>
                                </section>
                                <section className={prof_setting.box2}>
                                    <legend>Никнейм</legend>
                                    <input value={props.input_nickname} onChange={setNickname}/>
                                </section>
                                <section className={prof_setting.box3}>
                                    <legend>Дата рождения</legend>
                                    <input type="date" value={props.input_birthDate} onChange={setBirthDate}/>
                                </section>
                                <section className={prof_setting.textAreaBox}>
                                    <legend>О себе</legend>
                                    <textarea value={props.input_bio} onChange={setBio}></textarea>
                                </section>
                            </section>
                            <footer>
                                <button className={prof_setting.cancel} onClick={cancel}>Отменить</button>
                                <button className={prof_setting.save} type={'submit'} onClick={props.setData}>Сохранить</button>
                            </footer>
                        </section>
                        {props.message !== '' ?
                            <ErrorComponent message={props.message}/> : null
                        }
                    </section>
                </section>
            </section>
        </div>

    )
}
export default ProfileSettingsComponent