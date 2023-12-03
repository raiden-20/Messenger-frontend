import React from 'react';
import {useLocation} from "react-router-dom";
import SuccessfulActivation from "./components/SuccessfulActivation";
import SuccessfulChangeEmail from "./components/SuccessfulChangeEmail";
import {
    PropsSuccessfulActivation,
    PropsSuccessfulEmail
} from "../../../redux/interfaces/auth/authSuccessfulActivation";

const MainSuccess = (props : PropsSuccessfulEmail & PropsSuccessfulActivation) => {

    const location = useLocation()

    return (
        <div>
            <main>
                {location.pathname === '/successful_activation' ? <SuccessfulActivation message={props.message}
                                                                                        setMessage={props.setMessage}
                                                                                        token={props.token}/> :
                location.pathname === '/successful_change_email' ? <SuccessfulChangeEmail message={props.message}
                                                                                          setMessage={props.setMessage}
                                                                                          setEmail={props.setEmail}
                                                                                          newEmail={props.newEmail}
                                                                                          token={props.token}/> : null}
            </main>
        </div>
    )
}

export default MainSuccess