import {connect} from "react-redux";
import MainSetting from "./MainSetting";
import {setMessage, setNewEmail} from "../../../../redux/reducers/authReducer";
import {
    setButtonChangeEmailPressed, setButtonChangePasswordFirstStepPressed, setButtonChangePasswordSecondStepPressed,
    setInputCode, setInputPasswordConfirm, setInputPassword, setInputEmail
} from "../../../../redux/reducers/settingsReducer";
import {StateChangeEmail} from "../../../../redux/interfaces/settings/SettingsChangeEmail";
import {StateChangePassword} from "../../../../redux/interfaces/settings/SettingsChangePassword";
import {StateDeleteAccount} from "../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import {
    AuthGetData,
    ChangeEmail,
    CheckOldPassword,
    DeleteAccount,
    SetNewPassword
} from "../../../../redux/thunk/authThunk";



const mapStateToProps = (state : StateChangeEmail & StateChangePassword & StateDeleteAccount) => {
    return {
        email: state.auth.email,

        input_email: state.settings.input_email,
        input_password: state.settings.input_password,
        input_passwordConfirm: state.settings.input_passwordConfirm,
        input_code: state.settings.input_code,

        message: state.auth.message,

        buttonChangeEmail: state.settings.buttonChangeEmail,
        buttonChangePasswordFirstStep: state.settings.buttonChangePasswordFirstStep,
        buttonChangePasswordSecondStep: state.settings.buttonChangePasswordSecondStep
    }

}

const mapDispatchToProps = {
    AuthGetData,
    ChangeEmail,
    CheckOldPassword,
    SetNewPassword,
    DeleteAccount,
    setInputPassword,
    setInputPasswordConfirm,
    setInputEmail,
    setInputCode,
    setMessage,
    setNewEmail,
    setButtonChangeEmailPressed,
    setButtonChangePasswordFirstStepPressed,
    setButtonChangePasswordSecondStepPressed
}

const MainSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(MainSetting)

export default MainSettingsContainer