import React from "react";
import reg_new_pass from './Registration_new_password.module.css'
import options_reg from '../css_options/Options.module.css'
import page_reg from '../css_options/Page.module.css'

const Registration_new_password = () => {
    return (
        <form className={reg_new_pass.form}>
            <section className={reg_new_pass.inputs}>
                <input className={options_reg.input} placeholder={'Новый пароль'}/>
                <input className={options_reg.input} placeholder={'Подтвердить пароль'}/>
            </section>
            <button className={options_reg.main_page_button}>Сбросить пароль</button>
        </form>
    )
}

export default Registration_new_password