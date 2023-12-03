import React from "react";
import axios from "axios";
import {PropsDeleteAccount} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import DeleteAccountComponent from "./DeleteAccountComponent";
import {useNavigate} from "react-router-dom";
import {AUTHORIZATION} from "../../../../../paths/authPath";

const DeleteAccount = (props: PropsDeleteAccount) => {
    const navigation = useNavigate()
    const deleteAccount = () => {
        axios.put('http://localhost:8000/auth/block', {
            token: props.token,
            password: props.password
        }).then(response => {
            debugger
            switch (response.status) {
                case 200 : {
                    if (response.data === "Account is blocked") {
                        props.setMessage('')
                        props.setToken('')
                        navigation(AUTHORIZATION)
                    }
                    break
                }
                default:
            }
        }).catch(error => {
            debugger
            console.dir(error)
            props.setMessage(error.message)
            switch (error.response.status) {
                case 400 : {
                    if (error.response.data === "User doesn't exist") {
                        props.setMessage('Пользователя не существует')
                    } else if (error.response.data === "Code doesn't match") {
                        props.setMessage('Неверный код')
                    }
                    break
                }
                case 403: {
                    if (error.response.data === "Account has already been blocked") {
                        props.setMessage('Аккаунт уже заблокирован')
                    }
                    break
                }
                default:
            }
        })
    }

    return <DeleteAccountComponent delete={deleteAccount}/>
}

export default DeleteAccount