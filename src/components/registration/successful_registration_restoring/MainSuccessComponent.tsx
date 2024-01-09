import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import SuccessfulActivationClass from "./components/SuccessfulActivationClass";
import SuccessfulChangeEmailClass from "./components/SuccessfulChangeEmailClass";
import {SuccessClass} from "../../../redux/interfaces/auth/authSuccessfulActivation";
import {
    AUTHORIZATION,
    SUCCESSFUL_ACTIVATION,
    SUCCESSFUL_CHANGE_EMAIL,
    SUCCESSFUL_SENT_MESSSAGE
} from "../../../paths/authPath";
import SuccessfulSentMessageComponent from "./components/SuccessfulSentMessageComponent";

const MainSuccessComponent = (props : SuccessClass) => {
    const navigate = useNavigate()
    const location = useLocation()

    const toAuthorize = () => {
        navigate(AUTHORIZATION)
        props.setMessage('')
    }

    return (
        <div>
            <main>
                {location.pathname === SUCCESSFUL_ACTIVATION ? <SuccessfulActivationClass message={props.message}
                                                                                          toAuthorize={toAuthorize}
                                                                                          AccountActivationMessage={props.AccountActivationMessage}/> :
                location.pathname === SUCCESSFUL_SENT_MESSSAGE ? <SuccessfulSentMessageComponent message={props.message}
                                                                                                 toAuthorize={toAuthorize}/> :
                location.pathname === SUCCESSFUL_CHANGE_EMAIL ? <SuccessfulChangeEmailClass message={props.message}
                                                                                            newEmail={props.newEmail}
                                                                                            email={props.email}
                                                                                            ChangeEmailMessage={props.ChangeEmailMessage}/> : null}
            </main>
        </div>
    )
}

export default MainSuccessComponent