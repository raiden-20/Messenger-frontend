import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import axios from "axios";
import {
    PropsProfileSettings,
    StateProfileSettings
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";

class ProfileSetting extends Component<PropsProfileSettings, StateProfileSettings> {
    config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    setData = () => {
        axios.post('http://localhost:8000/auth/change/nickname', {
            "token": localStorage.getItem('token'),
            "nickname": this.props.input_nickname
        }, this.config).then(response => {
            this.props.setMessage('Никнейм изменен')
            this.props.setNickname(this.props.input_nickname)
            localStorage.setItem('token', response.data)

            this.props.setInputNickname('')
            this.props.setInputName('')
            this.props.setInputSurname('')
            this.props.setInputBirthDate('')
            this.props.setInputBio('')
        }).catch(error => {
            console.dir(error)
            this.props.setMessage(error.message)
            switch (error.response.status) {
                case 400 : {
                    if (error.response.data === "User doesn't exist") {
                        this.props.setMessage('Пользователя с такой почтой не существует')
                    }
                    break
                }
                case 409 : {
                    if (error.response.data === "This nickname is already in use") {
                        this.props.setMessage('Данный ийнейм уже используется')
                    }
                    break
                }
                default:
            }
            this.props.setInputName('')
            this.props.setInputSurname('')
            this.props.setInputBirthDate('')
            this.props.setInputBio('')
        })
    }

    render() {
        return <ProfileSettingComponent id={this.props.id}
                                        message={this.props.message}
                                        setName={this.props.setName}
                                        setSurname={this.props.setSurname}
                                        setNickname={this.props.setNickname}
                                        setMessage={this.props.setMessage}
                                        setId={this.props.setId}
                                        input_bio={this.props.input_bio}
                                        input_birthDate={this.props.input_birthDate}
                                        input_name={this.props.input_name}
                                        input_surname={this.props.input_surname}
                                        setBirthDate={this.props.setBirthDate}
                                        setInputBio={this.props.setInputBio}
                                        setInputBirthDate={this.props.setInputBirthDate}
                                        setInputName={this.props.setInputName}
                                        setInputSurname={this.props.setInputSurname}
                                        setToken={this.props.setToken}
                                        input_nickname={this.props.input_nickname}
                                        setInputNickname={this.props.setInputNickname}
                                        setData={this.setData}/>
    }
}

export default ProfileSetting