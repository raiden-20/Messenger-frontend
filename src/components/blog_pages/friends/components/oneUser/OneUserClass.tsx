import React, {Component} from "react";
import {PropsOneFriend, StateOneFriend} from "../../../../../redux/interfaces/friends/oneFriend";
import OneUserComponent from "./OneUserComponent";
import {AuthDataAxios} from "../../../../axios/auth/AuthAxios";

class OneUserClass extends Component<PropsOneFriend, StateOneFriend>{

    changeFriendStatus = (action: string) => {
        this.props.changeFriendStatus(this.props.id, action)
    }

    componentDidMount() {
        let authDataPromise = AuthDataAxios({
            id: this.props.id
        })
        authDataPromise.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserNickname(this.props.id, response[1].nickname)
                }
            }
        })
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