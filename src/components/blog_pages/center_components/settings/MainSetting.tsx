import React from 'react';
import {useLocation} from "react-router-dom";
import SettingsAccount from "./settings_tab/SettingsAccount";
import SettingsSecurity from "./settings_tab/SettingsSecurity";
import {PropsChangePassword} from "../../../../redux/interfaces/settings/SettingsChangePassword";
import {PropsChangeEmail} from "../../../../redux/interfaces/settings/SettingsChangeEmail";
import {PropsDeleteAccount} from "../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import {SETTINGS} from "../../../../paths/navigationPath";

const MainSetting = (props : PropsChangePassword & PropsChangeEmail & PropsDeleteAccount) => {
    let location = useLocation()

    return (location.pathname === SETTINGS ? <SettingsAccount email={props.email}
                                                                         password={props.password}
                                                                         input_email={props.input_email}
                                                                         input_password={props.input_password}
                                                                         setInputPassword={props.setInputPassword}
                                                                         setInputEmail={props.setInputEmail}
                                                                         setPassword={props.setPassword}
                                                                         buttonChangeEmail={props.buttonChangeEmail}
                                                                         input_code={props.input_code}
                                                                         setButtonChangeEmailPressed={props.setButtonChangeEmailPressed}
                                                                         setInputCode={props.setInputCode}
                                                                         input_passwordConfirm={props.input_passwordConfirm}
                                                                         setInputPasswordConfirm={props.setInputPasswordConfirm}
                                                                         buttonChangePasswordFirstStep={props.buttonChangePasswordFirstStep}
                                                                         buttonChangePasswordSecondStep={props.buttonChangePasswordSecondStep}
                                                                         setButtonChangePasswordFirstStepPressed={props.setButtonChangePasswordFirstStepPressed}
                                                                         setButtonChangePasswordSecondStepPressed={props.setButtonChangePasswordSecondStepPressed}
                                                                         message={props.message}
                                                                         setMessage={props.setMessage}
                                                                         setNewEmail={props.setNewEmail}
                                                                         setEmail={props.setEmail}/>
                                                        : <SettingsSecurity/>)
}

export default MainSetting