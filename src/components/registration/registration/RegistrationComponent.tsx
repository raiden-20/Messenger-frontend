import React from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import {PropsAuthRegComponent} from "../../../redux/interfaces/auth/authRegistration";
import SuccessfulRegistrationComponent from "./options/successful_registration/SuccessfulRegistrationComponent";
import ErrorRegistrationComponent from "./options/error_registration/ErrorRegistrationComponent";
const RegistrationComponent = (props: PropsAuthRegComponent) => {

    const setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)

    }
    const setInputNickname = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputNickname(event.target.value)
    }
    const setInputName = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputName(event.target.value)
    }
    const setInputPassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const setInputConfirmPassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputConfirmPassword(event.target.value)
    }
    const setInputBirthDate = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputBirthDate(event.target.value)
    }

    return (
        <section>
            <section className={reg_curr.root}>
                <section className={reg_curr.form}>
                    <section className={reg_curr.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={setInputNickname}
                               value={props.input_nickname || ''} placeholder={'Никнейм'}/>
                        <input type={'text'} className={options_reg.input} onChange={setInputName}
                               value={props.input_name || ''} placeholder={'Имя'}/>
                        <input type={'date'} className={options_reg.input + ' ' + options_reg.input_date} onChange={setInputBirthDate}
                               value={props.input_birthDate || ''} placeholder={'Дата рождения'}/>
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
                            onClick={props.authentication} >
                        Зарегистрироваться
                    </button>
                </section>
            </section>
            <section>
                {props.buttonShowMessage ? props.code !== 0 ? props.code === 200 || props.code === 201 ?
                <SuccessfulRegistrationComponent message={props.message}/> :
                <ErrorRegistrationComponent message={props.message}/> : null : null}
            </section>
        </section>
    )
}

export default RegistrationComponent