import React from "react";
import reg from './RegistrationOrAutorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import prof from '../css_options/Page.module.css'
import {
    PropsAuthAuthComponent
} from "../../../redux/interfaces/auth/authAuthorize";
import ErrorRegistrationComponent from "../registration/options/error_registration/ErrorRegistrationComponent";
const RegistrationOrAuthorisationComponent = (props: PropsAuthAuthComponent) => {

    const setInputEmailOrNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmailOrNickname(event.target.value)
        if (!event.target.value.split('').includes('@')) {
            props.setInputNickname(event.target.value)
        } else {
            props.setInputEmail(event.target.value)
        }
    }
    const setInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }

    return (
        <div className={reg.div}>
            <section className={reg.functional}>
                <section className={reg.form}>
                    <section className={reg.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={setInputEmailOrNickname}
                               value={props.input_emailOrNickname} placeholder={'Электронный адрес или никнейм'}/>
                        <input type={'password'} className={options_reg.input} onChange={setInputPassword}
                               value={props.input_password} placeholder={'Пароль'}/>
                    </section>
                    <button className={options_reg.main_page_button} onClick={props.authorise}
                            type={'submit'}>Войти
                    </button>
                </section>
                <section className={reg.other_buttons}>
                    <button className={reg.forgot_button} onClick={props.forgotPassword}>Забыли пароль?</button>
                    <section className={reg.or}>
                        <hr></hr>
                        или
                        <hr></hr>
                    </section>
                    <button type={'submit'} className={reg.registration_button} onClick={props.toRegistration}>
                        Зарегистрироваться
                    </button>
                </section>
            </section>
            <section className={prof.message}>
                {props.message !== '' && props.buttonShowMessage ? <ErrorRegistrationComponent message={props.message}/> : null}
            </section>
        </div>

    );
}

export default RegistrationOrAuthorisationComponent