import change_private_css from "./ChangeEmailForm.module.css";
import change_el_css from '../../../ChangeSettingsElements.module.css'
import React from "react";
import {
    PropsChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AUTHORIZATION} from "../../../../../../../paths/authPath";

const ChangeEmailForm = (props : PropsChangeEmail) => {
    const navigate = useNavigate()

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const sendInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)
    }
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const saveButtonAction = () => {
        if (props.input_email !== null && props.input_password !== null) {
            props.setToken(localStorage.getItem('token'))
            axios.post('http://localhost:8080/auth/change/email', {
                "token": localStorage.getItem('token'),
                "password": props.input_password,
                "newEmail": props.input_email
            }, config).then(response => {
                props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                localStorage.setItem('token', response.data)
                props.setToken(response.data)
                props.setNewEmail(props.input_email)

                navigate(AUTHORIZATION)

                props.setInputEmail('')
                props.setInputPassword('')
            }).catch(error => {
                console.dir(error)
                props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            props.setMessage('Пользователя с такой почтой не существует')
                        } else if (error.response.data === "Password mismatch") {
                            props.setMessage('Неверный пароль')
                        }else if (error.response.data === "Bad token") {
                            props.setMessage('Плохой токен')
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