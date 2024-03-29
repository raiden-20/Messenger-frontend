import React, {Component} from "react";
import {PropsOneFriend, StateOneFriend} from "../../../../../redux/interfaces/friends/oneFriend";
import OneUserComponent from "./OneUserComponent";

class OneUserClass extends Component<PropsOneFriend, StateOneFriend>{

    changeFriendStatus = (action: string) => {
        this.props.changeFriendStatus(this.props.id, action)
    }

    componentDidMount() {
    this.props.GetUserFromListAuthData(this.props.id)
    }

    render() {
        return <OneUserComponent id={this.props.id}
                                 name={this.props.name}
                                 nickname={this.props.nickname}
                                 bio={this.props.bio}
                                 changeFriendStatus={this.changeFriendStatus}
                                 avatarUrl={this.props.avatarUrl}
                                 whoOpened={this.props.whoOpened}
                                 status={this.props.status}/>
    }
}

export default OneUserClass