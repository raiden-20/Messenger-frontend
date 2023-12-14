import {StateUserProfileAside} from "../../../../redux/interfaces/profile/profileBase";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    setUserFriendsCount,
    setUsers,
    setUserSubscribersCount,
    setUserSubscriptionsCount
} from "../../../../redux/reducers/usersReducer";
import MainProfileAside from "./MainProfileAside";

    const mapStateToProps = (state : StateUserProfileAside) => {
        return {
            users: state.users.users,

            countSubscriptions: state.users.countSubscriptions,
            countFriends: state.users.countFriends,
            countSubscribers: state.users.countSubscribers
        }
    }

    const mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            setUsers(users: []) {
                dispatch(setUsers(users))
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
        }
    }

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(MainProfileAside)

export default MainProfileAsideContainer