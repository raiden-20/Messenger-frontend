import {StateUserProfileAside} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    setUserFriendsCount,
    setUsers
} from "../../../../redux/reducers/usersReducer";
import MainProfileAside from "./MainProfileAside";

    const mapStateToProps = (state : StateUserProfileAside) => {
        return {
            users: state.users.users,

            countFriends: state.users.countFriends
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
        }
    }

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileAside)

export default MainProfileAsideContainer