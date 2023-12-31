import React, {Component} from 'react';
import {PropsUserProfile, StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileComponent from "./MainProfileComponent";
import {AuthDataAxios} from "../../../axios/auth/AuthAxios";

class MainProfileClass extends Component<PropsUserProfile, StateUserProfile> {

    componentDidMount() {

        AuthDataAxios({
            setNickname: this.props.setNickname,
            setUserData: this.props.setNickname,
            setMessage: this.props.setMessage
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

export default MainProfileClass