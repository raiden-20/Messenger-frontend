import {PropsNavigation, StateNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import {Dispatch} from "redux";
import {setButtonMoreSection} from "../../../redux/reducers/navigationReducer";
import {connect} from "react-redux";
import Navigation from "./Navigation";

const mapStateToProps = (state : PropsNavigation & StateNavigation) => {
    return {
        buttonMoreSection: state.navigation.buttonMoreSection
    }
}

const mapDispatchToProps  = (dispatch : Dispatch) => {
    return {
        setButtonMoreSection(buttonMoreSection : boolean) {
            dispatch(setButtonMoreSection(buttonMoreSection))
        }
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer