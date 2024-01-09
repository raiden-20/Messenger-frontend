import React, {Component} from 'react';
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";

class SuccessfulActivationClass extends Component<PropsSuccessfulActivation, StateSuccessfulSmth> {
    componentDidMount() {
        this.props.AccountActivationMessage()
    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              toAuthorize={this.props.toAuthorize}/>
    }


}

export default SuccessfulActivationClass