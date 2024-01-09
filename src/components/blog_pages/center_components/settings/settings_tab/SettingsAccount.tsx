import React, {Component} from "react";
import settings_css from "../Settings.module.css";
import ChangeEmail from "../components/change_email/ChangeEmail";

import {
    PropsChangePassword,
    StateChangePassword
} from "../../../../../redux/interfaces/settings/SettingsChangePassword";
import {PropsChangeEmail, StateChangeEmail} from "../../../../../redux/interfaces/settings/SettingsChangeEmail";
import ChangePassword from "../components/change_password/ChangePassword";
import ChangeLanguage from "../components/change_language/ChangeLanguage";
import DeleteAccountClass from "../components/delete_account/DeleteAccountClass";
import {
    PropsDeleteAccount, StateDeleteAccount
} from "../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";

class SettingsAccount extends Component<PropsChangePassword & PropsChangeEmail & PropsDeleteAccount, StateChangePassword & StateChangeEmail & StateDeleteAccount> {
    
    render() {
        return (
            <section className={settings_css.root}>
                <section className={settings_css.settings}>
                    <main>
                        <section className={settings_css.leg_container}>
                            <legend> <strong>Электронный адрес</strong> </legend>
                                <ChangeEmail email={this.props.email}
                                             input_email={this.props.input_email}
                                             input_password={this.props.input_password}
                                             setInputPassword={this.props.setInputPassword}
                                             setInputEmail={this.props.setInputEmail}
                                             buttonChangeEmail={this.props.buttonChangeEmail}
                                             setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                             buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                             buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                             message={this.props.message}
                                             setMessage={this.props.setMessage}
                                             setNewEmail={this.props.setNewEmail}
                                             AuthGetData={this.props.AuthGetData}
                                             ChangeEmail={this.props.ChangeEmail}/>
                        </section>
                        <section className={settings_css.leg_container}>
                            <legend><strong>Пароль</strong></legend>
                                <ChangePassword buttonChangeEmail={this.props.buttonChangeEmail}
                                                input_password={this.props.input_password}
                                                input_code={this.props.input_code}
                                                setInputPassword={this.props.setInputPassword}
                                                setInputCode={this.props.setInputCode}
                                                input_passwordConfirm={this.props.input_passwordConfirm}
                                                setInputPasswordConfirm={this.props.setInputPasswordConfirm}
                                                buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                                buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                                setButtonChangePasswordFirstStepPressed={this.props.setButtonChangePasswordFirstStepPressed}
                                                setButtonChangePasswordSecondStepPressed={this.props.setButtonChangePasswordSecondStepPressed}
                                                message={this.props.message}
                                                setMessage={this.props.setMessage}
                                                CheckOldPassword={this.props.CheckOldPassword}
                                                SetNewPassword={this.props.SetNewPassword}/>

                        </section>
                        <section className={settings_css.leg_container}>
                            <legend><strong>Язык</strong></legend>
                            <ChangeLanguage/>
                        </section>
                    </main>
                    <footer>
                        <DeleteAccountClass message={this.props.message}
                                            DeleteAccount={this.props.DeleteAccount}/>
                    </footer>
                </section>
            </section>
        )
    }
}

export default SettingsAccount