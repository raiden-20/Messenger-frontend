import {StateFriends} from "../../../../redux/interfaces/friends/friends";
import {Dispatch} from "redux";
import {setFollow, setUnfollow, setUsers} from "../../../../redux/reducers/usersReducer";
import {connect} from "react-redux";
import MainFriendsAndSearching from "./MainFriendsAndSearching";

const mapStateToProps = (state : StateFriends) => {
    return {
        users : state.users.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setFollow(userId: number) {
            dispatch(setFollow(userId))
        },
        setUnfollow(userId: number) {
            dispatch(setUnfollow(userId))
        },
        setUsers(users: []) {
            dispatch(setUsers(users))
        }
    }
}

const MainCenterComponentContainer = connect(mapStateToProps, mapDispatchToProps)(MainFriendsAndSearching)

export default MainCenterComponentContainer