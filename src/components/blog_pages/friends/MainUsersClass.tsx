import React, {Component} from "react";
import {PropsUsers, StateUsers} from "../../../redux/interfaces/friends/friends";
import MainUsersComponent from "./MainUsersComponent";

class MainUsersClass extends Component<PropsUsers, StateUsers> {

    constructor(props: PropsUsers) {
        super(props)

        this.props.GetFriends()
    }

    componentDidMount() {
        this.props.GetFriendsCount()
        this.props.GetSubscriptionsCount()
        this.props.GetSubscribersCount()
    }
    getFriends() {
        this.props.GetFriends()
    }
    getSubscriptions() {
        this.props.GetSubscriptions()
    }
    getSubscribers() {
        this.props.GetSubscribers()
    }
    getSearch() {
        this.props.GetSearch()
    }
    actionRequest = (idOtherUser: string, action : string) => {
        action = action.toUpperCase()
        this.props.ActionUser(idOtherUser, action)

        setTimeout(() => {
            this.props.GetFriendsCount()
            this.props.GetSubscriptionsCount()
            this.props.GetSubscribersCount()
        }, 3000)
    }

    render() {
        return <MainUsersComponent usersShortInfo={this.props.usersShortInfo}
                                   getFriends={this.getFriends.bind(this)}
                                   getSubscribers={this.getSubscribers.bind(this)}
                                   getSubscriptions={this.getSubscriptions.bind(this)}
                                   countFriends={this.props.countFriends}
                                   countSubscribers={this.props.countSubscribers}
                                   countSubscriptions={this.props.countSubscriptions}
                                   actionRequest={this.actionRequest}
                                   getSearch={this.getSearch.bind(this)}
                                   whoOpened={this.props.whoOpened}
                                   setWhoOpened={this.props.setWhoOpened}
                                   GetUserFromListAuthData={this.props.GetUserFromListAuthData}/>
    }
}

export default MainUsersClass
