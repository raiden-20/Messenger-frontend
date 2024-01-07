import React, {Component} from "react";

import {
    PropsUserProfileAside,
    StateUserProfileAsideComponent
} from "../../../../redux/interfaces/profile/profileBase";
import './ProfileAsideFriends.css'
import MainProfileAsideComponent from "./MainProfileAsideComponent";
import {Users} from "../../../../axios/users/UsersAxios";
import {Photo} from "../../../../axios/photo/PhotoAxios";

class MainProfileAsideClass extends Component<PropsUserProfileAside, StateUserProfileAsideComponent>{

    componentDidMount() {
        Photo.GetPhotoCountAxios().then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setCountPhoto(response[1])
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
        })

        Photo.GetPhotoAxios({
            id: localStorage.getItem('idUser') as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setPhotoUrl(response[1])
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }

        })
        Users.GetRandomFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setUsers(response[1])
                        break
                    }
                    case 400 : {
                        // todo на стр пользователя не сущ
                        break
                    }
                    case 401: {
                        // bad token
                        break
                    }
                }
            })
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

    }

    render() {
        return <MainProfileAsideComponent usersShortInfo={this.props.usersShortInfo}
                                          countFriends={this.props.countFriends}
                                          countPhoto={this.props.countPhoto}
                                          setChangeUserStatus={this.props.setChangeUserStatus}
                                          photoUrl={this.props.photoUrl}
                                          setUserNickname={this.props.setUserNickname}
                                          setUserPhoto={this.props.setUserPhoto}/>;
    }


}

export default MainProfileAsideClass