import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./components/registration/Registration";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import Friends from "./components/other_users/Friends";
import Search from "./components/search/Search";
import Settings from "./components/settings/Settings";

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
