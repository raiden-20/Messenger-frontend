import {connect} from "react-redux";
import {StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {setEmail, setId, setNickname} from "../../../../redux/reducers/authReducer";
import {setUserData} from "../../../../redux/reducers/profileReducer";
import MainProfileClass from "./MainProfileClass";

const mapStateToProps = (state: StateUserProfile) => {
    return {
        name: state.profile.name,
        birthDate: state.profile.birthDate,
        nickname: state.auth.nickname,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        status: state.profile.status,
        message: state.auth.message,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setId(id: string) {
            dispatch(setId(id))
        },
        setUserData(name: string,
                    birthDate: string,
                    bio: string,
                    avatarUrl: string,
                    coverUrl: string,
                    status: string) {
            dispatch(setUserData(name, birthDate, bio, avatarUrl, coverUrl, status))
        },
        setNickname(nickname: string) {
            dispatch(setNickname(nickname))
        },
        setEmail(email: string) {
            dispatch(setEmail(email))
        },
    }
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileClass)

export default MainProfileContainer