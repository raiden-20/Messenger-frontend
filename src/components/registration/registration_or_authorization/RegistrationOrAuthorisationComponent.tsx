import React from "react";
import reg from './RegistrationOrAutorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import prof from '../css_options/Page.module.css'
import {
    PropsAuthAuthComponent
} from "../../../redux/interfaces/auth/authAuthorize";
import ErrorRegistration from "../registration/options/error_registration/ErrorRegistration";
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
        showPassword()
    }

    let pagePassword = ""

    const showPassword = () => {
        if (props.input_password === '') {
            pagePassword = ''
        } else {
            props.input_password.split('').map(() => pagePassword += '*')
        }
    }

    return (
        <div>
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
                    <button className={reg.forgot_button} onClick={props.forgotPassword}>Забыли пароль?</button>
                    <section className={reg.or}>
                        <hr></hr>
                        или
                        <hr></hr>
                    </section>
                    <button type={'submit'} className={reg.registration_button} onClick={props.cleanMessageAndChangePath}>
                        Зарегистрироваться
                    </button>
                </section>
            </section>
            <section className={prof.message}>
                {props.code !== 200 && props.buttonShowMessage ? <ErrorRegistration message={props.message}/> : null}
            </section>
        </div>

    );
}

export default RegistrationOrAuthorisationComponent