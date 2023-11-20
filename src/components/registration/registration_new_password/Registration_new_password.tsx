import React from "react";
import reg_new_pass from './Registration_new_password.module.css'
import options_reg from '../css_options/Options.module.css'
import page_reg from '../css_options/Page.module.css'

const Registration_new_password = () => {
    return (
        <div className={page_reg.page}>
            <section className={page_reg.main}>
                <section className={page_reg.content + ' ' + reg_new_pass.content}>
                    <aside>
                    </aside>
                    <section className={reg_new_pass.main}>
                        <header className={options_reg.header}>СимОн</header>
                        <form>
                            <section className={reg_new_pass.inputs}>
                                <input className={options_reg.input} placeholder={'Новый пароль'}/>
                                <input className={options_reg.input} placeholder={'Подтвердить пароль'}/>
                            </section>
                            <button className={options_reg.main_page_button}>Сбросить пароль</button>
                        </form>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Registration_new_password