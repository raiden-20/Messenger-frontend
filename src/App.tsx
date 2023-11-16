import React from 'react';
import app from './App.module.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./components/registration/Registration";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Friends from "./components/other_users/Friends";
import Search from "./components/search/Search";
import Settings from "./components/settings/Settings";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <div className={app.App}>
            <section className={app.page}>
                <Router>
                    <Routes>
                        <Route path='/*' element={<Registration/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
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
