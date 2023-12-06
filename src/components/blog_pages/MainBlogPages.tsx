import React from 'react';
import {useLocation} from "react-router-dom";

import Dialogs from "./dialogs/Dialogs";
import MainCenterComponents from "./center_components/MainCenterComponents";

import main_css from './MainBlogsPages.module.css'
import NavigationContainer from "./navigation/NavigationContainer";
import {PROFILE_USER} from "../paths/profilePath";

const MainBlogPages = () => {

    const location = useLocation()

    return (
        <div className={main_css.div}>
            <section className={main_css.page}>
                <NavigationContainer/>
                {location.pathname === '/dialogs' ? <Dialogs/> :
                // location.pathname === '/profile' ||
                location.pathname === PROFILE_USER ||
                location.pathname === '/friends' ||
                location.pathname === '/search' ||
                location.pathname === '/settings_account' ? <MainCenterComponents/> : null}
            </section>
        </div>
    )
}

export default MainBlogPages