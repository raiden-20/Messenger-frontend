import React from 'react';
import {useLocation} from "react-router-dom";

import MainSetting from "./settings/MainSetting";
import MainProfileAside from "./profile/MainProfileAside";
import MainSettingsAside from "./settings/MainSettingsAside";
import MainFriendsAndSearchingAside from "./friends_and_searching/MainFriendsAndSearchingAside";

import main_css from "./MainCenterComponents.module.css";
import MainFriendsAndSearchingContainer from "./friends_and_searching/MainFriendsAndSearchingContainer";
import MainProfileContainer from "./profile/MainProfileContainer";

const MainCenterComponents = () => {
    const location = useLocation()
    return (
        <section className={main_css.main}>
            {location.pathname === '/profile' ? <MainProfileContainer/> :
                location.pathname === '/profile/:id' ? <MainProfileContainer/> :
                    location.pathname === '/friends' ? <MainFriendsAndSearchingContainer/> :
                        location.pathname === '/search' ? <MainFriendsAndSearchingContainer /> :
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