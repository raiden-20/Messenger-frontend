import React from "react";
import reg from './Registration_or_autorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import {NavLink} from "react-router-dom";

const Registration_or_autorisation = () => {
    return (
        <section className={reg.functional}>
            <form>
                <section className={reg.inputs}>
                    <input className={options_reg.input} placeholder={'Электронный адрес или никнейм'}/>
                    <input className={options_reg.input} placeholder={'Пароль'}/>
                </section>
                <NavLink to={'/registration_restore_account'}>
                    <button className={options_reg.main_page_button} type={'submit'}>Войти</button>
                </NavLink>
            </form>
            <section className={reg.other_buttons}>
                <NavLink to={'/registration_forgot_password'}>
                    <button className={reg.forgot_button}>Забыли пароль?</button>
                </NavLink>
                <section className={reg.or}>
                    <hr></hr>
                    или
                    <hr></hr>
                </section>
                <NavLink to={'/registration'} className={reg.a}>
                    <button className={reg.registration_button}>Зарегистрироваться</button>
                </NavLink>

            </section>
        </section>
    )
}

export default Registration_or_autorisation