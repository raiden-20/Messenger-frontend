import React, {Component} from "react";

import {
    PropsUserProfileAside,
    StateUserProfileAsideComponent
} from "../../../../redux/interfaces/profile/profileBase";
import './ProfileAsideFriends.css'
import MainProfileAsideComponent from "./MainProfileAsideComponent";

class MainProfileAsideClass extends Component<PropsUserProfileAside, StateUserProfileAsideComponent> {

    componentDidMount() {
        this.props.GetPhotoCount()
        this.props.GetPhoto()
        this.props.GetRandomFriends()
        this.props.GetFriendsCount()
    }

    render() {
        return <MainProfileAsideComponent usersShortInfo={this.props.usersShortInfo}
                                          countFriends={this.props.countFriends}
                                          countPhoto={this.props.countPhoto}
                                          photoUrl={this.props.photoUrl}/>;
    }


}

export default MainProfileAsideClass