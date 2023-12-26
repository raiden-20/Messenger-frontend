import React, {Component} from "react";

import {
    PropsUserProfileAside,
    StateUserProfileAsideComponent
} from "../../../../redux/interfaces/profile/profileBase";
import './ProfileAsideFriends.css'
import MainProfileAsideComponent from "./MainProfileAsideComponent";
import axios from "axios";
import config from "../../../paths/config";

class MainProfileAsideClass extends Component<PropsUserProfileAside, StateUserProfileAsideComponent>{

    componentDidMount() {
        //photo
        axios.get(`http://localhost:8080/blog/photo/count/${localStorage.getItem('idUser')}`, config)
            .then(response =>{
                switch (response.status) {
                    case 200 : {
                        this.props.setCountPhoto(response.data)
                    }
                }
            })

        //friends
        axios.get(`http://localhost:8080/social/relation/friends/random/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setUsers(response.data)

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
                    }
                }
            }).catch(error => {
                debugger
                switch (error.response.status) {
                    case 403: {
                        //плохой токен
                    }
                }
        })
    }

    render() {
        return <MainProfileAsideComponent usersShortInfo={this.props.usersShortInfo}
                                          countFriends={this.props.countFriends}
                                          countPhoto={this.props.countPhoto}/>;
    }


}

export default MainProfileAsideClass