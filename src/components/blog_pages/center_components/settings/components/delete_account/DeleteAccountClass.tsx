import React from "react";
import {PropsDeleteAccount} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import DeleteAccountComponent from "./DeleteAccountComponent";
import {DeleteProfileAxios} from "../../../../../axios/auth/AuthAxios";

const DeleteAccountClass = (props: PropsDeleteAccount) => {
    const deleteAccount = () => {
        DeleteProfileAxios( {
            setMessage: props.setMessage
        })
    }

    return <DeleteAccountComponent delete={deleteAccount}/>
}

export default DeleteAccountClass