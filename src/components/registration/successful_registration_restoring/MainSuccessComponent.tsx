import React from 'react';
import {useLocation} from "react-router-dom";
import SuccessfulActivationClass from "./components/SuccessfulActivationClass";
import SuccessfulChangeEmailClass from "./components/SuccessfulChangeEmailClass";
import {
    PropsSuccessfulActivation,
    PropsSuccessfulEmail
} from "../../../redux/interfaces/auth/authSuccessfulActivation";

const MainSuccessComponent = (props : PropsSuccessfulEmail & PropsSuccessfulActivation) => {

    const location = useLocation()

    return (
        <div>
            <main>
                {location.pathname === '/successful_activation' ? <SuccessfulActivationClass message={props.message}
                                                                                             setMessage={props.setMessage}
                                                                                             token={props.token}
                                                                                             id={props.id}
                                                                                             setId={props.setId}/> :
                location.pathname === '/successful_change_email' ? <SuccessfulChangeEmailClass message={props.message}
                                                                                               setMessage={props.setMessage}
                                                                                               setEmail={props.setEmail}
                                                                                               newEmail={props.newEmail}
                                                                                               token={props.token}
                                                                                               id={props.id}
                                                                                               setId={props.setId}
                                                                                               setToken={props.setToken}
                                                                                               email={props.email}/> : null}
            </main>
        </div>
    )
}

export default MainSuccessComponent