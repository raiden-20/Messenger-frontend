import React from "react";
import reg from './RegistrationOrAutorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import {NavLink} from "react-router-dom";
import {
    PropsAuthAuthComponent
} from "../../../redux/interfaces/auth/authAuthorize";
const RegistrationOrAuthorisationComponent = (props: PropsAuthAuthComponent) => {


    const setInputEmailOrNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmailOrNickname(event.target.value)
        if (!event.target.value.split('').includes('@')) {
            props.setInputNickname(event.target.value)
            props.setInputEmail('')
        } else {
            props.setInputEmail(event.target.value)
            props.setInputNickname('')
        }
    }
    const setInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }

    return (
        <section className={reg.functional}>
            <section className={reg.form}>
                <section className={reg.inputs}>
                    <input type={'text'} className={options_reg.input} onChange={setInputEmailOrNickname}
                           value={props.input_emailOrNickname} placeholder={'Электронный адрес или никнейм'}/>
                    <input type={'text'} className={options_reg.input} onChange={setInputPassword}
                           value={props.input_password} placeholder={'Пароль'}/>
                </section>
                <button className={options_reg.main_page_button} onClick={props.authorise}
                        type={'submit'}>Войти
                </button>
            </section>
            <section className={reg.other_buttons}>
                <button className={reg.forgot_button}>Забыли пароль?</button>
                <section className={reg.or}>
                    <hr></hr>
                    или
                    <hr></hr>
                </section>
                    <button type={'submit'} className={reg.registration_button} onClick={props.cleanMessageAndChangePath}>
                        Зарегистрироваться
                    </button>
            </section>
            <section>
                {props.message}
            </section>
        </section>
    );
}

export default RegistrationOrAuthorisationComponent