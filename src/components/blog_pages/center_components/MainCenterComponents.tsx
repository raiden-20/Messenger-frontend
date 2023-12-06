import React from 'react';
import {useLocation} from "react-router-dom";

import MainProfileAside from "./profile/MainProfileAside";
import MainSettingsAside from "./settings/MainSettingsAside";
import MainFriendsAndSearchingAside from "./friends_and_searching/MainFriendsAndSearchingAside";

import main_css from "./MainCenterComponents.module.css";
import MainFriendsAndSearchingContainer from "./friends_and_searching/MainFriendsAndSearchingContainer";
import MainProfileContainer from "./profile/MainProfileContainer";
import MainSettingContainer from "./settings/MainSettingContainer";
import {PROFILE_USER} from "../../paths/profilePath";

const MainCenterComponents = () => {
    const location = useLocation()
    return (
        <section className={main_css.main}>
            {/*{location.pathname === '/profile' ? <MainProfileContainer/> :*/}
            {location.pathname === PROFILE_USER ? <MainProfileContainer/> :
                    location.pathname === '/friends' ? <MainFriendsAndSearchingContainer/> :
                        location.pathname === '/search' ? <MainFriendsAndSearchingContainer /> :
                            location.pathname === '/settings_account' ? <MainSettingContainer/> : null}

            {
                location.pathname === PROFILE_USER ? <MainProfileAside/> :
                    location.pathname === '/friends' ? <MainFriendsAndSearchingAside/> :
                        location.pathname === '/search' ? <MainFriendsAndSearchingAside/> :
                            location.pathname === '/settings_account' ? <MainSettingsAside/> : null}

        </section>
    )
}

export default MainCenterComponents