import {setButtonSettingPressed} from "../../../../../redux/reducers/profileReducer";
import {StateButtonPressed} from "../../../../../redux/interfaces/profile/settings/profileSettings";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ProfileUserSettings from "./ProfileUserSettings";

const mapStateToProps = (state: StateButtonPressed) => {
    return {
        isButtonSettingPressed: state.profile.isButtonSettingPressed
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setButtonSettingPressed(isButtonSettingPressed :boolean) {
            dispatch(setButtonSettingPressed(isButtonSettingPressed))
        }
    }

}

const ProfileUserSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileUserSettings)

export default ProfileUserSettingsContainer