import {PropsNavigation, StateNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import {setButtonMoreSection} from "../../../redux/reducers/navigationReducer";
import {connect} from "react-redux";
import NavigationComponent from "./NavigationComponent";
import {setData} from "../../../redux/reducers/authReducer";
import {Logout, LogoutClear} from "../../../redux/thunk/authThunk";

const mapStateToProps = (state : PropsNavigation & StateNavigation) => {
    return {
        buttonMoreSection: state.navigation.buttonMoreSection,
        data: state.auth.data
    }
}

const mapDispatchToProps = {
    setButtonMoreSection,
    LogoutClear
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)

export default NavigationContainer