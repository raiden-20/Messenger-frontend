import {Component} from "react";
import {PropsOneFriend2, StateOneFriend2} from "../../../../../redux/interfaces/friends/oneFriend";
import UserFriendsShortInfoComponent from "./UserFriendsShortInfoComponent";
import {ActionUsersAxios} from "../../../../../axios/users/UsersAxios";
import {Auth} from "../../../../../axios/auth/AuthAxios";
import {Photo} from "../../../../../axios/photo/PhotoAxios";

class UserFriendsShortInfoClass extends Component<PropsOneFriend2, StateOneFriend2> {

    changeFriendStatus = (action: string) => {
        action = action.toUpperCase()
        let actionAx = ActionUsersAxios({
            idOtherUser: this.props.id,
            action: action,
        })
        actionAx.then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
                    switch (action) {
                        case 'CREATE': {
                            this.props.setChangeUserStatus(this.props.id, 'SEND_FIRST')
                            break
                        }
                        case 'DELETE_FRIEND': {
                            this.props.setChangeUserStatus(this.props.id, 'SEND_SECOND')
                            break
                        }
                        case 'ACCEPT': {
                            this.props.setChangeUserStatus(this.props.id, 'FRIENDS')
                            break
                        }
                        case 'REJECT': {
                            this.props.setChangeUserStatus(this.props.id, null)
                            break
                        }
                        case 'DELETE_REQUEST': {
                            this.props.setChangeUserStatus(this.props.id, null)
                            break
                        }
                    }
                    break
                }
                case 401 : {
                    // bad token
                    break
                }
                case 404 : {
                    // user doesn't exist
                    break
                }
                case 400 : {
                    // relation has already exist
                    break
                }
            }

        })
    }

    componentDidMount() {
        Auth.AuthDataAxios({
            id: this.props.id
        }).then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
                    this.props.setUserNickname(this.props.id, response[1].nickname)
                }
            }
        })
        Photo.GetPhotoAxios({
            id: this.props.id
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserPhoto(this.props.id, response[1])
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
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