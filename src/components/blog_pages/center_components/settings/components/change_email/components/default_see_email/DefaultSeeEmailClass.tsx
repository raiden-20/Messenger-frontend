import {
    PropsChangeEmailClass, StateChangeEmail
} from "../../../../../../../../redux/interfaces/settings/settings_for_components/email/SettingDefoltSeeEmail";
import React, {Component} from "react";
import {Auth} from "../../../../../../../../axios/auth/AuthAxios";
import DefaultSeeEmailComponent from "./DefaultSeeEmailComponent";

class DefaultSeeEmailClass extends Component<PropsChangeEmailClass, StateChangeEmail>{

    componentDidMount() {
        this.props.AuthGetData(localStorage.getItem('id') as string)
    }

    render() {
        return <DefaultSeeEmailComponent buttonChangePasswordFirstStep={this.props.buttonChangePasswordFirstStep}
                                         buttonChangePasswordSecondStep={this.props.buttonChangePasswordSecondStep}
                                         email={this.props.email}
                                         setButtonChangeEmailPressed={this.props.setButtonChangeEmailPressed}/>
    }
}

export default DefaultSeeEmailClass