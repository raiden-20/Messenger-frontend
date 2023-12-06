import {connect} from "react-redux";
import {Dispatch} from "redux";
import MainSetting from "./MainSetting";
import {setMessage, setNewEmail, setPassword, setToken} from "../../../../redux/reducers/authReducer";
import {
    setButtonChangeEmailPressed, setButtonChangePasswordFirstStepPressed, setButtonChangePasswordSecondStepPressed,
    setInputCode, setInputPasswordConfirm, setInputPassword, setInputEmail
} from "../../../../redux/reducers/settingsReducer";
import {StateChangeEmail} from "../../../../redux/interfaces/settings/SettingsChangeEmail";
import {StateChangePassword} from "../../../../redux/interfaces/settings/SettingsChangePassword";
import {StateDeleteAccount} from "../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";



const mapStateToProps = (state : StateChangeEmail & StateChangePassword & StateDeleteAccount) => {
    return {
        email: state.auth.email,
        password: state.auth.password,

        input_email: state.settings.input_email,
        input_password: state.settings.input_password,
        input_passwordConfirm: state.settings.input_passwordConfirm,
        input_code: state.settings.input_code,

        token: state.auth.token,
        message: state.auth.message,

        buttonChangeEmail: state.settings.buttonChangeEmail,
        buttonChangePasswordFirstStep: state.settings.buttonChangePasswordFirstStep,
        buttonChangePasswordSecondStep: state.settings.buttonChangePasswordSecondStep
    }

}

const mapDispatchToProps  = (dispatch : Dispatch) => {
    return {
        setInputPassword(input_password : string) {
            dispatch(setInputPassword(input_password))
        },
        setInputPasswordConfirm(input_passwordConfirm : string) {
            dispatch(setInputPasswordConfirm(input_passwordConfirm))
        },
        setInputEmail(input_email : string) {
            dispatch(setInputEmail(input_email))
        },
        setInputCode(input_code : string) {
            dispatch(setInputCode(input_code))
        },
        setPassword(password : string) {
            dispatch(setPassword(password))
        },
        setNewEmail(newEmail : string) {
            dispatch(setNewEmail(newEmail))
        },
        setEmail(email : string) {
            dispatch(setNewEmail(email))
        },
        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setToken(token: string) {
            dispatch(setToken(token))
        },

        setButtonChangeEmailPressed(buttonChangeEmail: boolean) {
            dispatch(setButtonChangeEmailPressed(buttonChangeEmail))
        },
        setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep: boolean) {
            dispatch(setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep))
        },
        setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep: boolean) {
            dispatch(setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep))
        }
    }
}

const MainSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(MainSetting)

export default MainSettingsContainer