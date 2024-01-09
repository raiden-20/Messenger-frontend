import {StateUsers} from "../../../redux/interfaces/friends/friends";
import {setWhoOpened} from "../../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import MainUsersClass from "./MainUsersClass";
import {
    ActionUser,
    GetFriends,
    GetFriendsCount, GetSearch, GetSubscribers,
    GetSubscribersCount,
    GetSubscriptions,
    GetSubscriptionsCount, GetUserFromListAuthData
} from "../../../redux/thunk/usersThunk";

const mapStateToProps = (state : StateUsers) => {
    return {
        usersShortInfo : state.users.usersShortInfo,
        countFriends: state.users.countFriends,
        countSubscriptions: state.users.countSubscriptions,
        countSubscribers: state.users.countSubscribers,
        whoOpened: state.users.whoOpened
    }
}

const mapDispatchToProps = {
    GetFriends,
    setWhoOpened,
    GetFriendsCount,
    GetSubscriptionsCount,
    GetSubscribersCount,
    GetSubscriptions,
    GetSubscribers,
    GetSearch,
    ActionUser,
    GetUserFromListAuthData
}

const MainUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MainUsersClass)

export default MainUsersContainer