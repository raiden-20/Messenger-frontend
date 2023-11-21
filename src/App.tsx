import React from 'react';
import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Profile from "./components/blog_pages/center_components/profile/profile/Profile";
import Search from "./components/blog_pages/center_components/search/Search";
import Settings from "./components/blog_pages/center_components/settings/Settings";
import Profile_other_user from "./components/blog_pages/center_components/profile/profile_other_user/Profile_other_user";
import Dialogs from "./components/blog_pages/center_components/dialogs/Dialogs";
import Friends from "./components/blog_pages/center_components/other_users/Friends";
import Main_registration from "./components/registration/Main_registration";

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
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/profile_other_user' element={<Profile_other_user/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        <Route path='/search' element={<Search/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </Router>
            </section>

        </div>
    );
}

export default App;
