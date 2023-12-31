import {StateUsers} from "../../../redux/interfaces/friends/friends";
import {Dispatch} from "redux";
import {
    setChangeUserStatus,
    setUserFriendsCount,
    setUsers, setUsersNicknames,
    setUserSubscribersCount,
    setUserSubscriptionsCount, setWhoOpened
} from "../../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import MainUsersClass from "./MainUsersClass";
import {User} from "../../../redux/interfaces/friends/oneFriend";

const mapStateToProps = (state : StateUsers) => {
    return {
        usersShortInfo : state.users.usersShortInfo,
        countFriends: state.users.countFriends,
        countSubscriptions: state.users.countSubscriptions,
        countSubscribers: state.users.countSubscribers,
        whoOpened: state.users.whoOpened
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers(usersShortInfo: []) {
            dispatch(setUsers(usersShortInfo))
        },
        setUsersNicknames(nicknames: []) {
            dispatch(setUsersNicknames(nicknames))
        },
        setUserSubscriptionsCount(countSubscriptions: number) {
            dispatch(setUserSubscriptionsCount(countSubscriptions))
        },
        setUserFriendsCount(countFriends: number) {
            dispatch(setUserFriendsCount(countFriends))
        },
        setUserSubscribersCount(countSubscribers: number) {
            dispatch(setUserSubscribersCount(countSubscribers))
        },
        setWhoOpened(whoOpened: string) {
            dispatch(setWhoOpened(whoOpened))
        },
        setChangeUserStatus(id: string, status: string) {
            dispatch(setChangeUserStatus(id, status))
        }
    }
}

const MainUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MainUsersClass)

export default MainUsersContainer