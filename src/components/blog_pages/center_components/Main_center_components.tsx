import React from 'react';
import {useLocation} from "react-router-dom";

import Main_setting from "./settings/Main_setting";
import Main_profile from "./profile/Main_profile";
import Main_profile_Aside from "./profile/Main_profile_Aside";
import Main_settings_aside from "./settings/Main_settings_aside";
import Main_friends_and_searching_aside from "./friends_and_searching/Main_friends_and_searching_aside";
import Main_friends_and_searching from "./friends_and_searching/Main_friends_and_searching";

import main_css from "./Main_center_components.module.css";

const Main_center_components = () => {
    const location = useLocation()
    return (
        <section className={main_css.main}>
            {location.pathname === '/profile' ? <Main_profile/> :
                location.pathname === '/profile/:id' ? <Main_profile/> :
                    location.pathname === '/friends' ? <Main_friends_and_searching/> :
                        location.pathname === '/search' ? <Main_friends_and_searching/> :
                            location.pathname === '/settings' ? <Main_setting/> : null}

            {location.pathname === '/profile' ? <Main_profile_Aside/> :
                location.pathname === '/profile/:id' ? <Main_profile_Aside/> :
                    location.pathname === '/friends' ? <Main_friends_and_searching_aside/> :
                        location.pathname === '/search' ? <Main_friends_and_searching_aside/> :
                            location.pathname === '/settings' ? <Main_settings_aside/> : null}

        </section>
    )
}

export default Main_center_components