import React from 'react';
import {useLocation} from "react-router-dom";

import Dialogs from "./dialogs/Dialogs";
import MainCenterComponents from "./center_components/MainCenterComponents";

import main_css from './MainBlogsPages.module.css'
import NavigationContainer from "./navigation/NavigationContainer";
import {PROFILE_OTHER_USER, PROFILE_USER, PROFILE_USER_SETTINGS} from "../paths/profilePath";
import {SETTINGS} from "../paths/navigationPath";
import {FRIENDS_USER, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "../paths/usersPath";
import MainUsersContainer from "./friends/MainUsersContainer";

const MainBlogPages = () => {

    const location = useLocation()

    return (
        <div className={main_css.div}>
            <section className={main_css.page}>
                <NavigationContainer/>
                {location.pathname === '/dialogs' ? <Dialogs/> :
                    (location.pathname === FRIENDS_USER) ||
                    (location.pathname === SUBSCRIBERS_USER) ||
                    (location.pathname === SUBSCRIPTIONS_USER) ? <MainUsersContainer/> :
                location.pathname === PROFILE_USER ||
                location.pathname === PROFILE_OTHER_USER ||
                location.pathname === SETTINGS ? <MainCenterComponents/> : null}
            </section>
        </div>
    )
}

export default MainBlogPages