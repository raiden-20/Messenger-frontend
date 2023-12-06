import {connect} from "react-redux";
import RegistrationMain from "./RegistrationMain";
import {
    setCode,
    setEmail, setId, setInputConfirmPassword,
    setInputEmail, setInputEmailOrNickname,
    setInputNickname, setInputPassword, setMessage,
    setNickname,
    setPassword, setToken
} from "../../redux/reducers/authReducer";
import {Dispatch} from "redux";
import {StateAuthReg} from "../../redux/interfaces/auth/authRegistration";
import {StateProfileNameSurname} from "../../redux/interfaces/profile/profileAddNameSurname";
import {setInputName, setInputSurname, setName, setSurname} from "../../redux/reducers/profileReducer";



const mapStateToProps = (state : StateAuthReg & StateProfileNameSurname) => {
    return {
        input_email: state.auth.input_email,
        input_nickname: state.auth.input_nickname,
        input_password: state.auth.input_password,
        input_confirmPassword: state.auth.input_confirmPassword,

        input_emailOrNickname: state.auth.input_emailOrNickname,

        input_name: state.profile.input_name,
        input_surname: state.profile.input_surname,

        message: state.auth.message,
        token: state.auth.token,
        code: state.auth.code,
        id: state.auth.id,

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
        setInputConfirmPassword : (input_confirmPassword : string) => {
            dispatch(setInputConfirmPassword(input_confirmPassword))
        },

        setName(name: string) {
            dispatch(setName(name))
        },
        setSurname(surname: string) {
            dispatch(setSurname(surname))
        },
        setInputName(name: string) {
            dispatch(setInputName(name))
        },
        setInputSurname(surname: string) {
            dispatch(setInputSurname(surname))
        },

        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setToken(token: string) {
            dispatch(setToken(token))
        },
        setCode(code: number) {
            dispatch(setCode(code))
        },
        setId(id: string) {
            dispatch(setId(id))
        }
    }
}


const MainRegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationMain)

export default MainRegistrationContainer