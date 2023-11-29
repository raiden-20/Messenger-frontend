import change_el_css from "../../../ChangeSettingsElements.module.css";
import change_private_css from './ChangeOldPassword.module.css'
import React from "react";
import {PropsOldPassword} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";

const ChangeOldPasswordForm = (props : PropsOldPassword) => {
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const cancelButtonActionFirstStep = () => {
        props.setInputPassword(null)
        props.setButtonChangePasswordFirstStepPressed(false)
    }

    const saveButtonActionFirstStep = () => {
        if (props.input_password != null) {
            // post и если код 200, тогда что ниже
            props.setInputPassword(null)
            props.setButtonChangePasswordFirstStepPressed(false)
            props.setButtonChangePasswordSecondStepPressed(true)
        }

    }

    return (
        <div className={change_private_css.rootChangePassword}>
            <form className={change_private_css.setOldPassword}>
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
            </form>
        </div>
    )
}

export default ChangeOldPasswordForm