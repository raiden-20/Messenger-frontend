import React from "react";
import axios from "axios";
import {AUTHORIZATION} from "../../../paths/authPath";
import {PropsExit} from "../../../../redux/interfaces/navigation/navigationExit";
import {useNavigate} from "react-router-dom";
import NavigationMoreSectionComponent from "./NavigationMoreSectionComponent";

const NavigationMoreSection = (props: PropsExit) => {
    const navigation = useNavigate()
    const enter = () => {
        debugger
        axios.post('http://localhost:8000/auth/exit', {
            token: props.token,
        }).then(response => {
            debugger
            switch (response.status) {
                case 200 : {
                    navigation(AUTHORIZATION)
                    break
                }
                default:
            }
            // todo отправлять null на данные юзера
        }).catch(error => {
            debugger
            console.dir(error)
            switch (error.response.status) {
                case 400 : {

                    break
                }
                case 409 : {

                    break
                }
                default:
            }
        })
    }

    return <NavigationMoreSectionComponent enter={enter}/>
}

export default NavigationMoreSection