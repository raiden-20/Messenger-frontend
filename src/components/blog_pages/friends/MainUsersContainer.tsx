import {StateUsers} from "../../../redux/interfaces/friends/friends";
import {Dispatch} from "redux";
import {
    setUserFriendsCount,
    setUsers, setUsersNicknames,
    setUserSubscribersCount,
    setUserSubscriptionsCount, setWhoOpened
} from "../../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import MainUsers from "./MainUsers";

const mapStateToProps = (state : StateUsers) => {
    return {
        users : state.users.users,
        countFriends: state.users.countFriends,
        countSubscriptions: state.users.countSubscriptions,
        countSubscribers: state.users.countSubscribers,
        whoOpened: state.users.whoOpened
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers(users: []) {
            dispatch(setUsers(users))
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
        }
    }
}

const MainUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MainUsers)

export default MainUsersContainer