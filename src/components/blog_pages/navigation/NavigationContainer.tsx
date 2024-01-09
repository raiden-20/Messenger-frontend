import {PropsNavigation, StateNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import {setButtonMoreSection} from "../../../redux/reducers/navigationReducer";
import {connect} from "react-redux";
import NavigationComponent from "./NavigationComponent";
import {setData} from "../../../redux/reducers/authReducer";
import {Logout} from "../../../redux/thunk/authThunk";

const mapStateToProps = (state : PropsNavigation & StateNavigation) => {
    return {
        buttonMoreSection: state.navigation.buttonMoreSection,
        data: state.auth.data
    }
}

const mapDispatchToProps = {
    setButtonMoreSection,
    Logout
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)

export default NavigationContainer