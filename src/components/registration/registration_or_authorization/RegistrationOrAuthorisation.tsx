import React, {Component} from "react";
import reg from './RegistrationOrAutorisation.module.css'
import options_reg from '../css_options/Options.module.css'
import {NavLink} from "react-router-dom";
import {PropsAuthAuth, StateAuthAuth} from "../../../redux/interfaces/auth/authAuthorize";
import {PROFILE} from "../../paths/profilePath";
import {
    AUTHORIZATION,
    REGISTRATION,
    REGISTRATION_FORGOT_PASSWORD,
    REGISTRATION_RESTORE_ACCOUNT
} from "../../paths/authPath";


class RegistrationOrAuthorisation extends Component<PropsAuthAuth, StateAuthAuth> {

    path = AUTHORIZATION
    code = 0

    setInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputEmail(event.target.value)
        console.log(this.props.input_email)
    }
    setInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputPassword(event.target.value)
    }

    authorise = () => {
        if (this.props.input_email != null && this.props.input_password != null) {
            if (!this.props.input_email.split('').includes('@')) {
                this.props.setInputNickname(this.props.input_email)
            } else {
                this.props.setInputEmail(this.props.input_email)
            }
            // пост запрос
            this.code = 403
            switch (this.code) {
                case 200 : {
                    this.props.setEmail(this.props.input_email)
                    this.props.setNickname(this.props.input_nickname)
                    this.props.setPassword(this.props.input_password)

                    this.path = PROFILE
                    break
                }
                case 401 : {
                    this.path = AUTHORIZATION
                    break
                }
                case 403 : {
                    this.path = REGISTRATION_RESTORE_ACCOUNT
                    break
                }
                default:
            }
            this.props.setInputEmail(null)
            this.props.setInputPassword(null)
        }

        // else
    }

    render() {
        return (
            <section className={reg.functional}>
                <form>
                    <section className={reg.inputs}>
                        <input type={'text'} className={options_reg.input} onChange={this.setInputEmail}
                               value={this.props.input_email} placeholder={'Электронный адрес или никнейм'} required/>
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
            </section>
        );
    }
}

export default RegistrationOrAuthorisation