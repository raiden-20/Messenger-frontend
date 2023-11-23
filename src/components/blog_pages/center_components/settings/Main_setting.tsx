import React from 'react';

import settings_css from './Settings.module.css'

import setting_pencil from '../../../../assets/images/other/setting_pencil.svg'

const Main_setting = () => {
    return (
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
    )
}

export default Main_setting