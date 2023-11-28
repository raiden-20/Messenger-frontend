import React from 'react';
import {useLocation} from "react-router-dom";

import Navigation from './navigation/Navigation';
import Dialogs from "./dialogs/Dialogs";
import MainCenterComponents from "./center_components/MainCenterComponents";

import main_css from './MainBlogsPages.module.css'

const MainBlogPages = () => {

    const location = useLocation()

    return (
        <div className={main_css.div}>
            <section className={main_css.page}>
                <Navigation/>
                {location.pathname === '/dialogs' ? <Dialogs/> :
                location.pathname === '/profile' ||
                location.pathname === '/profile/:id' ||
                location.pathname === '/friends' ||
                location.pathname === '/search' ||
                location.pathname === '/settings_account' ? <MainCenterComponents/> : null}
            </section>
        </div>
    )
}

export default MainBlogPages