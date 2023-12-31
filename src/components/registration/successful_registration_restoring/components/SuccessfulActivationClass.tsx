import React, {Component} from 'react';
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";
import {ActivationAccountAxios} from "../../../axios/auth/AuthAxios";
class SuccessfulActivationClass extends Component<PropsSuccessfulActivation, StateSuccessfulSmth>{
    componentDidMount() {
        ActivationAccountAxios( {
            setMessage: this.props.setMessage
        })
    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              setMessage={this.props.setMessage}/>
    }


}

export default SuccessfulActivationClass