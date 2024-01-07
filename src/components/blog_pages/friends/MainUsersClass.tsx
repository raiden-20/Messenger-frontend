import React, {Component} from "react";
import {PropsUsers, StateUsers} from "../../../redux/interfaces/friends/friends";
import MainUsersComponent from "./MainUsersComponent";
import {
    ActionUsersAxios, Users
} from "../../../axios/users/UsersAxios";

class MainUsersClass extends Component<PropsUsers, StateUsers> {

    constructor(props: PropsUsers) {
        super(props)

        console.log(this.props)
        Users.GetFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setUsers(response[1])
                        break
                    }
                    case 401 : {
                        //плохой токен
                        break
                    }
                }
            })
    }

    componentDidMount() {
        Users.GetCountFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setUserFriendsCount(response[1])
                        break
                    }
                    case 401 : {
                        //плохой токен
                        break
                    }
                }
            })
        Users.GetCountSubscriptionsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setUserSubscriptionsCount(response[1])
                        break
                    }
                    case 401 : {
                        //плохой токен
                        break
                    }
                }
            })
        Users.GetCountSubscribersAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setUserSubscribersCount(response[1])
                        break
                    }
                    case 401 : {
                        //плохой токен
                        break
                    }
                }
            })
    }

    getFriends() {
        Users.GetFriendsAxios()
            .then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUsers(response[1])
                    break
                }
                case 401 : {
                    //плохой токен
                    break
                }
            }
        })
    }

    getSubscriptions() {
        Users.GetSubscriptionsAxios()
            .then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUsers(response[1])
                    break
                }
                case 401 : {
                    //плохой токен
                    break
                }
            }
        })
    }

    getSubscribers() {
        Users.GetSubscribersAxios()
            .then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUsers(response[1])
                    break
                }
                case 401 : {
                    //плохой токен
                    break
                }
            }
        })
    }
    getSearch() {
        Users.GetSearchAxios()
            .then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUsers(response[1])
                    break
                }
                case 401 : {
                    //плохой токен
                    break
                }
            }
        })
    }

    actionRequest = (idOtherUser: string, action : string) => {
        action = action.toUpperCase()
        ActionUsersAxios({
            idOtherUser: idOtherUser,
            action: action
        }).then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
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
