import React, {Component} from 'react';
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";
import {Auth} from "../../../../axios/auth/AuthAxios";

class SuccessfulActivationClass extends Component<PropsSuccessfulActivation, StateSuccessfulSmth> {
    componentDidMount() {
        Auth.ActivationAccountAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        this.props.setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт')
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            this.props.setMessage('Такого пользователя не существует')
                        } else if (response[1] === 'Account has already been activated') {
                            this.props.setMessage('Аккаунт уже активирован')
                        }
                        break
                    }
                    default:
                }
            })
    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              setMessage={this.props.setMessage}/>
    }


}

export default SuccessfulActivationClass