import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Main_registration from "./components/registration/Main_registration";
import Main_blog_pages from "./components/blog_pages/Main_blog_pages";

import app from './App.module.css';

function App() {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path='/*' element={<Main_registration/>}/>
                        <Route path='/registration' element={<Main_registration/>}/>
                        <Route path='/registration_forgot_password' element={<Main_registration/>}/>
                        <Route path='/registration_new_password' element={<Main_registration/>}/>
                        <Route path='/registration_restore_account' element={<Main_registration/>}/>
                        <Route path='/successful_registration' element={<Main_registration/>}/>
                        <Route path='/successful_restoring' element={<Main_registration/>}/>
                        <Route path='/dialogs' element={<Main_blog_pages/>}/>
                        <Route path='/profile' element={<Main_blog_pages/>}/>
                        <Route path='/profile/:id' element={<Main_blog_pages/>}/>
                        <Route path='/friends' element={<Main_blog_pages/>}/>
                        <Route path='/search' element={<Main_blog_pages/>}/>
                        <Route path='/settings' element={<Main_blog_pages/>}/>
                    </Routes>
                </Router>
            </section>

        </div>
    );
}

export default App;
