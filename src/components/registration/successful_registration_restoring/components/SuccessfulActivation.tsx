import React, {Component} from 'react';
import axios from "axios";
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";
class SuccessfulActivation extends Component<PropsSuccessfulActivation, StateSuccessfulSmth>{
    componentDidMount() {
        // todo this.props.seId(localStorage.getItem('id'))
        this.props.setId('f671bd03-df5d-439e-8c4f-633fbf1b5456')
        axios.put('http://localhost:8000/auth/active/account', {
            "id": 'f671bd03-df5d-439e-8c4f-633fbf1b5456'
        })
            .then(response => {
                debugger
                this.props.setMessage(response.data.message)
                switch (response.status) {
                    case 200 : {
                        if (response.data === "Account activated") {
                            this.props.setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт')
                        }
                        break
                    }
                    default:
                }
            })
            .catch(error => {
                debugger
                console.dir(error)
                this.props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            this.props.setMessage('Такого пользователя не существует')
                        }else if (error.response.data === 'Account has already been activated') {
                            this.props.setMessage('Аккаунт уже активирован')
                        }
                        break
                    }
                    default:
                }
            });
    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              setMessage={this.props.setMessage}/>
    }


}

export default SuccessfulActivation