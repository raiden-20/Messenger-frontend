import {
    PropsChangeEmail, StateChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingDefoltSeeEmail";
import React, {Component} from "react";
import {AuthDataAxios} from "../../../../../../../axios/auth/AuthAxios";
import DefaultSeeEmailComponent from "./DefaultSeeEmailComponent";

class DefaultSeeEmailClass extends Component<PropsChangeEmail, StateChangeEmail>{

    componentDidMount() {
        let auth = AuthDataAxios({
            id: localStorage.getItem('id') as string
        })
        auth.then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
                    this.props.setEmail(response[1].email)
                }
            }
        })
    }

    render() {
        return <DefaultSeeEmailComponent buttonChangeEmail={this.props.buttonChangeEmail}
                                         buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                         buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                         email={this.props.email}
                                         setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}
                                         setEmail={this.props.setEmail}/>
    }
}

export default DefaultSeeEmailClass