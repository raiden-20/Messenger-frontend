import React from "react";
import {AUTHORIZATION} from "../../../../paths/authPath";
import {PropsExit} from "../../../../redux/interfaces/navigation/navigationExit";
import {useNavigate} from "react-router-dom";
import NavigationMoreSectionComponent from "./NavigationMoreSectionComponent";

const NavigationMoreSection = (props: PropsExit) => {
    const navigation = useNavigate()

    const enter = () => {
        props.LogoutClear()
        navigation(AUTHORIZATION)
    }

    return <NavigationMoreSectionComponent enter={enter}/>
}

export default NavigationMoreSection