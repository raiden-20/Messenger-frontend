import change_private_css from "./ChangeEmailForm.module.css";
import change_el_css from '../../../ChangeSettingsElements.module.css'
import React from "react";
import {
    PropsChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import axios from "axios";

const ChangeEmailForm = (props : PropsChangeEmail) => {

    const config = {
        headers: { Authorization: `Bearer ${props.token}` }
    };
    const sendInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)
    }
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const saveButtonAction = () => {
        debugger
        if (props.input_email !== null && props.input_password !== null) {
            axios.post('http://localhost:8000/auth/change/email', { //todo не робит (bad request)
                "token": props.token,
                "password": props.input_password,
                "newEmail": props.input_email
            }, config).then(response => {
                debugger
                switch (response.status) {
                    case 200 : {
                        if (response.data === "Check your mailbox to confirm email") {
                            props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                            props.setNewEmail(props.input_email)
                        }
                        break
                    }
                    default:
                }
                props.setInputEmail('')
                props.setInputPassword('')
            }).catch(error => {
                debugger
                console.dir(error)
                props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            props.setMessage('Пользователя с такой почтой не существует')
                        } else if (error.response.data === "Password mismatch") {
                            props.setMessage('Неверный пароль')
                        }
                        break
                    }
                    case 409 : {
                        if (error.response.data === "This email is already in use") {
                            props.setMessage('Данный email уже используется')
                        }
                        break
                    }
                    default:
                }
                props.setInputEmail('')
                props.setInputPassword('')
            })

        }
    }
    const cancelButtonAction = () => {
        props.setButtonChangeEmailPressed(false)
    }


    return (
        <div className={change_private_css.rootChangeEmail}>
            <section className={change_private_css.form}>
                <main>
                    <input value={props.input_email} placeholder={'Новый электронный адрес'}
                           onChange={sendInputEmail} className={change_el_css.input} required/>
                    <input value={props.input_password} placeholder={'Подтвердить пароль'}
                           onChange={sendInputPassword} className={change_el_css.input} required/>
                </main>
                <section className={change_el_css.buttons}>
                    <button className={change_el_css.button_save + ' ' + change_el_css.button} onClick={saveButtonAction}>
                        Сохранить
                    </button>
                    <button className={change_el_css.button_cancel + ' ' + change_el_css.button} onClick={cancelButtonAction}>
                        Отменить
                    </button>
                </section>
                <section>
                    {props.message}
                </section>
            </section>
        </div>

    )
}

export default ChangeEmailForm