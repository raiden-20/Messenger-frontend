import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainRegistrationContainer from "./components/MainRegistrationContainer";
import MainBlogPages from "./components/blog_pages/MainBlogPages";

import app from './App.module.css';

const App = () => {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path='/*' element={<MainRegistrationContainer/>}/>
                        <Route path='/registration' element={<MainRegistrationContainer/>}/>
                        <Route path='/registration_forgot_password' element={<MainRegistrationContainer/>}/>
                        <Route path='/registration_new_password' element={<MainRegistrationContainer/>}/>
                        <Route path='/registration_restore_account' element={<MainRegistrationContainer/>}/>
                        <Route path='/successful_registration' element={<MainRegistrationContainer/>}/>
                        <Route path='/successful_restoring' element={<MainRegistrationContainer/>}/>
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
