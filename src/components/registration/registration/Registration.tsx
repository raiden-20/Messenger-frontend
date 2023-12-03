import React from "react";
import {PropsAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import axios from "axios";
import RegistrationComponent from "./RegistrationComponent";

const Registration = (props: PropsAuthRegReg) => {

    const authentication = () => {
        if (props.input_email != null && props.input_nickname != null &&
            props.input_password != null && props.input_confirmPassword != null) {
            if (props.input_password === props.input_confirmPassword) {
                axios.post('http://localhost:8000/auth/registration', {
                    email: props.input_email,
                    nickname: props.input_nickname,
                    password: props.input_password,
                    confirmPassword: props.input_confirmPassword
                }).then(response => {
                    switch (response.status) {
                        case 201 : {
                            if (response.data === "Check your mailbox to activate your account") {
                                props.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
                            }
                            props.setEmail(props.input_email)
                            props.setNickname(props.input_nickname)
                            props.setPassword(props.input_password)
                            break
                        }
                        default:
                    }
                    props.setInputEmail(null)
                    props.setInputPassword(null)
                }).catch(error => {
                    console.dir(error)
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
                    props.setInputEmail(null)
                    props.setInputPassword(null)
                })
            }
            props.setInputEmail('')
            props.setInputNickname('')
            props.setInputPassword('')
            props.setInputConfirmPassword('')
            //else
        }
    }
        return <RegistrationComponent input_email={props.input_email}
                                      input_nickname={props.input_nickname}
                                      input_password={props.input_password}
                                      input_confirmPassword={props.input_confirmPassword}
                                      input_emailOrNickname={props.input_emailOrNickname}
                                      message={props.message}
                                      token={props.token}
                                      setInputEmail={props.setInputEmail}
                                      setInputPassword={props.setInputPassword}
                                      setInputNickname={props.setInputNickname}
                                      setInputConfirmPassword={props.setInputConfirmPassword}
                                      setInputEmailOrNickname={props.setInputEmailOrNickname}
                                      setMessage={props.setMessage}
                                      setToken={props.setToken}
                                      authentication={authentication}/>
}

export default Registration