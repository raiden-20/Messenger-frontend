import React from "react";
import {PropsDeleteAccount} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import DeleteAccountComponent from "./DeleteAccountComponent";
import {Auth} from "../../../../../../axios/auth/AuthAxios";

const DeleteAccountClass = (props: PropsDeleteAccount) => {
    const deleteAccount = () => {
        Auth.DeleteProfileAxios().then(response => {
            switch (response[0]) {
                case 200 : {
                    if (response[1] === "Account is blocked") {
                        props.setMessage('')
                        localStorage.setItem('email', '')
                        localStorage.setItem('token', '')
                        localStorage.setItem('password', '')
                        localStorage.setItem('id', '')
                        localStorage.setItem('idUser', '')
                    }
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        props.setMessage('Пользователя не существует')
                    } else if (response[1] === "Code doesn't match") {
                        props.setMessage('Неверный код')
                    }
                    break
                }
                case 401 : {
                    props.setMessage('Плохой токен')
                    break
                }
                case 403: {
                    props.setMessage('Аккаунт уже заблокирован')
                    break
                }
            }
        })
    }

    return <DeleteAccountComponent delete={deleteAccount}/>
}

export default DeleteAccountClass