import React from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import ErrorRegistration from "./options/error_registration/ErrorRegistration";
import SuccessfulRegistration from "./options/successful_registration/SuccessfulRegistration";

let error = false
let success = false

const Registration = () => {
    const errorReg = () => {
        success = true
    }

    return (
        <section>
            <section className={reg_curr.root}>
                <form className={reg_curr.form}>
                    <section className={reg_curr.inputs}>
                        <input className={options_reg.input} placeholder={'Никнейм'}/>
                        <input className={options_reg.input} placeholder={'Электронный адрес'}/>
                        <input className={options_reg.input} placeholder={'Пароль'}/>
                        <input className={options_reg.input} placeholder={'Подтвердите пароль'}/>
                    </section>
                    <button className={options_reg.main_page_button} onClick={errorReg}>Зарегистрироваться</button>
                </form>
            </section>
            <ErrorRegistration/>
            {/*{error ? <ErrorRegistration/> : success ? <SuccessfulRegistration/> : null}*/}
        </section>
    )
}

export default Registration