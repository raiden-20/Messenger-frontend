import change_private_css from "./ChangeEmailForm.module.css";
import change_el_css from '../../../ChangeSettingsElements.module.css'
import React from "react";
import {PropsChangeEmail} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import {ChangeEmailAxios} from "../../../../../../../axios/auth/AuthAxios";

const ChangeEmailForm = (props : PropsChangeEmail) => {
    const sendInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)
    }
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const saveButtonAction = () => {
        if (props.input_email !== null && props.input_password !== null) {
            ChangeEmailAxios( {
                input_password: props.input_password,
                input_email: props.input_email,
                setMessage: props.setMessage,
                setNewEmail: props.setNewEmail
            })
            props.setInputEmail('')
            props.setInputPassword('')
        }
    }
    const cancelButtonAction = () => {
        props.setButtonChangeEmailPressed(false)
    }


    return ( //todo вынести
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