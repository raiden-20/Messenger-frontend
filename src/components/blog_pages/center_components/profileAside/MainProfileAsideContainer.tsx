import {StateUserProfileAside} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    setUserFriendsCount,
    setUsers
} from "../../../../redux/reducers/usersReducer";
import MainProfileAsideClass from "./MainProfileAsideClass";
import {setCountPhoto} from "../../../../redux/reducers/photoReducer";

    const mapStateToProps = (state : StateUserProfileAside) => {
        return {
            usersShortInfo: state.users.usersShortInfo,
            countFriends: state.users.countFriends,

            countPhoto: state.photo.countPhoto
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            setUsers(users: []) {
                dispatch(setUsers(users))
            },
            setUserFriendsCount(countFriends: number) {
                dispatch(setUserFriendsCount(countFriends))
            },
            setCountPhoto(countPhoto: number) {
                dispatch(setCountPhoto(countPhoto))
            },
        }
    }

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileAsideClass)

export default MainProfileAsideContainer