import React, {Component} from 'react';
import {PropsUserProfile, StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileComponent from "./MainProfileComponent";

class MainProfileClass extends Component<PropsUserProfile, StateUserProfile> {

    componentDidMount() {
        this.props.AuthGetData(localStorage.getItem('idUser') as string)
        this.props.ProfileData(localStorage.getItem('idUser') as string)
    }

    render() {
        return <MainProfileComponent name={this.props.name}
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