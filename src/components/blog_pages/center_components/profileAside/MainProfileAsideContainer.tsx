import {StateUserProfileAside} from "../../../../redux/interfaces/profile/profileBase";
import {connect} from "react-redux";
import MainProfileAsideClass from "./MainProfileAsideClass";
import {GetPhoto, GetPhotoCount} from "../../../../redux/thunk/photoThunk";
import {GetFriendsCount, GetRandomFriends,} from "../../../../redux/thunk/usersThunk";

    const mapStateToProps = (state : StateUserProfileAside) => {
        return {
            usersShortInfo: state.users.usersShortInfo,
            countFriends: state.users.countFriends,

            countPhoto: state.photo.countPhoto,
            photoUrl: state.photo.photoUrl
        }
    }

    const mapDispatchToProps = {
        GetPhotoCount,
        GetPhoto,
        GetRandomFriends,
        GetFriendsCount,
    }

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileAsideClass)

export default MainProfileAsideContainer