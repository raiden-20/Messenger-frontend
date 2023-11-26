import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainRegistrationContainer from "./components/MainRegistrationContainer";
import MainBlogPages from "./components/blog_pages/MainBlogPages";

import app from './App.module.css';
import {
    ADD_NAME_SURNAME,
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT, SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL
} from "./components/paths/authPath";
import RegistrationAddNameSurname
    from "./components/registration/registration_set_name_surname/RegistrationAddNameSurname";

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
                        <Route path={ADD_NAME_SURNAME} element={<MainRegistrationContainer/>}/>
                        <Route path='/dialogs' element={<MainBlogPages/>}/>
                        <Route path='/profile' element={<MainBlogPages/>}/>
                        <Route path='/profile/:id' element={<MainBlogPages/>}/>
                        <Route path='/friends' element={<MainBlogPages/>}/>
                        <Route path='/search' element={<MainBlogPages/>}/>
                        <Route path='/settings' element={<MainBlogPages/>}/>
                    </Routes>
                </Router>
            </section>

        </div>
    );
}

export default App;
