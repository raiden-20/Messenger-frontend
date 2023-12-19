import React, {Component} from "react";
import {PropsUsers, StateUsers} from "../../../redux/interfaces/friends/friends";
import axios from "axios";
import MainUsersComponent from "./MainUsersComponent";

class MainUsers extends Component<PropsUsers, StateUsers> {
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };

    componentDidMount() {
        axios.get(`https://localhost:8080/social/friends/${localStorage.getItem('idUser')}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)

                        axios.get(`http://localhost:8080/social/count/friends/${localStorage.getItem('idUser')}`, this.config)
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
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }

    getFriends() {
        axios.get(`http://localhost:8080/social/friends/${localStorage.getItem('idUser')}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)

                        axios.get(`http://localhost:8080/social/count/friends/${localStorage.getItem('idUser')}`, this.config)
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
        axios.get(`http://localhost:8080/social/subscriptions/${localStorage.getItem('idUser')}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)

                        axios.get(`http://localhost:8080/social/count/subscriptions/${localStorage.getItem('idUser')}`, this.config)
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
        axios.get(`http://localhost:8080/social/subscribers/${localStorage.getItem('idUser')}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)

                        axios.get(`http://localhost:8080/social/count/subscribers/${localStorage.getItem('idUser')}`, this.config)
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
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {

                }
            }
        })
    }
    getSearch() { //todo прописать запрос search
        axios.get(`http://localhost:8080/social/users}`, this.config)
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
        axios.get(`http://localhost:8080/фгер/users}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsersNicknames(response.data)
                    }
                }
            })
    }

    actionRequest = (idOtherUser: string, action : string) => {
        axios.post(`http://localhost:8080/social/action`, {
            id: idOtherUser,
            action: action
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
        return <MainUsersComponent users={this.props.users}
                                   getFriends={this.getFriends}
                                   getSubscribers={this.getSubscribers}
                                   getSubscriptions={this.getSubscriptions}
                                   countFriends={this.props.countFriends}
                                   countSubscribers={this.props.countSubscribers}
                                   countSubscriptions={this.props.countSubscriptions}
                                   actionRequest={this.actionRequest}
                                   getSearch={this.getSearch}
                                   whoOpened={this.props.whoOpened}
                                   setWhoOpened={this.props.setWhoOpened}/>
    }
}

export default MainUsers
