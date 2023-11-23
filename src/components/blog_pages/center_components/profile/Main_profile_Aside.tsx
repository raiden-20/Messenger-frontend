import React from "react";
import {useLocation} from "react-router-dom";

import Profile_button_creating_post from "./profile/profile_button_creating_post/Profile_button_creating_post";

import main_aside_css from "./main_profile_css/Main_profile_aside.module.css";

const Main_profile_Aside = () => {

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
                {location.pathname === '/profile' ? <Profile_button_creating_post/> : null}
            </section>
        </aside>
    )
}

export default Main_profile_Aside