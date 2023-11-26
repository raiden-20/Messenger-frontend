import React from "react";
import reg_new_pass from './RegistrationNewPassword.module.css'
import options_reg from '../css_options/Options.module.css'

const RegistrationNewPassword = () => {
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

export default RegistrationNewPassword