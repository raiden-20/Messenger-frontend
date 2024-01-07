import React from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import {PropsAuthRegComponent} from "../../../redux/interfaces/auth/authRegistration";
import ErrorRegistrationComponent from "./options/error_registration/ErrorRegistrationComponent";
import reg from "../registration_or_authorization/RegistrationOrAutorisation.module.css";
import {useNavigate} from "react-router-dom";
import {SUCCESSFUL_ACTIVATION} from "../../../paths/authPath";

const RegistrationComponent = (props: PropsAuthRegComponent) => {

    const navigate = useNavigate()

    const setInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)

    }
    const setInputNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputNickname(event.target.value)
    }
    const setInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputName(event.target.value)
    }
    const setInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const setInputConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputConfirmPassword(event.target.value)
    }
    const setInputBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputBirthDate(event.target.value)
    }
    const registration = () => {
        props.setShowMessage(true)
        if (props.input_name !== '') {
            if (props.input_email !== '' && props.input_nickname !== '' &&
                props.input_password !== '' && props.input_confirmPassword !== '') {
                if (props.input_password.length >= 8) {
                    if (props.input_email.split('').includes('@')) {
                        if (props.input_password === props.input_confirmPassword) {
                            props.setShowMessage(false)
                            if (props.authentication()) {
                                props.setMessage('На Вашу почту было отправлено письмо. Для продолжения перейдите по ссылке, указанной в письме')
                                navigate(SUCCESSFUL_ACTIVATION)
                            }
                        } else {

                            props.setMessage('Пароли не совпадают')
                        }
                    } else {
                        props.setMessage('Неверный ввод email')
                    }
                } else {
                    props.setMessage('Пароль должен содержать 8 и более символов')
                }
            }
        } else {
            props.setMessage('Введите имя')
        }
    }

    return (
        <section className={reg.div}>
            <section className={reg_curr.root}>
                <section className={reg_curr.form}>
                    <section className={reg_curr.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={setInputNickname}
                               value={props.input_nickname || ''} placeholder={'Никнейм'}/>
                        <input type={'text'} className={options_reg.input} onChange={setInputName}
                               value={props.input_name || ''} placeholder={'Имя'}/>
                        <input type={'date'} placeholder={'ДД/ММ/ГГГГ'}
                               className={options_reg.input + ' ' + options_reg.input_date} onChange={setInputBirthDate}
                               value={props.input_birthDate || ''}/>
                        <input type={'text'} className={options_reg.input} onChange={setInputEmail}
                               value={props.input_email || ''} placeholder={'Электронный адрес'}/>
                        <input type={'password'} className={options_reg.input} onChange={setInputPassword}
                               value={props.input_password || ''}
                               placeholder={'Пароль'}/>
                        <input type={'password'} className={options_reg.input} onChange={setInputConfirmPassword}
                               value={props.input_confirmPassword || ''}
                               placeholder={'Подтвердите пароль'}/>
                    </section>
                    <button className={options_reg.main_page_button + ' ' + reg_curr.button}
                            onClick={registration}>
                        Зарегистрироваться
                    </button>
                </section>
            </section>
            <section>
                {props.buttonShowMessage ? <ErrorRegistrationComponent message={props.message}/> : null}
            </section>
        </section>
    )
}

export default RegistrationComponent