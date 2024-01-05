import React, {Component} from "react";
import {PropsUsers, StateUsers} from "../../../redux/interfaces/friends/friends";
import MainUsersComponent from "./MainUsersComponent";
import {
    ActionUsersAxios,
    GetCountFriendsAxios, GetCountSubscribersAxios, GetCountSubscriptionsAxios,
    GetFriendsAxios,
    GetSearchAxios,
    GetSubscribersAxios,
    GetSubscriptionsAxios
} from "../../axios/users/UsersAxios";

class MainUsersClass extends Component<PropsUsers, StateUsers> {

    constructor(props: PropsUsers) {
        super(props)

        console.log(this.props)
        GetFriendsAxios({
            setUsers: this.props.setUsers
        })
    }

    componentDidMount() {
        GetCountFriendsAxios({
            setUserFriendsCount: this.props.setUserFriendsCount
        })
        GetCountSubscriptionsAxios({
            setUserSubscriptionsCount: this.props.setUserSubscriptionsCount
        })
        GetCountSubscribersAxios({
            setUserSubscribersCount: this.props.setUserSubscribersCount
        })
    }

    getFriends() {
        GetFriendsAxios({
            setUsers: this.props.setUsers
        })
    }

    getSubscriptions() {
        GetSubscriptionsAxios({
            setUsers: this.props.setUsers
        })
    }

    getSubscribers() {
        GetSubscribersAxios({
            setUsers: this.props.setUsers
        })
    }
    getSearch() {
        GetSearchAxios({
            setUsers: this.props.setUsers
        })
    }

    actionRequest = (idOtherUser: string, action : string) => {
        action = action.toUpperCase()
        let actionAx = ActionUsersAxios({
            idOtherUser: idOtherUser,
            action: action
        })
        actionAx.then(response => {
            debugger
            switch (action) {
                case 'CREATE': {
                    this.props.setChangeUserStatus(idOtherUser, 'SEND_FIRST')
                    this.props.setUserSubscriptionsCount(this.props.countSubscriptions + 1)
                    break
                }
                case 'DELETE_FRIEND': {
                    this.props.setChangeUserStatus(idOtherUser, 'SEND_SECOND')
                    this.props.setUserFriendsCount(this.props.countFriends - 1)
                    this.props.setUserSubscribersCount(this.props.countSubscribers + 1)
                    break
                }
                case 'ACCEPT': {
                    this.props.setChangeUserStatus(idOtherUser, 'FRIENDS')
                    this.props.setUserSubscribersCount(this.props.countSubscribers - 1)
                    this.props.setUserFriendsCount(this.props.countFriends + 1)
                    break
                }
                case 'REJECT': {
                    this.props.setChangeUserStatus(idOtherUser, null)
                    this.props.setUserSubscribersCount(this.props.countSubscribers - 1)
                    break
                }
                case 'DELETE_REQUEST': {
                    this.props.setChangeUserStatus(idOtherUser, null)
                    this.props.setUserSubscriptionsCount(this.props.countSubscriptions - 1)
                    break
                }
            }
        })
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
                                   setUserNickname={this.props.setUserNickname}/>
    }
}

export default MainUsersClass
