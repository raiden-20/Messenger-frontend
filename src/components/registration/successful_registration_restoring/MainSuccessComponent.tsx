import React from 'react';
import {useLocation} from "react-router-dom";
import SuccessfulActivationClass from "./components/SuccessfulActivationClass";
import SuccessfulChangeEmailClass from "./components/SuccessfulChangeEmailClass";
import {
    PropsSuccessfulActivation,
    PropsSuccessfulEmail
} from "../../../redux/interfaces/auth/authSuccessfulActivation";
import {SUCCESSFUL_ACTIVATION, SUCCESSFUL_CHANGE_EMAIL, SUCCESSFUL_SENT_MESSSAGE} from "../../paths/authPath";
import SuccessfulSentMessageComponent from "./components/SuccessfulSentMessageComponent";

const MainSuccessComponent = (props : PropsSuccessfulEmail & PropsSuccessfulActivation) => {

    const location = useLocation()

    return (
        <div>
            <main>
                {location.pathname === SUCCESSFUL_ACTIVATION ? <SuccessfulActivationClass message={props.message}
                                                                                          setMessage={props.setMessage}/> :
                location.pathname === SUCCESSFUL_SENT_MESSSAGE ? <SuccessfulSentMessageComponent message={props.message}
                                                                                                 setMessage={props.setMessage}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <SuccessfulChangeEmailClass message={props.message}
                                                                                            setMessage={props.setMessage}
                                                                                            setEmail={props.setEmail}
                                                                                            newEmail={props.newEmail}
                                                                                            email={props.email}/> : null}
            </main>
        </div>
    )
}

export default MainSuccessComponent