import React, {Component} from "react";

import {
    PropsUserProfileAside,
    StateUserProfileAsideComponent
} from "../../../../redux/interfaces/profile/profileBase";
import './ProfileAsideFriends.css'
import MainProfileAsideComponent from "./MainProfileAsideComponent";
import {GetCountFriendsAxios, GetRandomFriendsAxios} from "../../../axios/users/UsersAxios";
import {GetPhotoAxios, GetPhotoCountAxios} from "../../../axios/photo/PhotoAxios";

class MainProfileAsideClass extends Component<PropsUserProfileAside, StateUserProfileAsideComponent>{

    componentDidMount() {
        GetPhotoCountAxios({
            setCountPhoto: this.props.setCountPhoto
        })
        let photo = GetPhotoAxios({
            id: localStorage.getItem('idUser') as string
        })
        photo.then(response => {
            this.props.setPhotoUrl(response)
        })
        GetRandomFriendsAxios({
            setUsers: this.props.setUsers
        })
        GetCountFriendsAxios({
            setUserFriendsCount: this.props.setUserFriendsCount
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