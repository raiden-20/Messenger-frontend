import {StateUserProfileAside} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    setChangeUserStatus,
    setUserFriendsCount, setUserNickname, setUserPhoto,
    setUsers
} from "../../../../redux/reducers/usersReducer";
import MainProfileAsideClass from "./MainProfileAsideClass";
import {setCountPhoto, setPhotoUrl} from "../../../../redux/reducers/photoReducer";

    const mapStateToProps = (state : StateUserProfileAside) => {
        return {
            usersShortInfo: state.users.usersShortInfo,
            countFriends: state.users.countFriends,

            countPhoto: state.photo.countPhoto,
            photoUrl: state.photo.photoUrl
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            setUsers(users: []) {
                dispatch(setUsers(users))
            },
            setUserNickname(id: string, nickname: string) {
                dispatch(setUserNickname(id, nickname))
            },
            setPhotoUrl (photoUrl : []) {
                dispatch(setPhotoUrl(photoUrl))
            },
            setUserFriendsCount(countFriends: number) {
                dispatch(setUserFriendsCount(countFriends))
            },
            setCountPhoto(countPhoto: number) {
                dispatch(setCountPhoto(countPhoto))
            },
            setChangeUserStatus(id: string, status: string) {
                dispatch(setChangeUserStatus(id, status))
            },
            setUserPhoto(id: string, photo : []) {
                dispatch(setUserPhoto(id, photo))
            },
        }
    }

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileAsideClass)

export default MainProfileAsideContainer