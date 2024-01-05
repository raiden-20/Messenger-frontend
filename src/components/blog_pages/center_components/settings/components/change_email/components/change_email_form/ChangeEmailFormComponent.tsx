import change_private_css from "./ChangeEmailForm.module.css";
import change_el_css from "../../../ChangeSettingsElements.module.css";
import React from "react";
import {
    PropsChangeEmailComponent
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingsChangEmailForm";
import ErrorComponent from "../../../error/ErrorComponent";

const ChangeEmailFormComponent = (props: PropsChangeEmailComponent) => {
    const sendInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputEmail(event.target.value)
    }
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }

    const cancelButtonAction = () => {
        props.setButtonChangeEmailPressed(false)
        props.setMessage('')
    }

    return (
        <div className={change_private_css.rootChangeEmail}>
            <section className={change_private_css.form}>
                <main>
                    <input value={props.input_email} placeholder={'Новый электронный адрес'}
                           onChange={sendInputEmail} className={change_el_css.input} required/>
                    <input type={"password"} value={props.input_password} placeholder={'Подтвердить пароль'}
                           onChange={sendInputPassword} className={change_el_css.input} required/>
                </main>
                <section className={change_el_css.buttons}>
                    <button className={change_el_css.button_save + ' ' + change_el_css.button} onClick={props.saveButtonAction}>
                        Сохранить
                    </button>
                    <button className={change_el_css.button_cancel + ' ' + change_el_css.button} onClick={cancelButtonAction}>
                        Отменить
                    </button>
                </section>
                <section>
                    {props.message !== '' ? <ErrorComponent message={props.message}/> : null}
                </section>
            </section>
        </div>
    )
}

export default ChangeEmailFormComponent