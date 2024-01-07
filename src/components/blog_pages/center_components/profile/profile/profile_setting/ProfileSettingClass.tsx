import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import {
    PropsProfileSettings,
    StateProfileSettingsClass
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import {
    Photo
} from "../../../../../../axios/photo/PhotoAxios";
import {Auth} from "../../../../../../axios/auth/AuthAxios";
import {Profile} from "../../../../../../axios/profile/ProfileAxios";

class ProfileSettingClass extends Component<PropsProfileSettings, StateProfileSettingsClass> {

    deleteCoverUrl = ''
    deleteAvatarUrl = ''

    setDeleteCoverUrl = (deleteCoverUrl: string) => {
        this.deleteCoverUrl = deleteCoverUrl
    }
    setDeleteAvatarUrl = (deleteAvatarUrl: string) => {
        this.deleteAvatarUrl = deleteAvatarUrl
    }

    constructor(props: PropsProfileSettings) {
        super(props)
        this.props.setInputName(this.props.name)
        if (this.props.birthDate !== null) {
            let arr = this.props.birthDate.split('-')
            this.props.setInputBirthDate(arr[0] + '-' + arr[1] + '-' + arr[2][0] + arr[2][1])
        }
        this.props.setInputBio(this.props.bio)
        this.props.setInputNickname(this.props.nickname)
        if (this.props.avatarUrl !== '') {
            fetch(this.props.avatarUrl)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputAvatarUrl(new File([blob], 'avatar.jpg', {type: blob.type}))
                });
        }
        if (this.props.coverUrl !== '') {
            fetch(this.props.coverUrl)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputCoverUrl(new File([blob], 'cover.jpg', {type: blob.type}))
                });
        }
    }

    setAvatarToServer = () => {
        if (this.props.deleteAvatarFlag) {
            Photo.DeleteAvatarPhotoAxios({
                deleteAvatarUrl: this.deleteAvatarUrl
            }).then(response => {
                switch (response) {
                    case 200 : {
                        this.props.setDeleteAvatarFlag(false)
                        break
                    }
                    case 400 : {
                        this.props.setMessage('Плохое имя файла, выберите другой')
                        break
                    }
                    case 401: {
                        // bad token
                        break
                    }
                }
            })
        }
        if (this.props.input_avatarUrl !== undefined) {
            Photo.SetAvatarAxios( {
                input_avatarUrl: this.props.input_avatarUrl
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setAvatarUrl(response[1])
                        break
                    }
                    case 400 : {
                        if (response[1] === 'File too big') {
                            this.props.setMessage('Файл слишком большой')
                        } else if (response[1] === 'Bad file name') {
                            this.props.setMessage('Плохое имя файла, выберите другой')
                        }
                        break
                    }
                    case 401: {
                        // bad token
                        break
                    }
                }
            })
        }
    }

    setCoverToServer = () => {
        if (this.props.deleteCoverFlag) {
            Photo.DeleteCoverPhotoAxios({
                deleteCoverUrl: this.deleteCoverUrl
            }).then(response => {
                switch (response) {
                    case 200 : {
                        this.props.setDeleteCoverFlag(false)
                        break
                    }
                    case 400 : {
                        this.props.setMessage('Плохое имя файла, выберите другой')
                        break
                    }
                    case 401: {
                        // bad token
                        break
                    }
                }
            })
        }
        if (this.props.input_coverUrl !== undefined) {
            Photo.SetCoverAxios( {
                input_coverUrl: this.props.input_coverUrl,
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setCoverUrl(response[1])
                        break
                    }
                    case 400 : {
                        if (response[1] === 'File too big') {
                            this.props.setMessage('Файл слишком большой')
                        } else if (response[1] === 'Bad file name') {
                            this.props.setMessage('Плохое имя файла, выберите другой')
                        }
                        break
                    }
                    case 401: {
                        // bad token
                        break
                    }
                }
            })
        }
    }

    setData = () => {
        this.setAvatarToServer()
        this.setCoverToServer()

        Auth.ChangeNicknameAxios({
            input_nickname: this.props.input_nickname
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setNickname(this.props.input_nickname)
                    if (response[1].split(' ').length === 2) {
                        localStorage.setItem('token', response[1].split(' ')[1])
                    } else {
                        localStorage.setItem('token', response[1])
                    }
                    break
                }
                case 400 : {
                    // todo
                    break
                }
                case 401: {
                    // bad token
                }
            }
        })

        Profile.ChangeProfileDataAxios({
            input_name: this.props.input_name,
            input_birthDate: this.props.input_birthDate,
            input_bio: this.props.input_bio
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setButtonSettingPressed(false)

                    this.props.setUserData(this.props.input_name,
                        this.props.input_birthDate,
                        this.props.input_bio,
                        this.props.avatarUrl,
                        this.props.coverUrl, '')
                    break
                }
                case 400 : {
                    // todo
                    break
                }
                case 401: {
                    // bad token
                }
            }
        })
    }

    render() {
        return <ProfileSettingComponent message={this.props.message}
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
                                        coverUrl={this.props.coverUrl}
                                        setDeleteAvatarUrl={this.setDeleteAvatarUrl}
                                        setDeleteCoverUrl={this.setDeleteCoverUrl}
                                        setMessage={this.props.setMessage}/>
    }
}

export default ProfileSettingClass