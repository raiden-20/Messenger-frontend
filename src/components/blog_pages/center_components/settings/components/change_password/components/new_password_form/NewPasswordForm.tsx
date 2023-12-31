import React from "react";
import {PropsNewPassword} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";
import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './NewPasswordForm.module.css'
import {NewPasswordAxios} from "../../../../../../../axios/auth/AuthAxios";

const NewPasswordForm = (props : PropsNewPassword) => {
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
                NewPasswordAxios( {
                    input_code: props.input_code,
                    input_password: props.input_password,

                    setMessage: props.setMessage,
                    setPassword: props.setPassword
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