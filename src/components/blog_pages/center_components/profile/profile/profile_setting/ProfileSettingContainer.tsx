import {connect} from "react-redux";
import ProfileSettingClass from "./ProfileSettingClass";
import {StateProfileSettings} from "../../../../../../redux/interfaces/profile/settings/profileSettings";
import {Dispatch} from "redux";
import {
    setAvatarUrl,
    setBirthDate, setButtonSettingPressed, setCoverUrl, setDeleteAvatarFlag, setDeleteCoverFlag, setInputAvatarUrl,
    setInputBio,
    setInputBirthDate, setInputCoverUrl, setInputName,
    setName, setUserData
} from "../../../../../../redux/reducers/profileReducer";
import {setId, setInputNickname, setMessage, setNickname} from "../../../../../../redux/reducers/authReducer";

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




const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setName(name: string) {
            dispatch(setName(name))
        },
        setUserData(name: string,
                       birthDate: string,
                       bio: string,
                       avatarUrl: string,
                       coverUrl: string,
                       status: string) {
            dispatch(setUserData(name, birthDate, bio, avatarUrl, coverUrl, status))
        },
        setAvatarUrl(avatarUrl : string) {
          dispatch(setAvatarUrl(avatarUrl))
        },
        setCoverUrl(coverUrl : string) {
          dispatch(setCoverUrl(coverUrl))
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

    }
}
const ProfileSettingContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSettingClass)

export default ProfileSettingContainer

