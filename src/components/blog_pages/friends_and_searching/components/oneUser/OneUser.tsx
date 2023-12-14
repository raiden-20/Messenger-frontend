import React, {Component} from "react";
import {PropsOneFriend, StateOneFriend} from "../../../../../redux/interfaces/friends/oneFriend";
import OneUserComponent from "./OneUserComponent";

class OneUser extends Component<PropsOneFriend, StateOneFriend>{
    changeFriendStatus = () => {
        // todo post
    }
    render() {
        return <OneUserComponent id={this.props.id}
                                 name={this.props.name}
                                 nickname={this.props.nickname}
                                 bio={this.props.bio}
                                 changeFriendStatus={this.changeFriendStatus}
                                 avatarUrl={this.props.avatarUrl}/>
    }
}

export default OneUser