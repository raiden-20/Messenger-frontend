import {connect} from "react-redux";
import RegistrationMain from "./RegistrationMain";
import {
    setCode,
    setEmail, setId, setInputConfirmPassword, setInputConfirmPasswordShow,
    setInputEmail, setInputEmailOrNickname,
    setInputNickname, setInputPassword, setInputPasswordShow, setMessage,
    setNickname,
    setPassword, setShowMessage, setToken
} from "../../redux/reducers/authReducer";
import {Dispatch} from "redux";
import {StateAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {StateProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import {setBirthDate, setInputBirthDate, setInputName, setName} from "../../redux/reducers/profileReducer";



const mapStateToProps = (state : StateAuthReg & StateProfileNameSurname) => {
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

const mapDispatchToProps  = (dispatch : Dispatch) => {
    return {
        setEmail : (email : string) => {
            dispatch(setEmail(email))
        },
        setNickname : (nickname : string) => {
            dispatch(setNickname(nickname))
        },
        setPassword : (password : string) => {
            dispatch(setPassword(password))
        },
        setConfirmPassword : (confirmPassword : string) => {
            dispatch(setPassword(confirmPassword))
        },
        setInputEmail : (input_email : string) => {
            dispatch(setInputEmail(input_email))
        },
        setInputNickname : (input_nickname : string) => {
            dispatch(setInputNickname(input_nickname))
        },
        setInputEmailOrNickname : (input_emailOrNickname : string) => {
            dispatch(setInputEmailOrNickname(input_emailOrNickname))
        },
        setInputPassword : (input_password : string) => {
            dispatch(setInputPassword(input_password))
        },
        setInputPasswordShow : (input_passwordShow : string) => {
            dispatch(setInputPasswordShow(input_passwordShow))
        },
        setInputConfirmPassword : (input_confirmPassword : string) => {
            dispatch(setInputConfirmPassword(input_confirmPassword))
        },
        setInputConfirmPasswordShow : (input_confirmPasswordShow : string) => {
            dispatch(setInputConfirmPasswordShow(input_confirmPasswordShow))
        },

        setName(name: string) {
            dispatch(setName(name))
        },
        setInputName(name: string) {
            dispatch(setInputName(name))
        },
        setInputBirthDate(input_birthDate : string) {
            dispatch(setInputBirthDate(input_birthDate))
        },
        setBirthDate(birthDate : string) {
            dispatch(setBirthDate(birthDate))
        },

        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setShowMessage(buttonShowMessage: boolean) {
            dispatch(setShowMessage(buttonShowMessage))
        },
        setCode(code: number) {
            dispatch(setCode(code))
        }
    }
}


const MainRegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationMain)

export default MainRegistrationContainer