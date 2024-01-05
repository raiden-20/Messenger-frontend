import {Component} from "react";
import ProfileSettingComponent from "./ProfileSettingComponent";
import {
    PropsProfileSettings,
    StateProfileSettingsClass
} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import {
    DeleteAvatarPhotoAxios,
    DeleteCoverPhotoAxios,
    SetAvatarAxios,
    SetCoverAxios
} from "../../../../../axios/photo/PhotoAxios";
import {ChangeNicknameAxios} from "../../../../../axios/auth/AuthAxios";
import {ChangeProfileDataAxios} from "../../../../../axios/profile/ProfileAxios";

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
            DeleteAvatarPhotoAxios({
                deleteAvatarUrl: this.deleteAvatarUrl,
                setAvatarUrl: this.props.setAvatarUrl,
                setDeleteAvatarFlag: this.props.setDeleteAvatarFlag
            })
        }
        if (this.props.input_avatarUrl !== undefined) {
            SetAvatarAxios( {
                input_avatarUrl: this.props.input_avatarUrl,
                setAvatarUrl: this.props.setAvatarUrl
            })
        }
    }

    setCoverToServer = () => {
        if (this.props.deleteCoverFlag) {
            DeleteCoverPhotoAxios({
                deleteCoverUrl: this.deleteCoverUrl,
                setCoverUrl: this.props.setCoverUrl,
                setDeleteCoverFlag: this.props.setDeleteCoverFlag
            })
        }
        if (this.props.input_coverUrl !== undefined) {
            SetCoverAxios({
                input_coverUrl: this.props.input_coverUrl,
                setCoverUrl: this.props.setCoverUrl
            })
        }
    }

    setData = () => {
        this.setAvatarToServer()
        this.setCoverToServer()

        ChangeNicknameAxios({
            input_nickname: this.props.input_nickname,
            setNickname: this.props.setNickname,
            setMessage: this.props.setMessage
        })

        ChangeProfileDataAxios({
            input_name: this.props.input_name,
            input_birthDate: this.props.input_birthDate,
            input_bio: this.props.input_bio,
            setMessage: this.props.setMessage,
            setButtonSettingPressed: this.props.setButtonSettingPressed
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
                                        coverUrl={this.props.coverUrl}
                                        setDeleteAvatarUrl={this.setDeleteAvatarUrl}
                                        setDeleteCoverUrl={this.setDeleteCoverUrl}/>
    }
}

export default ProfileSettingClass