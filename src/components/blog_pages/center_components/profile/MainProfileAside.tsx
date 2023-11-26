import React from "react";
import {useLocation} from "react-router-dom";

import ProfileButtonCreatingPost from "./profile/profile_button_creating_post/ProfileButtonCreatingPost";

import main_aside_css from "./main_profile_css/MainProfileAside.module.css";

const MainProfileAside = () => {

    const location = useLocation()

    return (
        <aside className={main_aside_css.aside}>
            <section className={main_aside_css.friends}>
                <section>
                    <strong>Друзья</strong> 10
                </section>
                <section>

                </section>
            </section>
            <section className={main_aside_css.photo}>
                <section>
                    <strong>Фото</strong> 6
                </section>
                <section className={main_aside_css.group_photo}>
                    <section className={main_aside_css.photo_section}>

                    </section>
                    <section className={main_aside_css.photo_section}>

                    </section>
                </section>
            </section>
            <section>
                {location.pathname === '/profile' ? <ProfileButtonCreatingPost/> : null}
            </section>
        </aside>
    )
}

export default MainProfileAside