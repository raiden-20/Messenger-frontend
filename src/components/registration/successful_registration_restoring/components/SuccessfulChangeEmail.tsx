import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulEmail,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import axios from "axios";

class SuccessfulChangeEmail extends Component<PropsSuccessfulEmail, StateSuccessfulSmth>{ //todo обнуляются данные
    config = {
        headers: { Authorization: `Bearer ${this.props.token}` }
    };
    componentDidMount() {
        this.props.setToken(localStorage.getItem('token'))
        debugger
        axios.put('http://localhost:8000/auth/confirm/email', {
            "token": localStorage.getItem('token'),
            "email": this.props.email
        }, this.config)
            .then(response => {
                debugger
                this.props.setMessage(response.data.message)
                switch (response.status) {
                    case 200 : {
                        if (response.data === "Email confirmed") {
                            this.props.setMessage('Пароль был успешно изменен!')
                            this.props.setEmail(this.props.newEmail)
                            this.props.setToken('')

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
                        }
                        break
                    }
                    default:
                }
            });
    }

    render() {
        return (
            <div className={success_reg_res_css.root}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default SuccessfulChangeEmail