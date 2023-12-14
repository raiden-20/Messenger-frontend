import React from 'react';
import {useLocation} from "react-router-dom";

import MainSettingsAside from "./settings/MainSettingsAside";

import main_css from "./MainCenterComponents.module.css";
import MainProfileContainer from "./profileCenter/MainProfileContainer";
import {PROFILE_OTHER_USER, PROFILE_USER, PROFILE_USER_SETTINGS} from "../../paths/profilePath";
import ProfileSettingContainer from "./profile/profile/profile_setting/ProfileSettingContainer";
import {SETTINGS} from "../../paths/navigationPath";
import MainSettingContainer from "./settings/MainSettingContainer";
import MainProfileAsideContainer from "./profileAside/MainProfileAsideContainer";

const MainCenterComponents = () => {
    const location = useLocation()
    return (
        <section className={main_css.main}>
            {location.pathname === PROFILE_USER ? <MainProfileContainer/> :
            location.pathname === PROFILE_OTHER_USER ? <MainProfileContainer/> :
                    location.pathname === SETTINGS ? <MainSettingContainer/> : null}

            {location.pathname === PROFILE_USER ? <MainProfileAsideContainer/> :
            location.pathname === PROFILE_OTHER_USER ? <MainProfileAsideContainer/> :
                location.pathname === SETTINGS ? <MainSettingsAside/> : null}

        </section>
    )
}

export default MainCenterComponents