import {Component} from "react";
import {PropsOneFriend2, StateOneFriend2} from "../../../../../redux/interfaces/friends/oneFriend";
import UserFriendsShortInfoComponent from "./UserFriendsShortInfoComponent";

class UserFriendsShortInfoClass extends Component<PropsOneFriend2, StateOneFriend2> {

    componentDidMount() {
        this.props.GetUserFromListAuthData(this.props.id)
        this.props.GetUserFromListPhoto(this.props.id)
    }
    changeFriendStatus = (action: string) => {
        action = action.toUpperCase()
        this.props.ActionUser(this.props.id, action)
    }

    render() {
        return <UserFriendsShortInfoComponent id={this.props.id}
                                              name={this.props.name}
                                              nickname={this.props.nickname}
                                              bio={this.props.bio}
                                              avatarUrl={this.props.avatarUrl}
                                              changeFriendStatus={this.changeFriendStatus}
                                              status={this.props.status}
                                              photo={this.props.photo}/>
    }
}

export default UserFriendsShortInfoClass