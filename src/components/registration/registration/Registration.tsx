import React, {Component} from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import {PropsAuthReg, StateAuthReg} from "../../../redux/interfaces/auth/authRegistration";
import {REGISTRATION} from "../../paths/authPath";
import {NavLink} from "react-router-dom";
import {PROFILE} from "../../paths/profilePath";

let path = REGISTRATION

class Registration extends Component<PropsAuthReg, StateAuthReg> {

    setInputEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
        if (!this.props.input_email.split('').includes('@')) {
            //обводить красным контуром
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

    register = () => {
        if (this.props.input_email != null && this.props.input_nickname != null &&
            this.props.input_password != null && this.props.input_confirmPassword != null) {
            if (this.props.input_password === this.props.input_confirmPassword) {
                //post
                let code = 200
                switch (code) {
                    case 200 : {
                        this.props.setEmail(this.props.input_email)
                        this.props.setNickname(this.props.input_nickname)
                        this.props.setPassword(this.props.input_password)

                        path = PROFILE
                        break
                    }
                    case 401 : {
                        path = REGISTRATION
                        break
                    }
                    default:
                }
            }
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
                        <NavLink to={path} type={'submit'} className={options_reg.main_page_button + ' ' + reg_curr.navlink} onClick={this.register} >
                            Зарегистрироваться
                        </NavLink>
                    </form>
                </section>
            </section>
        )
    }
}

export default Registration