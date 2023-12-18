import {Component} from "react";
import {PropsOneFriend2, StateOneFriend2} from "../../../../../redux/interfaces/friends/oneFriend";
import UserFriendsShortInfoComponent from "./UserFriendsShortInfoComponent";
import axios from "axios";

class UserFriendsShortInfo extends Component<PropsOneFriend2, StateOneFriend2> {
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };

    changeFriendStatus = () => {
        axios.post(`http://localhost:8080/social/delete`, {
            id: this.props.id
        }, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        // okay
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {
                    // bad token
                    break
                }
                case 404 : {
                    // user doesn't exist
                    break
                }
                case 400 : {
                    // relation has already exist
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
                                              changeFriendStatus={this.changeFriendStatus}/>
    }
}

export default UserFriendsShortInfo