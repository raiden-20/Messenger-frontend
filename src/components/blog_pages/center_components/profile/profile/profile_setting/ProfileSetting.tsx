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
        let formData = new FormData()
        formData.append('avatarUrl', this.props.input_avatarUrl)
        formData.append('coverUrl', this.props.input_coverUrl)


        axios.post('http://localhost:8000/auth/change/nickname', {
            "token": localStorage.getItem('token'),
            "nickname": this.props.input_nickname
        }, this.config).then(response => {

            this.props.setNickname(this.props.input_nickname)
            localStorage.setItem('token', response.data)

            axios.post('http://localhost:8000/social/data', {
                name: this.props.input_name,
                birthDate: this.props.input_birthDate,
                formData,
                bio: this.props.input_bio}, this.config)
                .then(response => {
                    switch (response.status) {
                        case 200 : {

                        }
                    }
                })
            this.props.setInputNickname('')
            this.props.setInputName('')
            this.props.setInputBirthDate('')
            this.props.setInputBio('')
        }).catch(error => {
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
            this.props.setInputBirthDate('')
            this.props.setInputBio('')
        })
    }

    render() {
        return <ProfileSettingComponent id={this.props.id}
                                        message={this.props.message}
                                        input_bio={this.props.input_bio}
                                        input_birthDate={this.props.input_birthDate}
                                        input_name={this.props.input_name}
                                        setInputBio={this.props.setInputBio}
                                        setInputBirthDate={this.props.setInputBirthDate}
                                        setInputName={this.props.setInputName}
                                        input_nickname={this.props.input_nickname}
                                        setInputNickname={this.props.setInputNickname}
                                        setInputAvatarUrl={this.props.setInputAvatarUrl}
                                        setInputCoverUrl={this.props.setInputCoverUrl}
                                        setData={this.setData}
                                        setButtonSettingPressed={this.props.setButtonSettingPressed}/>
    }
}

export default ProfileSetting