import React, {Component} from "react";
import settings_css from "../Settings.module.css";
import ChangeEmail from "../components/ChangeEmail";

import {
    PropsChangePassword,
    StateChangePassword
} from "../../../../../redux/interfaces/settings/SettingsChangePassword";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../redux/interfaces/settings/SettingsChangeEmail";
import ChangePassword from "../components/ChangePassword";

class SettingsAccount extends Component<PropsChangePassword & PropsChangeEmail, StateChangePassword & StateChangeEmail> {
    
    render() {
        return (
            <section className={settings_css.root}>
                <section className={settings_css.settings}>
                    <main>
                        <section className={settings_css.leg_container}>
                            <legend> <strong>Электронный адрес</strong> </legend>
                            <section>
                                <ChangeEmail email={this.props.email}
                                             password={this.props.password}
                                             input_email={this.props.input_email}
                                             input_password={this.props.input_password}
                                             setInputPassword={this.props.setInputPassword}
                                             setInputEmail={this.props.setInputEmail}
                                             setPassword={this.props.setPassword}
                                             setEmail={this.props.setEmail}
                                             buttonChangeEmail={this.props.buttonChangeEmail}
                                             setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                             buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}/>
                            </section>
                        </section>
                        <section className={settings_css.leg_container}>
                            <legend><strong>Пароль</strong></legend>
                            <section>
                                <ChangePassword buttonChangeEmail={this.props.buttonChangeEmail}
                                                password={this.props.password}
                                                input_password={this.props.input_password}
                                                input_code={this.props.input_code}
                                                setInputPassword={this.props.setInputPassword}
                                                setPassword={this.props.setPassword}
                                                setInputCode={this.props.setInputCode}
                                                input_passwordConfirm={this.props.input_passwordConfirm}
                                                setInputPasswordConfirm={this.props.setInputPasswordConfirm}
                                                buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                                buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                                setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                                setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}/>
                            </section>

                        </section>
                        <section className={settings_css.leg_container}>
                            <legend><strong>Язык</strong></legend>
                            <section className={settings_css.section_and_edit}>
                                <select>
                                    <option>Русский</option>
                                    <option>English</option>
                                    <option>한국어</option>
                                </select>
                                <section></section>
                            </section>

                        </section>
                    </main>
                    <footer>
                        <button>Удалить учетную запись</button>
                    </footer>
                </section>
            </section>
        )
    }
}

export default SettingsAccount