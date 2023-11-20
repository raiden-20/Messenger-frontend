import reg_forgot_css from './Registration_forgot_password.module.css'
import React from "react";
import options_reg from '../css_options/Options.module.css'
import page_reg from '../css_options/Page.module.css'

const Registration_forgot_password = () => {
    return (
        <div className={page_reg.page}>
            <section className={page_reg.main}>
                <section className={page_reg.content + ' ' + reg_forgot_css.content}>
                    <aside>
                    </aside>
                    <main>
                        <header className={options_reg.header}>СимОн</header>
                        <section className={reg_forgot_css.functional}>
                            <section className={reg_forgot_css.text}>
                                <p><strong>Проблемы со входом?</strong></p>
                                <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                            </section>
                            <form>
                                <section className={reg_forgot_css.inputs}>
                                    <input className={options_reg.input} placeholder={'Электронный адрес или никнейм'}/>
                                </section>
                                <button className={options_reg.main_page_button}>Сбросить пароль</button>
                            </form>
                        </section>
                    </main>
                </section>
            </section>

        </div>
    )
}

export default Registration_forgot_password