import React, {Component} from "react";
import {PropsUsers, StateUsers} from "../../../redux/interfaces/friends/friends";
import axios from "axios";
import MainUsersComponent from "./MainUsersComponent";
import config from "../../paths/config";

class MainUsersClass extends Component<PropsUsers, StateUsers> {

    constructor(props: PropsUsers) {
        super(props)

        console.log(this.props)
        axios.get(`http://localhost:8080/social/relation/friends/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/social/count/friends/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUserFriendsCount(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //плохой токен
                }
            }
        })

        axios.get(`http://localhost:8080/social/count/subscriptions/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUserSubscriptionsCount(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //плохой токен
                }
            }
        })

        axios.get(`http://localhost:8080/social/count/subscribers/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUserSubscribersCount(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //плохой токен
                }
            }
        })
    }
    getFriends() {
        axios.get(`http://localhost:8080/social/relation/friends/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }

    getSubscriptions() {
        axios.get(`http://localhost:8080/social/relation/subscriptions/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }

    getSubscribers() {
        axios.get(`http://localhost:8080/social/relation/subscribers/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }
    getSearch() {
        axios.get('http://localhost:8080/social/users', config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }

    actionRequest = (idOtherUser: string, action : string) => {
        action = action.toUpperCase()
        axios.post(`http://localhost:8080/social/action`, {
            secondUser: idOtherUser,
            action: action
        }, config)
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
                                   setWhoOpened={this.props.setWhoOpened}/>
    }
}

export default MainUsersClass
