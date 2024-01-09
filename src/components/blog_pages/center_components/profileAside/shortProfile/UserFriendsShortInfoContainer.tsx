import {ActionUser, GetUserFromListAuthData, GetUserFromListPhoto} from "../../../../../redux/thunk/usersThunk";
import {connect} from "react-redux";
import UserFriendsShortInfoClass from "./UserFriendsShortInfoClass";

const mapStateToProps = () => {
}

const mapDispatchToProps = {
    ActionUser,
    GetUserFromListAuthData,
    GetUserFromListPhoto
}

const MainProfileAsideContainer = connect(mapStateToProps, mapDispatchToProps)(UserFriendsShortInfoClass)

export default MainProfileAsideContainer