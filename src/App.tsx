import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainRegistrationContainer from "./components/registration/MainRegistrationContainer";
import MainBlogPagesComponent from "./components/blog_pages/MainBlogPagesComponent";

import app from './App.module.css';
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL, SUCCESSFUL_SENT_MESSSAGE
} from "./paths/authPath";
import {PROFILE_OTHER_USER, PROFILE_USER} from "./paths/profilePath";
import {SETTINGS} from "./paths/navigationPath";
import {FRIENDS_USER, SEARCH, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "./paths/usersPath";
import {PROFILE_USER_PHOTO} from "./paths/photoPath";

const App = () => {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path={AUTHORIZATION} element={<MainRegistrationContainer />}/>
                        <Route path={REGISTRATION} element={<MainRegistrationContainer/>}/>
                        <Route path={REGISTRATION_FORGOT_PASSWORD} element={<MainRegistrationContainer />}/>
                        <Route path={REGISTRATION_RESTORE_ACCOUNT} element={<MainRegistrationContainer/>}/>
                        <Route path={SUCCESSFUL_ACTIVATION} element={<MainRegistrationContainer/>}/>
                        <Route path={SUCCESSFUL_CHANGE_EMAIL} element={<MainRegistrationContainer/>}/>
                        <Route path={SUCCESSFUL_SENT_MESSSAGE} element={<MainRegistrationContainer/>}/>
                        <Route path='/dialogs' element={<MainBlogPagesComponent/>}/>
                        <Route path={PROFILE_USER} element={<MainBlogPagesComponent/>}/>
                        <Route path={PROFILE_USER_PHOTO} element={<MainBlogPagesComponent/>}/>
                        <Route path={PROFILE_OTHER_USER} element={<MainBlogPagesComponent/>}/>
                        <Route path={FRIENDS_USER} element={<MainBlogPagesComponent/>}/>
                        <Route path={SUBSCRIBERS_USER} element={<MainBlogPagesComponent/>}/>
                        <Route path={SUBSCRIPTIONS_USER} element={<MainBlogPagesComponent/>}/>
                        <Route path={SEARCH} element={<MainBlogPagesComponent/>}/>
                        <Route path={SETTINGS} element={<MainBlogPagesComponent/>}/>
                    </Routes>
                </Router>
            </section>

        </div>
    );
}

export default App;
