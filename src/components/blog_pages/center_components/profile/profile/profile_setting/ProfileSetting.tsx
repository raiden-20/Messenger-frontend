import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import axios from "axios";
import {
    PropsProfileSettings,
    StateProfileSettingsClass
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import config from "../../../../../paths/config";

class ProfileSetting extends Component<PropsProfileSettings, StateProfileSettingsClass> {

    deleteCoverUrl = ''
    deleteAvatarUrl = ''


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

    setAvatarToServer = () => {
        debugger
        if (this.props.deleteAvatarFlag) {
            axios.delete('http://localhost:8080/file', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: {
                    url: this.deleteAvatarUrl,
                    source: 'AVATAR'
                }
            }).then(response => {
                debugger
            }).catch(error => {
                debugger
            })
        }
        if (this.props.input_avatarUrl !== undefined || this.props.avatarUrl !== null) {
            let formDataAvatar = new FormData()
            formDataAvatar.append('file', this.props.input_avatarUrl)
            formDataAvatar.append('url', 'undefined')
            formDataAvatar.append('source', 'AVATAR')

            axios.post('http://localhost:8080/file', {
                formDataAvatar
            }, config).then(response => {
                debugger
            }).catch(error => {
                debugger
            })
        }
    }


    setCoverToServer = () => {
        debugger
        if (this.props.deleteCoverFlag) {
            axios.delete('http://localhost:8080/file', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                data: {
                    url: this.deleteCoverUrl,
                    source: 'COVER'
                }
            }).then(response => {
                debugger
            }).catch(error => {
                debugger
            })
        }
        if (this.props.input_coverUrl !== undefined || this.props.input_coverUrl !== null) {
            let formDataCover = new FormData()
            formDataCover.append('file', this.props.input_coverUrl)
            formDataCover.append('url', 'undefined')
            formDataCover.append('source', 'COVER')

            axios.post('http://localhost:8080/file', {
                formDataCover
            }, config).then(response => {
                debugger
            }).catch(error => {
                debugger
            })
        }
    }


    setData = () => {
        debugger

        this.setAvatarToServer()
        this.setCoverToServer()

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