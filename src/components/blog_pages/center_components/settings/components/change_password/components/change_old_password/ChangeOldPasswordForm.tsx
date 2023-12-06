import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './ChangeOldPassword.module.css'
import React from "react";
import {PropsOldPassword} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";
import axios from "axios";

const ChangeOldPasswordForm = (props : PropsOldPassword) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const cancelButtonActionFirstStep = () => {
        props.setInputPassword(null)
        props.setMessage('')
        props.setButtonChangePasswordFirstStepPressed(false)
    }

    const saveButtonActionFirstStep = () => {
        const a = localStorage.getItem('token')
        console.log(a)
        if (props.input_password != null) {
            if (props.input_password === localStorage.getItem('password')) {
                axios.post('http://localhost:8000/auth/change/password', {
                    token: localStorage.getItem('token'),
                    password: props.input_password,
                }, config).then(response => {
                    switch (response.status) {
                        case 200 : {
                            if (response.data === "Check your mailbox to confirm new password") {
                                props.setMessage('На Вашу почту был отправлен одноразовый код')
                            }

                            props.setInputPassword(null)
                            props.setButtonChangePasswordFirstStepPressed(false)
                            props.setButtonChangePasswordSecondStepPressed(true)
                            break
                        }
                        default:
                    }
                    props.setInputPassword(null)
                }).catch(error => {
                    debugger
                    console.dir(error)
                    props.setMessage(error.message)
                    switch (error.response.status) {
                        case 400 : {
                            if (error.response.data === "User doesn't exist") {
                                props.setMessage('Пользователя не существует')
                            } else if (error.response.data === "Password mismatch") {
                                props.setMessage('Неверный пароль')
                            }else if (error.response.data === "Bad token") {
                                props.setMessage('Плохой токен')
                            }
                            break
                        }
                        case 409 : {
                            if (error.response.data === "The password was changed less than 5 minutes ago, please try again later") {
                                props.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                            }
                            break
                        }
                        default:
                    }
                    props.setInputPassword('')
                })
            } else {
                props.setMessage('Неправильный пароль')
                props.setInputPassword('')
            }

        }

    }

    return (
        <div className={change_private_css.rootChangePassword}>
            <section className={change_private_css.setOldPassword}>
                <legend>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес бла бла бла
                </legend>
                <main>
                    <input value={props.input_password} onChange={sendInputPassword}
                           className={change_el_css.input} placeholder={'Пароль'} required/>
                    <section>
                        <button onClick={saveButtonActionFirstStep} className={change_el_css.button_save + ' ' + change_el_css.button}>
                            Далее
                        </button>
                        <button onClick={cancelButtonActionFirstStep} className={change_el_css.button_cancel  + ' ' + change_el_css.button}>
                            Отменить
                        </button>
                    </section>
                </main>
                <section>
                    {props.message}
                </section>
            </section>
        </div>
    )
}

export default ChangeOldPasswordForm