import prof_setting from "../../../profile/profile/profile_setting/ProfileSetting.module.css";
import React from "react";
import {
    PropsDeleteAccountWindow
} from "../../../../../../redux/interfaces/settings/settings_for_components/SettingsDeleteAccount";
import delete_window from "./DeleteAccountWindow.module.css";

const DeleteAccountWindow = (props: PropsDeleteAccountWindow) => {

    const cancel = () => {
        props.setDeleteAccountWindow(false)
    }


    return (
        <div>
            <section className={prof_setting.overflay} onClick={() => props.setDeleteAccountWindow(false)}></section>
            <section className={delete_window.new_post_window}>
                <section className={delete_window.root}>
                    <div>Удаление аккаунта</div>
                    <p>Вы уверены, что хотите удалить аккаунт? Бла бла бла бла инфа про удаление акка</p>
                    <section>
                        <button className={delete_window.cancel} onClick={cancel}>Отмена</button>
                        <button className={delete_window.next} onClick={props.delete}>Удалить</button>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default DeleteAccountWindow