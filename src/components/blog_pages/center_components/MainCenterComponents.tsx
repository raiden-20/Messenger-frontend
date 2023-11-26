import React from 'react';
import {useLocation} from "react-router-dom";

import MainSetting from "./settings/MainSetting";
import MainProfile from "./profile/MainProfile";
import MainProfileAside from "./profile/MainProfileAside";
import MainSettingsAside from "./settings/MainSettingsAside";
import MainFriendsAndSearchingAside from "./friends_and_searching/MainFriendsAndSearchingAside";
import MainFriendsAndSearching from "./friends_and_searching/MainFriendsAndSearching";

import main_css from "./MainCenterComponents.module.css";

const MainCenterComponents = () => {
    const location = useLocation()
    return (
        <section className={main_css.main}>
            {location.pathname === '/profile' ? <MainProfile/> :
                location.pathname === '/profile/:id' ? <MainProfile/> :
                    location.pathname === '/friends' ? <MainFriendsAndSearching/> :
                        location.pathname === '/search' ? <MainFriendsAndSearching/> :
                            location.pathname === '/settings' ? <MainSetting/> : null}

            {location.pathname === '/profile' ? <MainProfileAside/> :
                location.pathname === '/profile/:id' ? <MainProfileAside/> :
                    location.pathname === '/friends' ? <MainFriendsAndSearchingAside/> :
                        location.pathname === '/search' ? <MainFriendsAndSearchingAside/> :
                            location.pathname === '/settings' ? <MainSettingsAside/> : null}

        </section>
    )
}

export default MainCenterComponents