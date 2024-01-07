import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import {
    PropsSuccessfulEmail,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
import {Auth} from "../../../../axios/auth/AuthAxios";

class SuccessfulChangeEmailClass extends Component<PropsSuccessfulEmail, StateSuccessfulSmth> {
    componentDidMount() {
        Auth.SuccessfulChangeEmail({
            newEmail: this.props.newEmail
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setMessage('Пароль был успешно изменен!')
                    this.props.setEmail( this.props.newEmail)
                    localStorage.setItem('token', response[1])
                    break
                }
                case 400 : {
                    this.props.setMessage('Такого пользователя не существует')
                    break
                }
                case 401 : {
                    this.props.setMessage('Плохой токен')
                    break
                }
            }
        })
    }

    render() { //todo вынести
        return (
            <div className={success_reg_res_css.root}>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default SuccessfulChangeEmailClass