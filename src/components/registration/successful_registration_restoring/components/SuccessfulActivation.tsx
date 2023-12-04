import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import axios from "axios";
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import SuccessfulActivationComponent from "./SuccessfulActivationComponent";
class SuccessfulActivation extends Component<PropsSuccessfulActivation, StateSuccessfulSmth>{
    componentDidMount() {
        axios.put('http://localhost:8000/auth/active/account', {
            "id": "b85e636e-c9c6-4531-8011-d58eecc54854"
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

    toProfile = () => {

    }

    render() {
        return <SuccessfulActivationComponent message={this.props.message}
                                              token={this.props.token}
                                              setMessage={this.props.setMessage}/>
    }


}

export default SuccessfulActivation