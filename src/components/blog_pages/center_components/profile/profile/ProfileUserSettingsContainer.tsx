import {setButtonSettingPressed} from "../../../../../redux/reducers/profileReducer";
import {StateButtonPressed} from "../../../../../redux/interfaces/profile/settings/profileSettings";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import ProfileUserSettingsComponent from "./ProfileUserSettingsComponent";

const mapStateToProps = (state: StateButtonPressed) => {
    return {
        isButtonSettingPressed: state.profile.isButtonSettingPressed
    }

}

const mapDispatchToProps = {
    setButtonSettingPressed
}

const ProfileUserSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileUserSettingsComponent)

export default ProfileUserSettingsContainer