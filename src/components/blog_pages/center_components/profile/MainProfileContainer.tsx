import {connect} from "react-redux";
import MainProfile from "./MainProfile";
import {StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import {StateNickname} from "../../../../redux/interfaces/auth/authData";

const mapStateToProps = (state : StateUserProfile & StateNickname) => {
    return {
        id : state.profile.id,
        name: state.profile.name,
        surname: state.profile.surname,
        birthDate: state.profile.birthDate,
        nickname: state.auth.nickname,
        bio: state.profile.bio,
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const MainProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfile)

export default MainProfileContainer