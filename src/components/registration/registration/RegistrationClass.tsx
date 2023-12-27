import React, {Component} from "react";
import {PropsAuthRegReg, StateAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import axios from "axios";
import RegistrationComponent from "./RegistrationComponent";

class RegistrationClass extends Component<PropsAuthRegReg, StateAuthRegReg>{
    authentication = () => {
        if (this.props.input_name !== '') {
            if (this.props.input_email !== '' && this.props.input_nickname !== '' &&
                this.props.input_password !== '' && this.props.input_confirmPassword !== '') {
                if (this.props.input_password.length >= 8) {
                    if (this.props.input_email.split('').includes('@')) {
                        if (this.props.input_password === this.props.input_confirmPassword) {
                            axios.post('http://localhost:8080/auth/registration', {
                                email: this.props.input_email,
                                nickname: this.props.input_nickname,
                                password: this.props.input_password,
                                confirmPassword: this.props.input_confirmPassword
                            }).then(response => {
                                this.props.setShowMessage(true)
                                this.props.setCode(response.status)
                                switch (response.status) {
                                    case 201 : {
                                        if (response.data !== null) {
                                            this.props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                                            localStorage.setItem('id', response.data)
                                            axios.post('http://localhost:8080/social/registration', {
                                                id: localStorage.getItem('id'),
                                                name: this.props.input_name,
                                                birthDate: this.props.input_birthDate
                                            }).then(response => {
                                                switch (response.status) {
                                                    case 200 : {
                                                    }
                                                }
                                            }).catch(error => {

                                            })
                                        }
                                        break
                                    }
                                    default:
                                }
                                this.props.setInputEmail('')
                                this.props.setInputName('')
                                this.props.setInputBirthDate('')
                                this.props.setInputNickname('')
                                this.props.setInputPassword('')
                                this.props.setInputPasswordShow('')
                                this.props.setInputConfirmPasswordShow('')
                                this.props.setInputConfirmPassword('')
                            }).catch(error => {
                                this.props.setShowMessage(true)
                                this.props.setCode(error.response.status)
                                this.props.setMessage(error.message)
                                switch (error.response.status) {
                                    case 400 : {
                                        if (error.response.data === "Password mismatch") {
                                            this.props.setMessage('Пароли не соответствуют')
                                        }
                                        break
                                    }
                                    case 409 : {
                                        if (error.response.data === "This email is already in use") {
                                            this.props.setMessage('Данный email уже используется')
                                        }else if (error.response.data === 'This nickname is already in use') {
                                            this.props.setMessage('Имя пользователя уже занято')
                                        }
                                        break
                                    }
                                    default:
                                }
                            })
                        } else {
                            this.props.setShowMessage(true)
                            this.props.setMessage('Пароли не совпадают')
                            this.props.setCode(400)
                        }
                    } else {
                        this.props.setShowMessage(true)
                        this.props.setMessage('Неверный ввод email')
                        this.props.setCode(400)
                    }
                } else {
                    this.props.setShowMessage(true)
                    this.props.setMessage('Пароль должен содержать 8 и более символов')
                    this.props.setCode(400)
                }
            }
        } else {
            this.props.setShowMessage(true)
            this.props.setMessage('Введите имя')
        }
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