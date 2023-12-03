import React, {Component} from 'react';
import success_reg_res_css from '../SuccessfulRegistrationRestoring.module.css'
import axios from "axios";
import {
    PropsSuccessfulActivation,
    StateSuccessfulSmth
} from "../../../../redux/interfaces/auth/authSuccessfulActivation";
class SuccessfulActivation extends Component<PropsSuccessfulActivation, StateSuccessfulSmth>{
    componentDidMount() {
        axios.put('http://localhost:8000/auth/active/account', {
            "id": "00736719-3483-4139-a572-28f03f05c3b7"
        })
            .then(response => {
                debugger
                this.props.setMessage(response.data.message)
                switch (response.status) {
                    case 200 : {
                        if (response.data === "Account activated") {
                            this.props.setMessage('Ваш аккаунт был успешно активирован!')
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

    render() {
        return (
            <div className={success_reg_res_css.root}>
                <p>{this.props.message}</p>
            </div>
        )
    }


}

export default SuccessfulActivation