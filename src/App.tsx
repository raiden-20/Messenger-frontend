import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainRegistrationContainer from "./components/registration/MainRegistrationContainer";
import MainBlogPages from "./components/blog_pages/MainBlogPages";

import app from './App.module.css';
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL
} from "./components/paths/authPath";
import {PROFILE_OTHER_USER, PROFILE_USER} from "./components/paths/profilePath";
import {SETTINGS} from "./components/paths/navigationPath";
import {FRIENDS_USER, SEARCH, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "./components/paths/usersPath";
import {PROFILE_USER_PHOTO} from "./components/paths/photoPath";

const App = () => {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path={AUTHORIZATION} element={<MainRegistrationContainer/>}/>
                        <Route path={REGISTRATION} element={<MainRegistrationContainer/>}/>
                        <Route path={REGISTRATION_FORGOT_PASSWORD} element={<MainRegistrationContainer/>}/>
                        <Route path={REGISTRATION_RESTORE_ACCOUNT} element={<MainRegistrationContainer/>}/>
                        <Route path={SUCCESSFUL_ACTIVATION} element={<MainRegistrationContainer/>}/>
                        <Route path={SUCCESSFUL_CHANGE_EMAIL} element={<MainRegistrationContainer/>}/>
                        <Route path='/dialogs' element={<MainBlogPages/>}/>
                        <Route path={PROFILE_USER} element={<MainBlogPages/>}/>
                        <Route path={PROFILE_USER_PHOTO} element={<MainBlogPages/>}/>
                        <Route path={PROFILE_OTHER_USER} element={<MainBlogPages/>}/>
                        <Route path={FRIENDS_USER} element={<MainBlogPages/>}/>
                        <Route path={SUBSCRIBERS_USER} element={<MainBlogPages/>}/>
                        <Route path={SUBSCRIPTIONS_USER} element={<MainBlogPages/>}/>
                        <Route path={SEARCH} element={<MainBlogPages/>}/>
                        <Route path={SETTINGS} element={<MainBlogPages/>}/>
                    </Routes>
                </Router>
            </section>

        </div>
    );
}

export default App;
