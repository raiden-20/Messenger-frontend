import React, {Component} from 'react';
import {PropsUserProfile, StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileComponent from "./MainProfileComponent";
import axios from "axios";

class MainProfile extends Component<PropsUserProfile, StateUserProfile> {
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };

    componentDidMount() {
        axios.get(`'http://localhost:8080/social/data/${localStorage.getItem('idUser')}'`, this.config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setNickname(response.data.nickname)
                        axios.get(`http://localhost:8080/auth/data/${localStorage.getItem('idUser')}`, this.config)
                            .then(response => {
                                switch (response.status) {
                                    case 200 : {
                                        this.props.setName(response.data.name)
                                        this.props.setBio(response.data.name)
                                        this.props.setBirthDate(response.data.birthDate)
                                        this.props.setAvatarUrl(response.data.avatarUrl)
                                        this.props.setCoverUrl(response.data.coverUrl)
                                        this.props.setStatus(response.data.status)
                                        break
                                    }
                                }
                            }).catch(error => {
                            this.props.setMessage(error.message)
                            switch (error.response.status) {
                                case 400 : {
                                    if (error.response.data === "Bad token") {
                                        this.props.setMessage('Плохой токен')
                                    }
                                    break
                                }
                                default:
                            }
                        })
                        break
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403 : {
                    this.props.setMessage('Плохой токен')
                    break
                }
                case 404 : {
                    this.props.setMessage('Такого пользователя не существует')
                    // todo тут перейти на стр такого пользователя не сущ
                    break
                }
            }
        })
    }

    render() {
        return <MainProfileComponent
            id={this.props.id}
            name={this.props.name}
            nickname={this.props.nickname}
            birthDate={this.props.birthDate}
            bio={this.props.bio}
            message={this.props.message}
            token={this.props.token}
            avatarUrl={this.props.avatarUrl}
            coverUrl={this.props.coverUrl}
            status={this.props.status}/>
    }
}

export default MainProfile