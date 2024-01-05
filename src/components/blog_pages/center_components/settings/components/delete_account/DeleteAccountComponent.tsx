import React, {useState} from "react";
import { PropsDeleteAccountComponent
} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import DeleteAccountWindow from "./DeleteAccountWindow";
import delete_window from "./DeleteAccountWindow.module.css";
import {useNavigate} from "react-router-dom";
import {AUTHORIZATION} from "../../../../../paths/authPath";

const DeleteAccountComponent = (props: PropsDeleteAccountComponent) => {
    const [isDeleteAccountWindow, setDeleteAccountWindow] = useState(false)

    const navigation = useNavigate()

    const deleteAccount = () => {
        props.delete()
        if (localStorage.getItem('token') === '') {
            navigation(AUTHORIZATION)
        }
    }

    return (
        <div>
            <button className={delete_window.deleteButton} onClick={() => setDeleteAccountWindow(true)}>Удалить учетную запись</button>
            {isDeleteAccountWindow ? <DeleteAccountWindow delete={deleteAccount}
                                                          setDeleteAccountWindow={setDeleteAccountWindow}/> : null}
        </div>

    )
}

export default DeleteAccountComponent