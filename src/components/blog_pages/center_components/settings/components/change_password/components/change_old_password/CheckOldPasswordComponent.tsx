import change_private_css from "./ChangeOldPassword.module.css";
import change_el_css from "../../../ChangeSettingsElements.module.css";
import ErrorComponent from "../../../error/ErrorComponent";
import React from "react";
import {
    PropsOldPasswordComponent
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/password/SettingsChangePassword";

const CheckOldPasswordComponent = (props : PropsOldPasswordComponent) => {
    const sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputPassword(event.target.value)
    }
    const cancelButtonActionFirstStep = () => {
        props.setInputPassword(null)
        props.setMessage('')
        props.setButtonChangePasswordFirstStepPressed(false)
    }

    return (
        <div className={change_private_css.rootChangePassword}>
            <section className={change_private_css.setOldPassword}>
                <legend>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес бла бла бла
                </legend>
                <main>
                    <input type={'password'} value={props.input_password} onChange={sendInputPassword}
                           className={change_el_css.input} placeholder={'Пароль'} required/>
                    <section>
                        <button onClick={props.saveButtonActionFirstStep} className={change_el_css.button_save + ' ' + change_el_css.button}>
                            Далее
                        </button>
                        <button onClick={cancelButtonActionFirstStep} className={change_el_css.button_cancel  + ' ' + change_el_css.button}>
                            Отменить
                        </button>
                    </section>
                </main>
                <section>
                    {props.message !== '' ? <ErrorComponent message={props.message}/> : null}
                </section>
            </section>
        </div>
    )
}

export default CheckOldPasswordComponent