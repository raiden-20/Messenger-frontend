import React, {Component} from 'react';
import {PropsUserProfile, StateUserProfile} from "../../../../redux/interfaces/profile/profileBase";
import MainProfileComponent from "./MainProfileComponent";
import axios from "axios";

class MainProfile extends Component<PropsUserProfile, StateUserProfile>{
    config = {
        headers: {
            Authorization: `Bearer ${this.props.token}`
        }
    };
    componentDidMount() {
        axios.get(`http://localhost:8000/auth/data/${localStorage.getItem('id')}`, this.config)
            .then(response => {
            switch (response.status) {
                case 200 : {
                    debugger
                    this.props.setNickname(response.data.nickname)
                    break
                }
                default:
            }
        }).catch(error => {
            debugger
            this.props.setMessage(error.message)
            switch (error.response.status) {
                case 400 : {
                    break
                }
                default:
            }
        })
    }

    render() {
        return <MainProfileComponent
            id={this.props.id}
            name={this.props.name}
            surname={this.props.surname}
            nickname={this.props.nickname}
            birthDate={this.props.birthDate}
            bio={this.props.bio}
            message={this.props.message}
            setMessage={this.props.setMessage}
            setName={this.props.setName}
            setNickname={this.props.setNickname}
            setSurname={this.props.setSurname}
            setId={this.props.setId}
            token={this.props.token}/>
    }
}

export default MainProfile