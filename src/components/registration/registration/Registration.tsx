import React, {Component} from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import {PropsAuthReg, StateAuthReg} from "../../../redux/interfaces/auth/authRegistration";
import {ADD_NAME_SURNAME, AUTHORIZATION, REGISTRATION} from "../../paths/authPath";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {PROFILE} from "../../paths/profilePath";

class Registration extends Component<PropsAuthReg, StateAuthReg> {

    path = REGISTRATION

    setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.input_email != null) {
            if (!this.props.input_email.split('').includes('@')) {
                // todo обводить красным контуром
            }
        }
        this.props.setInputEmail(event.target.value)

    }
    setInputNickname = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputNickname(event.target.value)
    }
    setInputPassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputPassword(event.target.value)
    }
    setInputConfirmPassword = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputConfirmPassword(event.target.value)
    }

    authentication = () => {
        if (this.props.input_email != null && this.props.input_nickname != null &&
            this.props.input_password != null && this.props.input_confirmPassword != null) {
            if (this.props.input_password === this.props.input_confirmPassword) {
                axios.post('http://localhost:8000/auth/registration', {
                    email: this.props.input_email,
                    nickname: this.props.input_nickname,
                    password: this.props.input_password,
                    confirmPassword: this.props.input_confirmPassword
                }).then(response => {
                    switch (response.data.code) {
                        case 200 : {
                            this.props.setEmail(this.props.input_email)
                            this.props.setNickname(this.props.input_nickname)
                            this.props.setPassword(this.props.input_password)

                            this.path = ADD_NAME_SURNAME
                            break
                        }
                        default:
                    }
                    this.props.setInputEmail(null)
                    this.props.setInputPassword(null)
                }).catch(error => {
                    console.dir(error)
                    debugger
                    this.props.setMessage(error.message)
                    switch (error.response.status) {
                        case 200 : {
                            this.props.setEmail(this.props.input_email)
                            this.props.setNickname(this.props.input_nickname)
                            this.props.setPassword(this.props.input_password)

                            this.path = ADD_NAME_SURNAME
                            break
                        }
                        case 400 : {
                            this.props.setMessage('Пароли не соответствуют')
                            this.path = AUTHORIZATION
                            break
                        }
                        case 409 : {
                            if (error.response.data === "This email is already in use") {
                                this.props.setMessage('Данный пароль уже используется')
                            }else if (error.response.data === 'This nickname is already in use') {
                                this.props.setMessage('Имя пользователя уже занято')
                            }
                            this.path = REGISTRATION
                            break
                        }
                        default:
                    }
                    this.props.setInputEmail(null)
                    this.props.setInputPassword(null)
                })
            }
            this.props.setInputEmail(null)
            this.props.setInputNickname(null)
            this.props.setInputPassword(null)
            this.props.setInputConfirmPassword(null)
            //else
        }
    }
    render() {
        return (
            <section>
                <section className={reg_curr.root}>
                    <form className={reg_curr.form}>
                        <section className={reg_curr.inputs}>
                            <input type={'text'} className={options_reg.input} onChange={this.setInputNickname}
                                   value={this.props.input_nickname}  placeholder={'Никнейм'}/>
                            <input type={'text'} className={options_reg.input} onChange={this.setInputEmail}
                                   value={this.props.input_email} placeholder={'Электронный адрес'}/>
                            <input type={'text'} className={options_reg.input} onChange={this.setInputPassword}
                                   value={this.props.input_password} placeholder={'Пароль'}/>
                            <input type={'text'} className={options_reg.input} onChange={this.setInputConfirmPassword}
                                   value={this.props.input_confirmPassword} placeholder={'Подтвердите пароль'}/>
                        </section>
                        <NavLink to={this.path} type={'submit'} className={options_reg.main_page_button + ' ' + reg_curr.navlink} onClick={this.authentication} >
                            Зарегистрироваться
                        </NavLink>
                    </form>
                </section>
                <section>
                    {this.props.message}
                </section>
            </section>
        )
    }
}

export default Registration