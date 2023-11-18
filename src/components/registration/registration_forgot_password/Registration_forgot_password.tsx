import reg_forgot_css from './Registration_forgot_password.module.css'
import React from "react";
import '../css_options/Options.css'
import '../css_options/Page.css'

const Registration_forgot_password = () => {
    return (
        <div className={'page'}>
            <section className={'main'}>
                <section className={'content'}>
                    <aside>
                    </aside>
                    <main className={reg_forgot_css.main}>
                        <header>СимОн</header>
                        <section className={reg_forgot_css.functional}>
                            <section className={reg_forgot_css.text}>
                                <p><strong>Проблемы со входом?</strong></p>
                                <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                            </section>
                            <form>
                                <section className={reg_forgot_css.inputs}>
                                    <input placeholder={'Электронный адрес или никнейм'}/>
                                </section>
                                <button className={'main_page_button'}>Сбросить пароль</button>
                            </form>
                        </section>
                    </main>
                </section>
            </section>

        </div>
    )
}

export default Registration_forgot_password