import React from "react";
import {useLocation} from "react-router-dom";

import FriendsAside from "./components/FriendsAside";
import SearchAside from "./components/SearchAside";

const MainFriendsAndSearchingAside = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/friends' ? <FriendsAside/> :
                location.pathname === '/search' ? <SearchAside/> : null}
        </div>
    )
}

export default MainFriendsAndSearchingAside