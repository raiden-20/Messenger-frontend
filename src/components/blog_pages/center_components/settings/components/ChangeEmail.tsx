import React, {Component} from "react";
import change_settings_elements_css from './ChangeSettingsElements.module.css'
import settings_css from "../Settings.module.css";
import setting_pencil from "../../../../../assets/images/other/setting_pencil.svg";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../redux/interfaces/settings/SettingsChangeEmail";


class ChangeEmail extends Component<PropsChangeEmail, StateChangeEmail> {
    changeButtonChangeEmail = () => {
        if (!this.props.buttonChangePasswordFirstStep) {
            this.props.setButtonChangeEmailPressed(true)
        }
    }
    saveButtonAction = () => {
        // post и если код 200, тогда что ниже
        // this.props.setButtonChangeEmailPressed(false)
    }
    cancelButtonAction = () => {
        this.props.setButtonChangeEmailPressed(false)
    }

    render() {
        return (
            <div>
                {!this.props.buttonChangeEmail ?
                    <section className={settings_css.section_and_edit}>
                        {this.props.email}
                        <button onClick={this.changeButtonChangeEmail}>
                            <img tabIndex={0} src={setting_pencil} alt={'setting pencil'}/>
                        </button>
                    </section>
                    :
                    <form className={change_settings_elements_css.rootChangeEmail}>
                        <main>
                            <input placeholder={'Электронный адрес'}/>
                            <input placeholder={'Подтвердить пароль'}/>
                        </main>
                        <section>
                            <button className={change_settings_elements_css.button_save} onClick={this.saveButtonAction}>
                                Сохранить
                            </button>
                            <button className={change_settings_elements_css.button_cancel} onClick={this.cancelButtonAction}>
                                Отменить
                            </button>
                        </section>
                    </form>
                }
            </div>
        )
    }
}

export default ChangeEmail