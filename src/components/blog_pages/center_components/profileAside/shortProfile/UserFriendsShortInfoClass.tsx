import {Component} from "react";
import {PropsOneFriend2, StateOneFriend2} from "../../../../../redux/interfaces/friends/oneFriend";
import UserFriendsShortInfoComponent from "./UserFriendsShortInfoComponent";
import {ActionUsersAxios} from "../../../../axios/users/UsersAxios";
import {AuthDataAxios} from "../../../../axios/auth/AuthAxios";
import {GetPhotoAxios} from "../../../../axios/photo/PhotoAxios";

class UserFriendsShortInfoClass extends Component<PropsOneFriend2, StateOneFriend2> {

    changeFriendStatus = () => {
        let actionAx = ActionUsersAxios({
            idOtherUser: this.props.id,
            action: 'DELETE',
        })
        actionAx.then(() => {
            this.props.setChangeUserStatus(this.props.id, 'SEND_SECOND')
        })
    }

    componentDidMount() {
        let authDataPromise = AuthDataAxios({
            id: this.props.id
        })
        authDataPromise.then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
                    this.props.setUserNickname(this.props.id, response[1].nickname)
                }
            }
        })
        let photo = GetPhotoAxios({
            id: this.props.id
        })
        photo.then(response => {
            this.props.setUserPhoto(this.props.id, response)
        })
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