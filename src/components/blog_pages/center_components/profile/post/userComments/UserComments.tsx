import prof_setting from "../../profile/profile_setting/ProfileSetting.module.css";
import React from "react";
import {PropsUserComment} from "../../../../../../redux/interfaces/profile/post/comments";

const UserComments = (props: PropsUserComment) => {
    return (
        <div>
            <section className={prof_setting.overflay}></section>
            <section className={prof_setting.location_edit_window}>

            </section>
        </div>
    )
}

export default UserComments