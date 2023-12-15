import React, {Component} from "react";

import {
    PropsUserProfileAside,
    StateUserProfileAsideComponent
} from "../../../../redux/interfaces/profile/profileBase";
import './ProfileAsideFriends.css'
import MainProfileAsideComponent from "./MainProfileAsideComponent";
import axios from "axios";

class MainProfileAside extends Component<PropsUserProfileAside, StateUserProfileAsideComponent>{
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/social/friends/random/${localStorage.getItem('idUser')}`, this.config)
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
                    case 403: {
                        //плохой токен
                    }
                }
        })
    }

    render() {
        return <MainProfileAsideComponent users={this.props.users}
                                          countFriends={this.props.countFriends}/>;
    }


}

export default MainProfileAside