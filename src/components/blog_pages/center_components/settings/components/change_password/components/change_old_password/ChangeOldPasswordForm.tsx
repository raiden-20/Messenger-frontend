import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './ChangeOldPassword.module.css'
import React from "react";
import {PropsOldPassword} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";
import {ChangeOldPasswordAxios} from "../../../../../../../axios/auth/AuthAxios";

const ChangeOldPasswordForm = (props : PropsOldPassword) => {

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
                ChangeOldPasswordAxios( {
                    input_password: props.input_password,

                    setMessage: props.setMessage,
                    setButtonChangePasswordFirstStepPressed: props.setButtonChangePasswordFirstStepPressed,
                    setButtonChangePasswordSecondStepPressed: props.setButtonChangePasswordSecondStepPressed
                })
                props.setInputPassword('')
            } else {
                props.setMessage('Неправильный пароль')
                props.setInputPassword('')
            }

        }

    }

    return ( // todo вынести
        <div className={change_private_css.rootChangePassword}>
            <section className={change_private_css.setOldPassword}>
                <legend>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес бла бла бла
                </legend>
                <main>
                    <input value={props.input_password.replace(/./g, '*')} onChange={sendInputPassword}
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