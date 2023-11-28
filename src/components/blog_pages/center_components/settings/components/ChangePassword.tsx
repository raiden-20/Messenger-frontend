import React, {Component} from "react";
import change_settings_elements_css from './ChangeSettingsElements.module.css'
import settings_css from "../Settings.module.css";
import setting_pencil from "../../../../../assets/images/other/setting_pencil.svg";
import {
    PropsChangePassword,
    StateChangePassword
} from "../../../../../redux/interfaces/settings/SettingsChangePassword";

class ChangePassword extends Component<PropsChangePassword, StateChangePassword> {
    changeButtonChangePassword = () => {
        if (!this.props.buttonChangeEmail) {
            this.props.setButtonChangePasswordFirstStepPressed(true)
        }
    }

    sendInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputPassword(event.target.value)
    }
    sendInputPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputPasswordConfirm(event.target.value)
    }
    sendInputCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputCode(event.target.value)
    }


    cancelButtonActionFirstStep = () => {
        this.props.setInputPassword(null)
        this.props.setButtonChangePasswordFirstStepPressed(false)
    }

    saveButtonActionFirstStep = () => {
        if (this.props.input_password != null) {
            // post и если код 200, тогда что ниже
            this.props.setInputPassword(null)
            this.props.setButtonChangePasswordFirstStepPressed(false)
            this.props.setButtonChangePasswordSecondStepPressed(true)
        }

    }
    saveButtonActionSecondStep = () => {
        if (this.props.input_password != null && this.props.input_passwordConfirm != null &&
            this.props.input_password === this.props.input_passwordConfirm) {
            // post и если код 200, тогда что ниже
            // this.props.setPassword(this.props.input_password)
            // this.props.setInputPassword(null)
            // this.props.setInputPasswordConfirm(null)
            // this.props.setInputCode(null)

            // this.props.setButtonChangePasswordSecondStepPressed(false)
        }

    }

    cancelButtonActionSecondStep = () => {
        this.props.setInputPassword(null)
        this.props.setInputPasswordConfirm(null)
        this.props.setInputCode(null)

        this.props.setButtonChangePasswordSecondStepPressed(false)
    }

    render() {
        return (
            <div>
                {this.props.buttonChangePasswordSecondStep ?
                    <section>
                        <section>
                            <input placeholder={'Код'} onChange={this.sendInputCode}/>
                            <input placeholder={'Новый пароль'} onChange={this.sendInputPassword}/>
                            <input placeholder={'Подтвердить новый пароль'} onChange={this.sendInputPasswordConfirm}/>
                        </section>
                        <footer>
                            <button onClick={this.saveButtonActionSecondStep}>Сохранить</button>
                            <button onClick={this.cancelButtonActionSecondStep}>Отменить</button>
                        </footer>
                    </section>

                    : !this.props.buttonChangePasswordFirstStep ?
                        <section className={settings_css.section_and_edit}>
                            {this.props.password}
                            <button
                                onClick={this.changeButtonChangePassword}>
                                <img src={setting_pencil} alt={'setting pencil'}/>
                            </button>

                        </section>
                        : <div className={change_settings_elements_css.rootChangePassword}>
                            <section className={change_settings_elements_css.setOldPassword}>
                                <legend>Подтвердите Ваш пароль. Вам будет выслан код на электронный адрес бла бла бла
                                </legend>
                                <section>
                                    <input value={this.props.input_password} onChange={this.sendInputPassword}
                                           placeholder={'Пароль'}/>
                                    <footer>
                                        <button onClick={this.saveButtonActionFirstStep}>Сохранить</button>
                                        <button onClick={this.cancelButtonActionFirstStep}>Отменить</button>
                                    </footer>
                                </section>
                            </section>
                        </div>
                }
            </div>
        )
    }


}

export default ChangePassword