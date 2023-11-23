import React from 'react';
import {useLocation} from "react-router-dom";

import Profile_other_user_settings from "./profile_other_user/Profile_other_user_settings";
import Profile_user_settings from "./profile/Profile_user_settings";
import Post from "./post/Post";

import main_css from "./main_profile_css/Main_profile.module.css";
import main_elements_css from "./main_profile_css/Main_profile_elements.module.css";

import cat from "../../../../assets/images/cat_registration.jpg";



const Main_profile = () => {

    const location = useLocation()

    return(
        <section className={main_css.info}>
            <section className={main_elements_css.bg_photo}>
            </section>
            <main>
                <section className={main_css.bio}>
                    <section className={main_css.bio_row}>
                        <figure className={main_elements_css.figure}>
                            <img src={cat} alt={'this is cat'}/>
                        </figure>
                        <section className={main_css.name_and_status}>
                            <div className={main_elements_css.name}>Имя Фамилия</div>
                            <div className={main_elements_css.userName}>@name</div>
                        </section>
                        {location.pathname === '/profile' ? <Profile_user_settings/> :
                            location.pathname === '/profile/:id' ? <Profile_other_user_settings/> : null}
                    </section>
                    <section>
                        <p>Целуйте мониторы!!!!
                            Я в сети</p>
                    </section>
                </section>
                <section className={main_css.posts}>
                    <Post/>
                </section>
            </main>
        </section>
    )
}

export default Main_profile