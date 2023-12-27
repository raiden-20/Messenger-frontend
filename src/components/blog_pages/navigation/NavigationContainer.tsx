import {PropsNavigation, StateNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import {Dispatch} from "redux";
import {setButtonMoreSection} from "../../../redux/reducers/navigationReducer";
import {connect} from "react-redux";
import NavigationComponent from "./NavigationComponent";
import {setData, setToken} from "../../../redux/reducers/authReducer";

const mapStateToProps = (state : PropsNavigation & StateNavigation) => {
    return {
        buttonMoreSection: state.navigation.buttonMoreSection,
        token: state.auth.token,
        data: state.auth.data
    }
}

const mapDispatchToProps  = (dispatch : Dispatch) => {
    return {
        setButtonMoreSection(buttonMoreSection : boolean) {
            dispatch(setButtonMoreSection(buttonMoreSection))
        },
        setToken(token : string) {
            dispatch(setToken(token))
        },
        setData(data : object) {
            dispatch(setData(data))
        }
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)

export default NavigationContainer