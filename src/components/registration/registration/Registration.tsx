import React from "react";
import {PropsAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import axios from "axios";
import RegistrationComponent from "./RegistrationComponent";

const Registration = (props: PropsAuthRegReg) => {
    const authentication = () => {
        if (props.input_name !== '') {
            if (props.input_email !== '' && props.input_nickname !== '' &&
                props.input_password !== '' && props.input_confirmPassword !== '') {
                if (props.input_password.length >= 8) {
                    if (props.input_email.split('').includes('@')) {
                        if (props.input_password === props.input_confirmPassword) {
                            axios.post('http://localhost:8080/auth/registration', {
                                email: props.input_email,
                                nickname: props.input_nickname,
                                password: props.input_password,
                                confirmPassword: props.input_confirmPassword
                            }).then(response => {
                                props.setShowMessage(true)
                                props.setCode(response.status)
                                switch (response.status) {
                                    case 201 : {
                                        if (response.data !== null) {
                                            props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                                            localStorage.setItem('id', response.data)
                                            axios.post('http://localhost:8080/social/registration', {
                                                id: localStorage.getItem('id'),
                                                name: props.input_name,
                                                birthDate: props.input_birthDate
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
                                props.setInputEmail('')
                                props.setInputName('')
                                props.setInputBirthDate('')
                                props.setInputNickname('')
                                props.setInputPassword('')
                                props.setInputPasswordShow('')
                                props.setInputConfirmPasswordShow('')
                                props.setInputConfirmPassword('')
                            }).catch(error => {
                                props.setShowMessage(true)
                                props.setCode(error.response.status)
                                props.setMessage(error.message)
                                switch (error.response.status) {
                                    case 400 : {
                                        if (error.response.data === "Password mismatch") {
                                            props.setMessage('Пароли не соответствуют')
                                        }
                                        break
                                    }
                                    case 409 : {
                                        if (error.response.data === "This email is already in use") {
                                            props.setMessage('Данный email уже используется')
                                        }else if (error.response.data === 'This nickname is already in use') {
                                            props.setMessage('Имя пользователя уже занято')
                                        }
                                        break
                                    }
                                    default:
                                }
                            })
                        } else {
                            props.setShowMessage(true)
                            props.setMessage('Пароли не совпадают')
                            props.setCode(400)
                        }
                    } else {
                        props.setShowMessage(true)
                        props.setMessage('Неверный ввод email')
                        props.setCode(400)
                    }
                } else {
                    props.setShowMessage(true)
                    props.setMessage('Пароль должен содержать 8 и более символов')
                    props.setCode(400)
                }
            }
        } else {
            props.setShowMessage(true)
            props.setMessage('Введите имя')
        }
    }
        return <RegistrationComponent input_email={props.input_email}
                                      input_nickname={props.input_nickname}
                                      input_password={props.input_password}
                                      input_confirmPassword={props.input_confirmPassword}
                                      message={props.message}
                                      setInputEmail={props.setInputEmail}
                                      setInputPassword={props.setInputPassword}
                                      setInputNickname={props.setInputNickname}
                                      setInputConfirmPassword={props.setInputConfirmPassword}
                                      setMessage={props.setMessage}
                                      authentication={authentication}
                                      code={props.code}
                                      buttonShowMessage={props.buttonShowMessage}
                                      setShowMessage={props.setShowMessage}
                                      input_name={props.input_name}
                                      setInputName={props.setInputName}
                                      setName={props.setName}
                                      input_birthDate={props.input_birthDate}
                                      setInputBirthDate={props.setInputBirthDate}
                                      input_passwordShow={props.input_passwordShow}
                                      setInputPasswordShow={props.setInputPasswordShow}
                                      input_confirmPasswordShow={props.input_confirmPasswordShow}
                                      setInputConfirmPasswordShow={props.setInputConfirmPasswordShow}/>
}

export default Registration