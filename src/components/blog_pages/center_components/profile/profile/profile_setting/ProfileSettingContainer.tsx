import {connect} from "react-redux";
import ProfileSettingClass from "./ProfileSettingClass";
import {StateProfileSettings} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import {setButtonSettingPressed, setDeleteAvatarFlag, setDeleteCoverFlag, setInputAvatarUrl,
    setInputBio, setInputBirthDate, setInputCoverUrl, setInputName} from "../../../../../../redux/reducers/profileReducer";
import {setInputNickname, setMessage} from "../../../../../../redux/reducers/authReducer";
import {DeleteAvatar, DeleteCover, SetAvatar, SetCover} from "../../../../../../redux/thunk/photoThunk";
import {ChangeNickname} from "../../../../../../redux/thunk/authThunk";
import {ChangeProfileData} from "../../../../../../redux/thunk/profileThunk";

const mapStateToProps = (state: StateProfileSettings) => {
    return {
        message: state.auth.message,
        input_nickname: state.auth.input_nickname,
        nickname: state.auth.nickname,
        input_name: state.profile.input_name,
        name: state.profile.name,
        input_birthDate: state.profile.input_birthDate,
        birthDate: state.profile.birthDate,
        input_bio: state.profile.input_bio,
        bio: state.profile.bio,
        input_avatarUrl: state.profile.input_avatarUrl,
        avatarUrl: state.profile.avatarUrl,
        input_coverUrl: state.profile.input_coverUrl,
        coverUrl: state.profile.coverUrl,

        deleteAvatarFlag: state.profile.deleteAvatarFlag,
        deleteCoverFlag: state.profile.deleteCoverFlag,
    }
}

const mapDispatchToProps = {
    DeleteAvatar,
    SetAvatar,
    DeleteCover,
    SetCover,
    ChangeNickname,
    ChangeProfileData,
    setMessage,
    setInputBio,
    setInputBirthDate,
    setInputName,
    setInputNickname,
    setInputAvatarUrl,
    setInputCoverUrl,
    setButtonSettingPressed,
    setDeleteAvatarFlag,
    setDeleteCoverFlag
}

const ProfileSettingContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSettingClass)

export default ProfileSettingContainer

