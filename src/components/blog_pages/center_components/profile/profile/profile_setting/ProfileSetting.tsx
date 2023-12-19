import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import axios from "axios";
import {
    PropsProfileSettings,
    StateProfileSettingsClass
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";

class ProfileSetting extends Component<PropsProfileSettings, StateProfileSettingsClass> {


    config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    constructor(props: PropsProfileSettings) {
        super(props)
        this.props.setInputName(this.props.name)
        this.props.setInputBirthDate(this.props.birthDate)
        this.props.setInputBio(this.props.bio)
        this.props.setInputNickname(this.props.nickname)
        if (this.props.avatarUrl !== '') {
            fetch(this.props.avatarUrl)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputAvatarUrl(new File([blob], 'avatar.jpg', { type: blob.type }))
                });
        }
        if (this.props.coverUrl !== '') {
            fetch(this.props.coverUrl)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputCoverUrl(new File([blob], 'cover.jpg', { type: blob.type }))
                });
        }
    }

    setPhotoToServer = (formData: FormData) => {

        if (this.props.deleteCoverFlag) {
            axios.delete('http://localhost:8080/file', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: {
                    formData
                }
            }).then()
        } else {
            axios.post('http://localhost:8080/file', {
                formData
            }, this.config).then()
        }
    }

    setData = () => {
        let formDataCover = new FormData()
        formDataCover.append('cover', this.props.input_coverUrl)
        let userUpdateCover = {
            url: this.props.coverUrl,
            source: 'COVER',
            postId: ''
        }
        formDataCover.append('data', JSON.stringify(userUpdateCover))

        let formDataAvatar = new FormData()
        formDataCover.append('avatar', this.props.input_avatarUrl)
        let userUpdateAvatar = {
            url: this.props.avatarUrl,
            source: 'AVATAR',
            postId: ''
        }
        formDataCover.append('data', JSON.stringify(userUpdateAvatar))

        this.setPhotoToServer(formDataCover) // запрос на смену ковра
        this.setPhotoToServer(formDataAvatar)// на смену авы


        axios.post('http://localhost:8080/auth/change/nickname', {
            "token": localStorage.getItem('token'),
            "nickname": this.props.input_nickname
        }, this.config).then(response => {

            this.props.setNickname(this.props.input_nickname)
            localStorage.setItem('token', response.data)

            axios.post('http://localhost:8080/social/data', {
                name: this.props.input_name,
                birthDate: this.props.input_birthDate,
                bio: this.props.input_bio,
            }, this.config)
                .then(response => {
                    switch (response.status) {
                        case 200 : {
                            this.props.setMessage('данные изменены')
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
                        this.props.setMessage('Пользователя не существует')
                    }
                    break
                }
                case 409 : {
                    if (error.response.data === "This nickname is already in use") {
                        this.props.setMessage('Данный никнейм уже используется')
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
                                        setButtonSettingPressed={this.props.setButtonSettingPressed}
                                        setDeleteAvatarFlag={this.props.setDeleteAvatarFlag}
                                        setDeleteCoverFlag={this.props.setDeleteCoverFlag}
                                        avatarUrl={this.props.avatarUrl}
                                        coverUrl={this.props.coverUrl}/>
    }
}

export default ProfileSetting