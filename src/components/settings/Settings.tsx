import React from 'react';
import setting_pencil from '../../assets/images/other/setting_pencil.svg'
import Navigation from "../navigation/Navigation";
import search_svg from "../../assets/images/friends/search.svg";
import chatting from "../../assets/images/other/chat_with_user.svg";
import adding_to_friend from "../../assets/images/other/adding_to_friend.svg";
import settings_css from './Settings.module.css'

const Settings = () => {
    return (
        <div className={settings_css.div}>
            <section className={settings_css.page}>
                <Navigation/>
                <section className={settings_css.main}>
                    <section className={settings_css.settings}>
                        <main>
                            <section className={settings_css.leg_container}>
                                <legend> <strong>Электронный адрес</strong> </legend>
                                <section>
                                    <section className={settings_css.section_and_edit}>
                                        simon@mail.com
                                        <img tabIndex={0} src={setting_pencil} alt={'setting pencil'}/>
                                    </section>
                                    {/*<section>*/}
                                    {/*    <form>*/}
                                    {/*        <input/>*/}
                                    {/*        <input/>*/}
                                    {/*        <section>*/}
                                    {/*            <button>Сохранить</button>*/}
                                    {/*            <button>Отменить</button>*/}
                                    {/*        </section>*/}
                                    {/*    </form>*/}
                                    {/*</section>*/}
                                </section>
                            </section>
                            <section className={settings_css.leg_container}>
                                <legend><strong>Пароль</strong></legend>
                                <section>
                                    <section className={settings_css.section_and_edit}>
                                        ***************
                                        <img src={setting_pencil} alt={'setting pencil'}/>
                                    </section>
                                    <section>

                                    </section>
                                </section>

                            </section>
                            <section className={settings_css.leg_container}>
                                <legend><strong>Язык</strong></legend>
                                <section className={settings_css.section_and_edit}>
                                    <select>
                                        <option>Русский</option>
                                        <option>English</option>
                                        <option>한국어</option>
                                    </select>
                                    <section></section>
                                </section>

                            </section>
                        </main>
                        <footer>
                            <button>Удалить учетную запись</button>
                        </footer>
                    </section>
                    <section className={settings_css.nav_settings}>
                        <section>
                            <button><strong>Учетная запись</strong></button>
                        </section>
                        <section>
                            <button><strong>Безопасность</strong></button>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Settings