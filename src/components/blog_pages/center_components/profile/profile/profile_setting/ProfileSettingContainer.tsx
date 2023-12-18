import {connect} from "react-redux";
import ProfileSetting from "./ProfileSetting";
import {StateProfileSettings} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import {Dispatch} from "redux";
import {
    setBirthDate, setButtonSettingPressed, setDeleteAvatarFlag, setDeleteCoverFlag, setInputAvatarUrl,
    setInputBio,
    setInputBirthDate, setInputCoverUrl, setInputName,
    setName
} from "../../../../../../redux/reducers/profileReducer";
import {setId, setInputNickname, setMessage, setNickname, setToken} from "../../../../../../redux/reducers/authReducer";

const mapStateToProps = (state: StateProfileSettings) => {
    return {
        message: state.auth.message,
        id: state.auth.id,
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
        deleteCoverFlag: state.profile.deleteCoverFlag
    }
}




const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setName(name: string) {
            dispatch(setName(name))
        },
        setNickname(nickname: string) {
            dispatch(setNickname(nickname))
        },
        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setId(id: string) {
            dispatch(setId(id))
        },
        setBirthDate(birthDate: string) {
            dispatch(setBirthDate(birthDate))
        },
        setInputBio(input_bio: string) {
            dispatch(setInputBio(input_bio))
        },
        setInputBirthDate(input_birthDate: string) {
            dispatch(setInputBirthDate(input_birthDate))
        },
        setInputName(input_name: string) {
            dispatch(setInputName(input_name))
        },
        setInputNickname(input_nickname: string) {
            dispatch(setInputNickname(input_nickname))
        },
        setInputAvatarUrl(input_avatarUrl: File) {
            dispatch(setInputAvatarUrl(input_avatarUrl))
        },
        setInputCoverUrl(input_coverUrl: File) {
            dispatch(setInputCoverUrl(input_coverUrl))
        },
        setButtonSettingPressed(isButtonSettingPressed :boolean) {
            dispatch(setButtonSettingPressed(isButtonSettingPressed))
        },
        setDeleteAvatarFlag (deleteAvatarFlag : boolean) {
            dispatch(setDeleteAvatarFlag(deleteAvatarFlag))
        },
        setDeleteCoverFlag (deleteCoverFlag : boolean) {
            dispatch(setDeleteCoverFlag(deleteCoverFlag))
        },

        setToken(token: string) {
            dispatch(setToken(token))
        }
    }
}
const ProfileSettingContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSetting)

export default ProfileSettingContainer

