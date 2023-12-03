import React from "react";
import {
    PropsNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";

import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './NewPasswordForm.module.css'
import axios from "axios";

const NewPasswordForm = (props : PropsNewPassword) => {
    const config = {
        headers: { Authorization: `Bearer ${props.token}` }
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
        if (props.input_password != null && props.input_passwordConfirm != null &&
            props.input_password === props.input_passwordConfirm) {
            axios.put('http://localhost:8000/auth/confirm/password', {
                token: props.token,
                oneTimeCode: props.input_code,
                newPassword: props.input_password
            }, config).then(response => {
                debugger
                switch (response.status) {
                    case 200 : {
                        if (response.data === "Password changed") {
                            props.setMessage('Пароль был изменен')
                            props.setPassword(props.input_password)
                        }
                        props.setInputPassword('')
                        break
                    }
                    default:
                }
                props.setInputPassword('')
            }).catch(error => {
                debugger
                console.dir(error)
                props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            props.setMessage('Пользователя не существует')
                        } else if (error.response.data === "Code doesn't match") {
                            props.setMessage('Неверный код')
                        } else if (error.response.data === "The code is not relevant") {
                            props.setMessage('Истекло время использования кода')
                        }
                        break
                    }
                    default:
                }
                props.setInputPassword('')
            })
            props.setInputPassword('')
            props.setInputPasswordConfirm('')
            props.setInputCode('')
        }

    }

    const cancelButtonActionSecondStep = () => {
        props.setInputPassword(null)
        props.setInputPasswordConfirm(null)
        props.setInputCode(null)

        props.setButtonChangePasswordSecondStepPressed(false)
    }

    return (
        <div className={change_private_css.rootNewPassword}>
            <form className={change_private_css.newPasswordForm}>
                <section className={change_private_css.newPasswordInputs}>
                    <input placeholder={'Код'} onChange={sendInputCode}
                           className={change_el_css.input} required/>
                    <input placeholder={'Новый пароль'} onChange={sendInputPassword}
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
            </form>

        </div>
    )
}

export default NewPasswordForm