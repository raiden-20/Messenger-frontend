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
            this.props.DeleteAvatar(this.deleteAvatarUrl)
        }
        if (this.props.input_avatarUrl !== undefined) {
            this.props.SetAvatar(this.props.input_avatarUrl)
        }
    }

    setCoverToServer = () => {
        if (this.props.deleteCoverFlag) {
            this.props.DeleteCover(this.deleteCoverUrl)
        }
        if (this.props.input_coverUrl !== undefined) {
            this.props.SetCover(this.props.input_coverUrl)
        }
    }

    setData = () => {
        this.setAvatarToServer()
        this.setCoverToServer()
        this.props.ChangeNickname(this.props.input_nickname)
        this.props.ChangeProfileData(this.props.input_name, this.props.input_birthDate, this.props.input_bio,
            this.props.avatarUrl, this.props.coverUrl )

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