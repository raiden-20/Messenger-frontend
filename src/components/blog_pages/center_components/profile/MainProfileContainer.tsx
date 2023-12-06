import {connect} from "react-redux";
import {StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {setId, setMessage, setNickname} from "../../../../redux/reducers/authReducer";
import {setName, setSurname} from "../../../../redux/reducers/profileReducer";
import MainProfile from "./MainProfile";

const mapStateToProps = (state : StateUserProfile) => {
    return {
        id : state.auth.id,
        name: state.profile.name,
        surname: state.profile.surname,
        birthDate: state.profile.birthDate,
        nickname: state.auth.nickname,
        bio: state.profile.bio,
        message: state.auth.message,
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setId(id: string) {
            dispatch(setId(id))
        },
        setName(name: string) {
            dispatch(setName(name))
        },
        setSurname(surname: string) {
            dispatch(setSurname(surname))
        },
        // setBirthDate(birthDate: string) {
        //     dispatch(setBirthDate(birthDate))
        // },
        setNickname(nickname: string) {
            dispatch(setNickname(nickname))
        },
        setMessage(message: string) {
            dispatch(setMessage(message))
        }
        // setBio(bio: string) {
        //     dispatch(setBio(bio))
        // },
    }
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfile)

export default MainProfileContainer