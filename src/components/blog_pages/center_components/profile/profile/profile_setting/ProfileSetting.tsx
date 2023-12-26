import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import axios from "axios";
import {
    PropsProfileSettings,
    StateProfileSettingsClass
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import config from "../../../../../paths/config";

class ProfileSetting extends Component<PropsProfileSettings, StateProfileSettingsClass> {
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

    setPhotoToServer = (formData: FormData, flag: boolean) => {
        debugger
        if (flag) {
            axios.delete('http://localhost:8080/file', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: {
                    formData
                }
            }).then()
        } else {
            axios.post('http://localhost:8080/file', {
                formData
            }, config).then(response => {
                debugger
            }).catch(error => {
                debugger
                alert(error)
            })
        }
    }

    setData = () => {
        debugger
        let formDataCover = new FormData()
        formDataCover.append('cover', this.props.input_coverUrl)
        let userUpdateCover = {
            url: '',
            source: 'COVER',
            postId: '',
            photoId: ''
        }
        formDataCover.append('data', JSON.stringify(userUpdateCover))

        let formDataAvatar = new FormData()
        formDataAvatar.append('avatar', this.props.input_avatarUrl)
        let userUpdateAvatar = {
            url: '',
            source: 'AVATAR',
            postId: '',
            photoId: ''
        }
        formDataAvatar.append('data', JSON.stringify(userUpdateAvatar))

        this.setPhotoToServer(formDataCover, this.props.deleteCoverFlag) // запрос на смену ковра
        this.setPhotoToServer(formDataAvatar, this.props.deleteAvatarFlag)// на смену авы

        debugger
        axios.post('http://localhost:8080/auth/change/nickname', {
            "token": localStorage.getItem('token'),
            "nickname": this.props.input_nickname
        }, config).then(response => {
            debugger
            this.props.setNickname(this.props.input_nickname)
            localStorage.setItem('token', response.data)

            axios.post('http://localhost:8080/social/data', {
                name: this.props.input_name,
                birthDate: this.props.input_birthDate,
                bio: this.props.input_bio,
            }, config)
                .then(response => {
                    debugger
                    switch (response.status) {
                        case 200 : {
                            this.props.setMessage('Данные изменены')
                        }
                    }
                }).catch(error => {
                debugger
            })
            debugger
        }).catch(error => {
            debugger
            this.props.setMessage(error.message)
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