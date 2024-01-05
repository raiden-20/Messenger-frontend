import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './NewPasswordForm.module.css'
import ErrorComponent from "../../../error/ErrorComponent";
import React from "react";
import {
    PropsNewPasswordComponent
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";

const NewPasswordComponent = (props: PropsNewPasswordComponent) => {
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const sendInputPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPasswordConfirm(event.target.value)
    }
    const sendInputCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputCode(event.target.value)
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
                           value={props.input_code}
                           className={change_el_css.input} required/>
                    <input type={'password'} placeholder={'Новый пароль'} onChange={sendInputPassword}
                           value={props.input_password}
                           className={change_el_css.input} required/>
                    <input type={'password'} placeholder={'Подтвердить новый пароль'} onChange={sendInputPasswordConfirm}
                           value={props.input_passwordConfirm}
                           className={change_el_css.input} required/>
                </section>
                <section className={change_el_css.buttons}>
                    <button onClick={props.saveButtonActionSecondStep} className={change_el_css.button_save + ' ' + change_el_css.button}>
                        Сохранить
                    </button>
                    <button onClick={cancelButtonActionSecondStep} className={change_el_css.button_cancel + ' ' + change_el_css.button}>
                        Отменить
                    </button>
                </section>
            </section>
            <section>
                {props.message !== '' ? <ErrorComponent message={props.message}/> : null}
            </section>
        </div>
    )
}

export default NewPasswordComponent