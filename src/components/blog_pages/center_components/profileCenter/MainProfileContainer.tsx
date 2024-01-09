import {connect} from "react-redux";
import {StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileClass from "./MainProfileClass";
import {AuthGetData} from "../../../../redux/thunk/authThunk";
import {ProfileData} from "../../../../redux/thunk/profileThunk";

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

const mapDispatchToProps = {
    AuthGetData,
    ProfileData
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileClass)

export default MainProfileContainer