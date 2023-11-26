import prof_setting from './ProfileSetting.module.css'

const ProfileSettings = () => {
    return (
        <div>
            <section className={prof_setting.overflay}></section>

            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.edit_prof_window}>
                    <form className={prof_setting.edit_form}>
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
                                    <input/>
                                </section>
                                <section className={prof_setting.box2}>
                                    <legend>Фамилия</legend>
                                    <input/>
                                </section>
                                <section className={prof_setting.box3}>
                                    <legend>Никнейм</legend>
                                    <input/>
                                </section>
                                <section className={prof_setting.box4}>
                                    <legend>Дата рождения</legend>
                                    <input type="date"/>
                                </section>
                                <section className={prof_setting.textAreaBox}>
                                    <legend>О себе</legend>
                                    <textarea></textarea>
                                </section>
                            </main>
                            <footer>
                                <button className={prof_setting.cancel}>Отменить</button>
                                <button className={prof_setting.save} type={'submit'}>Сохранить</button>
                            </footer>
                        </section>

                    </form>
                </section>
            </section>
        </div>

    )
}
export default ProfileSettings