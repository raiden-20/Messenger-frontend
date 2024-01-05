import React, {Component} from 'react';
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";
import {ActivationAccountAxios} from "../../../axios/auth/AuthAxios";
class SuccessfulActivationClass extends Component<PropsSuccessfulActivation, StateSuccessfulSmth>{
    componentDidMount() {
        let activate = ActivationAccountAxios({
            setMessage: this.props.setMessage
        } )
        activate.then(response => {
            switch (response) {
                case 200: {
                    this.props.setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт')
                }
            }
        })
    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              setMessage={this.props.setMessage}/>
    }


}

export default SuccessfulActivationClass