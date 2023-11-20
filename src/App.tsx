import React from 'react';
import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration_or_autorisation from "./components/registration/Registration_or_autorisation";
import Registration from "./components/registration/registration/Registration";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/profile/Profile";
import Friends from "./components/other_users/Friends";
import Search from "./components/search/Search";
import Settings from "./components/settings/Settings";
import Registration_forgot_password
    from "./components/registration/registration_forgot_password/Registration_forgot_password";
import Registration_new_password
    from "./components/registration/registration_new_password/Registration_new_password";
import Profile_other_user from "./components/profile/profile_other_user/Profile_other_user";

function App() {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path='/*' element={<Registration_or_autorisation/>}/>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/registration_forgot_password' element={<Registration_forgot_password/>}/>
                        <Route path='/registration_new_password' element={<Registration_new_password/>}/>
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
