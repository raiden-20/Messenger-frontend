import React from 'react';
import {useLocation} from "react-router-dom";

import Navigation from './navigation/Navigation';
import Dialogs from "./dialogs/Dialogs";
import Main_center_components from "./center_components/Main_center_components";

import main_css from './Main_blogs_pages.module.css'

const Main_blog_pages = () => {

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
                location.pathname === '/settings' ? <Main_center_components/> : null}
            </section>
        </div>
    )
}

export default Main_blog_pages