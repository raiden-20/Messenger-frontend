import React from 'react';

import settings_css from './Settings.module.css'

import setting_pencil from '../../../../assets/images/other/setting_pencil.svg'
import ChangeEmail from "./components/ChangeEmail";
import Change_password_Email from "./components/Change_password_Email";

let button_changed_email = false
let button_changed_password = false

const MainSetting = () => {

    return (
        <section className={settings_css.root}>
            <section className={settings_css.settings}>
                <main>
                    <section className={settings_css.leg_container}>
                        <legend> <strong>Электронный адрес</strong> </legend>
                        <ChangeEmail/>
                        {/*<section>*/}
                        {/*    {*/}
                        {/*        !button_changed_email*/}
                        {/*        ?*/}
                        {/*        <section className={settings_css.section_and_edit}>*/}
                        {/*            simon@mail.com*/}
                        {/*            <button onClick={() => button_changed_email ? button_changed_email = false : button_changed_email = true}>*/}
                        {/*                <img tabIndex={0} src={setting_pencil} alt={'setting pencil'} />*/}
                        {/*            </button>*/}
                        {/*        </section>*/}
                        {/*        : <Change_email/>*/}
                        {/*    }*/}
                        {/*</section>*/}
                    </section>
                    <section className={settings_css.leg_container}>
                        <legend><strong>Пароль</strong></legend>
                        <section>
                            {
                                !button_changed_password ?
                                    <section className={settings_css.section_and_edit}>
                                        ***************
                                        <button onClick={() => button_changed_password ? button_changed_password = false : button_changed_password = true}>
                                            <img src={setting_pencil} alt={'setting pencil'}/>
                                        </button>

                                    </section> :
                                    <Change_password_Email/>
                            }
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
        </section>

    )
}

export default MainSetting