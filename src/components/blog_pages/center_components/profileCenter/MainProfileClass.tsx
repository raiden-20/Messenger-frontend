import React, {Component} from 'react';
import {PropsUserProfile, StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileComponent from "./MainProfileComponent";
import {Auth} from "../../../../axios/auth/AuthAxios";
import {Profile} from "../../../../axios/profile/ProfileAxios";

class MainProfileClass extends Component<PropsUserProfile, StateUserProfile> {

    componentDidMount() {
        Auth.AuthDataAxios({
            id: localStorage.getItem('idUser') as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setNickname(response[1].nickname)
                    this.props.setEmail(response[1].email)
                }
            }
        })

        Profile.ProfileGetDataAxios({
            id: localStorage.getItem('idUser') as string
        }).then(responseSocial => {
            switch (responseSocial[0]) {
                case 200 : {
                    this.props.setUserData(responseSocial[1].name, responseSocial[1].birthDate,
                        responseSocial[1].bio, responseSocial[1].avatarUrl,
                        responseSocial[1].coverUrl, responseSocial[1].status)
                    break
                }
                case 400: {
                    // user doesn't exist
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
        })
    }

    render() {
        return <MainProfileComponent
            name={this.props.name}
            nickname={this.props.nickname}
            birthDate={this.props.birthDate}
            bio={this.props.bio}
            message={this.props.message}
            avatarUrl={this.props.avatarUrl}
            coverUrl={this.props.coverUrl}
            status={this.props.status}/>
    }
}

export default MainProfileClass