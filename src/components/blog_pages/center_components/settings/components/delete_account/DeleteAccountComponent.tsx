import React from "react";
import { PropsDeleteAccountComponent
} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";

const DeleteAccountComponent = (props: PropsDeleteAccountComponent) => {
    return (
        <button onClick={props.delete}>Удалить учетную запись</button>
    )
}

export default DeleteAccountComponent