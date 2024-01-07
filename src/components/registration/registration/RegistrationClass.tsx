import React, {Component} from "react";
import {PropsAuthRegReg, StateAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import RegistrationComponent from "./RegistrationComponent";
import {Auth} from "../../../axios/auth/AuthAxios";
import {Profile} from "../../../axios/profile/ProfileAxios";

class RegistrationClass extends Component<PropsAuthRegReg, StateAuthRegReg> {
    authentication = () => {
        let flag = false
        Auth.RegistrationAxios({
            input_email: this.props.input_email,
            input_nickname: this.props.input_nickname,
            input_password: this.props.input_password,
            input_confirmPassword: this.props.input_confirmPassword
        }).then(response => {
            switch (response[0]) {
                case 201 : {
                    if (response[1] !== null) {
                        localStorage.setItem('id', response[1])

                        flag = true
                    }
                    break
                }
                case 400 : {
                    if (response[1] === "Password mismatch") {
                        this.props.setMessage('Пароли не соответствуют')
                    }
                    break
                }
                case 409 : {
                    if (response[1] === "This email is already in use") {
                        this.props.setMessage('Данный email уже используется')
                    } else if (response[1] === 'This nickname is already in use') {
                        this.props.setMessage('Имя пользователя уже занято')
                    }
                    break
                }
                default:
            }
        })
        if (flag) {
            Profile.RegistrationSocialAxios({
                input_name: this.props.input_name,
                input_birthDate: this.props.input_birthDate
            }).then(response => {
                switch (response) {
                    case 200: {
                        break
                    }
                    case 400: {
                        this.props.setMessage('Ошибка регистрации (пользователя не существует)')
                    }
                }
            })
        }
        this.clearInputData()
        return localStorage.getItem('id') !== null;
    }

    clearInputData = () => {
        this.props.setInputEmail('')
        this.props.setInputName('')
        this.props.setInputBirthDate('')
        this.props.setInputNickname('')
        this.props.setInputPassword('')
        this.props.setInputPasswordShow('')
        this.props.setInputConfirmPasswordShow('')
        this.props.setInputConfirmPassword('')
    }

    render() {
        return <RegistrationComponent input_email={this.props.input_email}
                                      input_nickname={this.props.input_nickname}
                                      input_password={this.props.input_password}
                                      input_confirmPassword={this.props.input_confirmPassword}
                                      message={this.props.message}
                                      setInputEmail={this.props.setInputEmail}
                                      setInputPassword={this.props.setInputPassword}
                                      setInputNickname={this.props.setInputNickname}
                                      setInputConfirmPassword={this.props.setInputConfirmPassword}
                                      setMessage={this.props.setMessage}
                                      authentication={this.authentication}
                                      code={this.props.code}
                                      buttonShowMessage={this.props.buttonShowMessage}
                                      setShowMessage={this.props.setShowMessage}
                                      input_name={this.props.input_name}
                                      setInputName={this.props.setInputName}
                                      setName={this.props.setName}
                                      input_birthDate={this.props.input_birthDate}
                                      setInputBirthDate={this.props.setInputBirthDate}
                                      input_passwordShow={this.props.input_passwordShow}
                                      setInputPasswordShow={this.props.setInputPasswordShow}
                                      input_confirmPasswordShow={this.props.input_confirmPasswordShow}
                                      setInputConfirmPasswordShow={this.props.setInputConfirmPasswordShow}/>
    }


}

export default RegistrationClass