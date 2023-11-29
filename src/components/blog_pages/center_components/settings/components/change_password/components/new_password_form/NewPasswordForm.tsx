import React from "react";
import {
    PropsNewPassword
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsNewPassword";

import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './NewPasswordForm.module.css'

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
        if (props.input_password != null && props.input_passwordConfirm != null &&
            props.input_password === props.input_passwordConfirm) {
            // post и если код 200, тогда что ниже
            // this.props.setPassword(this.props.input_password)
            // this.props.setInputPassword(null)
            // this.props.setInputPasswordConfirm(null)
            // this.props.setInputCode(null)

            props.setButtonChangePasswordSecondStepPressed(false)
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