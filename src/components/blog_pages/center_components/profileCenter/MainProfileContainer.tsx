import {connect} from "react-redux";
import {StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {setId, setMessage, setNickname} from "../../../../redux/reducers/authReducer";
import {
    setAvatarUrl,
    setBio,
    setBirthDate,
    setCoverUrl,
    setName,
    setStatus
} from "../../../../redux/reducers/profileReducer";
import MainProfile from "./MainProfile";

const mapStateToProps = (state : StateUserProfile) => {
    return {
        id : state.auth.id,
        name: state.profile.name,
        birthDate: state.profile.birthDate,
        nickname: state.auth.nickname,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        status: state.profile.status,
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
        setBirthDate(birthDate: string) {
            dispatch(setBirthDate(birthDate))
        },
        setNickname(nickname: string) {
            dispatch(setNickname(nickname))
        },
        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setBio(bio: string) {
            dispatch(setBio(bio))
        },
        setAvatarUrl(avatarUrl: string) {
            dispatch(setAvatarUrl(avatarUrl))
        },
        setCoverUrl(coverUrl: string) {
            dispatch(setCoverUrl(coverUrl))
        },
        setStatus(status: string) {
            dispatch(setStatus(status))
        },

    }
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfile)

export default MainProfileContainer