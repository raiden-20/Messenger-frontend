import {connect} from "react-redux";
import RegistrationMain from "./RegistrationMain";
import {
    setCode, setInputClearData, setInputConfirmPassword,
    setInputEmail, setInputEmailOrNickname, setInputNickname,
    setInputPassword, setMessage, setShowMessage
} from "../../redux/reducers/authReducer";
import {StateAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {StateProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import {setInputBirthDate, setInputClearDataProfile, setInputName} from "../../redux/reducers/profileReducer";
import {
    AccountActivationMessage,
    Authorization,
    ChangeEmailMessage,
    ForgotPassword,
    Registration
} from "../../redux/thunk/authThunk";

const mapStateToProps = (state: StateAuthReg & StateProfileNameSurname) => {
    return {
        input_email: state.auth.input_email,
        input_nickname: state.auth.input_nickname,
        input_password: state.auth.input_password,
        input_passwordShow: state.auth.input_passwordShow,
        input_confirmPassword: state.auth.input_confirmPassword,
        input_confirmPasswordShow: state.auth.input_confirmPasswordShow,
        input_emailOrNickname: state.auth.input_emailOrNickname,

        input_name: state.profile.input_name,
        input_birthDate: state.profile.input_birthDate,

        message: state.auth.message,
        buttonShowMessage: state.auth.buttonShowMessage,
        code: state.auth.code,

        newEmail: state.auth.newEmail,
        email: state.auth.email
    }

}

const mapDispatchToProps = {
    Authorization,
    Registration,
    ForgotPassword,
    AccountActivationMessage,
    setInputEmail,
    setInputNickname,
    setInputEmailOrNickname,
    setInputPassword,
    setInputClearData,
    setInputConfirmPassword,
    setInputName,
    setInputBirthDate,
    setInputClearDataProfile,
    setMessage,
    setShowMessage,
    setCode,
    ChangeEmailMessage
}


const MainRegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationMain)

export default MainRegistrationContainer