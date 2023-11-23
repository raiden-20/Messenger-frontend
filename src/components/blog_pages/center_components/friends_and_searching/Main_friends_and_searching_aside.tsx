import React from "react";
import {useLocation} from "react-router-dom";

import Friends_aside from "./components/Friends_aside";
import Search_aside from "./components/Search_aside";

const Main_friends_and_searching_aside = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/friends' ? <Friends_aside/> :
                location.pathname === '/search' ? <Search_aside/> : null}
        </div>
    )
}

export default Main_friends_and_searching_aside