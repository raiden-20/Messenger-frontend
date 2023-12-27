import React from "react";
import {
    PropsNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";

import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './NewPasswordForm.module.css'
import axios from "axios";
import {AUTHORIZATION} from "../../../../../../../paths/authPath";
import {useNavigate} from "react-router-dom";

const NewPasswordForm = (props : PropsNewPassword) => {
    const navigate = useNavigate()

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const sendInputPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPasswordConfirm(event.target.value)
    }
    const sendInputCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputCode(event.target.value)
    }
    const saveButtonActionSecondStep = () => {
        if (props.input_password != null && props.input_passwordConfirm != null) {
            if (props.input_password === props.input_passwordConfirm) {
                axios.put('http://localhost:8080/auth/confirm/password', {
                    token: props.token,
                    oneTimeCode: props.input_code,
                    newPassword: props.input_password
                }, config).then(response => {

                    props.setMessage('Пароль был изменен')
                    props.setPassword(props.input_password)
                    localStorage.setItem('password', props.input_password)
                    if (response.data.split(' ').length === 2) {
                        localStorage.setItem('token', response.data.split(' ')[1])
                    } else {
                        localStorage.setItem('token', response.data)
                    }

                    navigate(AUTHORIZATION)
                    props.setInputPassword('')

                }).catch(error => {
                    props.setMessage(error.message)
                    switch (error.response.status) {
                        case 400 : {
                            if (error.response.data === "User doesn't exist") {
                                props.setMessage('Пользователя не существует')
                            } else if (error.response.data === "Code doesn't match") {
                                props.setMessage('Неверный код')
                            } else if (error.response.data === "The code is not relevant") {
                                props.setMessage('Истекло время использования кода')
                            }else if (error.response.data === "Bad token") {
                                props.setMessage('Плохой токен')
                            }
                            break
                        }
                        default:
                    }
                })
                props.setInputPassword('')
                props.setInputPasswordConfirm('')
                props.setInputCode('')
            } else {
                props.setMessage('Пароли не совпадают')
            }
        }
    }

    const cancelButtonActionSecondStep = () => {
        props.setInputPassword('')
        props.setInputPasswordConfirm('')
        props.setInputCode('')
        props.setMessage('')

        props.setButtonChangePasswordSecondStepPressed(false)
    }

    return (
        <div className={change_private_css.rootNewPassword}>
            <section className={change_private_css.newPasswordForm}>
                <section className={change_private_css.newPasswordInputs}>
                    <input placeholder={'Код'} onChange={sendInputCode}
                           value={props.input_code.replace(/./g, '*')}
                           className={change_el_css.input} required/>
                    <input placeholder={'Новый пароль'} onChange={sendInputPassword}
                           value={props.input_password.replace(/./g, '*')}
                           className={change_el_css.input} required/>
                    <input placeholder={'Подтвердить новый пароль'} onChange={sendInputPasswordConfirm}
                           className={change_el_css.input} required/>
                </section>
                <section className={change_el_css.buttons}>
                    <button onClick={saveButtonActionSecondStep} className={change_el_css.button_save + ' ' + change_el_css.button}>
                        Сохранить
                    </button>
                    <button onClick={cancelButtonActionSecondStep} className={change_el_css.button_cancel + ' ' + change_el_css.button}>
                        Отменить
                    </button>
                </section>
            </section>
            {props.message}
        </div>
    )
}

export default NewPasswordForm