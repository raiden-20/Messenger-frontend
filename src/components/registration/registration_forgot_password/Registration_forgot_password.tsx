import reg_forgot_css from './Registration_forgot_password.module.css'
import React from "react";
import options_reg from '../css_options/Options.module.css'

const Registration_forgot_password = () => {
    return (
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
    )
}

export default Registration_forgot_password