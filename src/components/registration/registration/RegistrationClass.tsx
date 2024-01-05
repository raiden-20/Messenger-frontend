import React, {Component} from "react";
import {PropsAuthRegReg, StateAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import RegistrationComponent from "./RegistrationComponent";
import {RegistrationAxios} from "../../axios/auth/AuthAxios";

class RegistrationClass extends Component<PropsAuthRegReg, StateAuthRegReg>{
    authentication = () => { // todo убрать кучу if
        if (this.props.input_name !== '') {
            if (this.props.input_email !== '' && this.props.input_nickname !== '' &&
                this.props.input_password !== '' && this.props.input_confirmPassword !== '') {
                if (this.props.input_password.length >= 8) {
                    if (this.props.input_email.split('').includes('@')) {
                        if (this.props.input_password === this.props.input_confirmPassword) {
                            RegistrationAxios({
                                input_email : this.props.input_email,
                                input_nickname: this.props.input_nickname,
                                input_password: this.props.input_password,
                                input_confirmPassword: this.props.input_confirmPassword,

                                input_name: this.props.input_name,
                                input_birthDate: this.props.input_birthDate,

                                setShowMessage: this.props.setShowMessage,
                                setCode: this.props.setCode,
                                setMessage: this.props.setMessage,
                            })
                            this.clearInputData()
                            if (localStorage.getItem('id') !== null) {
                                return true
                            }
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
            this.props.setCode(400)
        }
        return false
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