import React, {Component} from "react";
import reg from './RegistrationOrAutorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import {NavLink} from "react-router-dom";
import {PropsAuthAuth, StateAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {PROFILE} from "../../paths/profilePath";
import {
    ADD_NAME_SURNAME,
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT
} from "../../paths/authPath";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
class RegistrationOrAuthorisation extends Component<PropsAuthAuth, StateAuthAuth> {


    data = ''
    path = AUTHORIZATION

    setInputEmailOrNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputEmailOrNickname(event.target.value)
        if (!event.target.value.split('').includes('@')) {
            this.props.setInputNickname(event.target.value)
            this.props.setInputEmail('')
        } else {
            this.props.setInputEmail(event.target.value)
            this.props.setInputNickname('')
        }
    }
    setInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputPassword(event.target.value)
    }

    authorise = () => {

        if (this.props.input_emailOrNickname != null && this.props.input_password != null) {
            axios.post('http://localhost:8000/auth/login', {
                email: this.props.input_email,
                nickname: this.props.input_nickname,
                password: this.props.input_password,
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
                this.props.setMessage(error.message)
                switch (error.response.status) {
                    case 400 : {
                        if (error.response.data === "User doesn't exist") {
                            this.props.setMessage('Такого пользователя не существует')
                        }else if (error.response.data === 'Password mismatch') {
                            this.props.setMessage('Неверный пароль')
                        }
                        this.path = AUTHORIZATION
                        break
                    }
                    default:
                }
            })
        }
        this.props.setInputEmail('')
        this.props.setInputNickname('')
        this.props.setInputEmailOrNickname('')
        this.props.setInputPassword('')
        // else
    }

    render() {
        return (
            <section className={reg.functional}>
                <form>
                    <section className={reg.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={this.setInputEmailOrNickname}
                               value={this.props.input_emailOrNickname} placeholder={'Электронный адрес или никнейм'} required/>
                        <input type={'text'} className={options_reg.input} onChange={this.setInputPassword}
                               value={this.props.input_password} placeholder={'Пароль'} required/>
                    </section>
                    <NavLink to={this.path}>
                        <button className={options_reg.main_page_button} onClick={this.authorise}
                                type={'submit'}>Войти
                        </button>
                    </NavLink>
                </form>
                <section className={reg.other_buttons}>
                    <NavLink to={REGISTRATION_FORGOT_PASSWORD}>
                        <button className={reg.forgot_button}>Забыли пароль?</button>
                    </NavLink>
                    <section className={reg.or}>
                        <hr></hr>
                        или
                        <hr></hr>
                    </section>
                    <NavLink to={REGISTRATION} className={reg.a}>
                        <button type={'submit'} className={reg.registration_button}>Зарегистрироваться</button>
                    </NavLink>
                </section>
                <section>
                    {this.props.message}
                </section>
            </section>
        );
    }
}

export default RegistrationOrAuthorisation