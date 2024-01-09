import React from "react";
import {PropsDeleteAccount} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import DeleteAccountComponent from "./DeleteAccountComponent";

const DeleteAccountClass = (props: PropsDeleteAccount) => {
    const deleteAccount = () => {
        props.DeleteAccount()
    }

    return <DeleteAccountComponent delete={deleteAccount}/>
}

export default DeleteAccountClass