import React from "react";
import {AUTHORIZATION} from "../../../paths/authPath";
import {PropsExit} from "../../../../redux/interfaces/navigation/navigationExit";
import {useNavigate} from "react-router-dom";
import NavigationMoreSectionComponent from "./NavigationMoreSectionComponent";

const NavigationMoreSection = (props: PropsExit) => {
    const navigation = useNavigate()

    const enter = () => {
        props.setToken('')
        props.setData({
            id: '',
            email: '',
            nickname: '',
            password: ''})
        //todo также тут будет потом и обнуление профиля и тд
        localStorage.setItem('token', '')
        localStorage.setItem('id', '')
        localStorage.setItem('password', '')
        navigation(AUTHORIZATION)
    }

    return <NavigationMoreSectionComponent enter={enter}/>
}

export default NavigationMoreSection