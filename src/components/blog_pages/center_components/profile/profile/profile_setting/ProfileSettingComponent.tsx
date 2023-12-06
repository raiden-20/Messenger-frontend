import prof_setting from './ProfileSetting.module.css'
import {
    PropsProfileSettings,
    PropsProfileSettingsComponent
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import React from "react";

const ProfileSettingsComponent = (props: PropsProfileSettingsComponent) => {

    const setName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputName(event.target.value)
    }
    const setSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputSurname(event.target.value)
    }

    const setNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputNickname(event.target.value)
    }
    const setBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setInputBio(event.target.value)
    }



    return (
        <div>
            <section className={prof_setting.overflay}></section>

            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.edit_prof_window}>
                    <section className={prof_setting.edit_form}>
                        <section className={prof_setting.bgc_and_ava}>
                            <section tabIndex={0} className={prof_setting.bgc_profile}>
                                <section className={prof_setting.det_delete_bgc}>
                                    <section>
                                        <div>Загрузить фото</div>
                                    </section>
                                    <section>
                                        <div>Удалить</div>
                                    </section>
                                </section>
                            </section>
                            <section tabIndex={0} className={prof_setting.ava}>
                                <section className={prof_setting.det_delete_ava}>
                                    <section>
                                        <div>Загрузить фото</div>
                                    </section>
                                    <section>
                                        <div>Удалить</div>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className={prof_setting.form_cont}>
                            <main>
                                <section className={prof_setting.box1}>
                                    <legend>Имя</legend>
                                    <input value={props.input_name} onChange={setName}/>
                                </section>
                                <section className={prof_setting.box2}>
                                    <legend>Фамилия</legend>
                                    <input value={props.input_surname} onChange={setSurname}/>
                                </section>
                                <section className={prof_setting.box3}>
                                    <legend>Никнейм</legend>
                                    <input value={props.input_nickname} onChange={setNickname}/>
                                </section>
                                <section className={prof_setting.box4}>
                                    <legend>Дата рождения</legend>
                                    <input type="date"/>
                                </section>
                                <section className={prof_setting.textAreaBox}>
                                    <legend>О себе</legend>
                                    <textarea value={props.input_bio} onChange={setBio}></textarea>
                                </section>
                            </main>
                            <footer>
                                <button className={prof_setting.cancel}>Отменить</button>
                                <button className={prof_setting.save} type={'submit'} onClick={props.setData}>Сохранить</button>
                            </footer>
                        </section>

                    </section>
                </section>
            </section>
        </div>

    )
}
export default ProfileSettingsComponent