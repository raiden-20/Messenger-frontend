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
        axios.get(`https://localhost:8000/social/subscriptions/${localStorage.getItem('idUser')}`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)
                    }
                }
            })
    }

    getFriends() {
        axios.get(`http://localhost:8000/social/friends/${localStorage.getItem('idUser')}`, this.config)
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
        axios.get(`http://localhost:8000/social/subscriptions/${localStorage.getItem('idUser')}`, this.config)
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
        axios.get(`http://localhost:8000/social/subscribers/${localStorage.getItem('idUser')}`, this.config)
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

    render() {
        return <MainUsersComponent users={this.props.users}
                                   getFriends={this.getFriends}
                                   getSubscribers={this.getSubscribers}
                                   getSubscriptions={this.getSubscriptions}
                                   countFriends={this.props.countFriends}
                                   countSubscribers={this.props.countSubscribers}
                                   countSubscriptions={this.props.countSubscriptions}/>
    }
}

export default MainUsers
