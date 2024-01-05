import axios from "axios";
import {
    ActivationAccountAxiosInterface, AuthDataAxiosInterface, ChangeEmailAxiosInterface,
    ChangeNicknameAxiosInterface, ChangeOldPasswordAxiosInterface, DeleteProfileAxiosInterface,
    ForgotPasswordAxiosInterface, NewPasswordAxiosInterface, RegistrationAxiosInterface,
    RegistrationOrAuthorizationAxiosInterface, SuccessfulChangeEmailInterface
} from "./authInterfaces";
import {RegistrationSocialAxios} from "../profile/ProfileAxios";
import config from "../../paths/config";
import {AUTH, LOCALHOST} from "../urls";
import {AuthData} from "../../../redux/interfaces/auth/authData";

export const RegistrationOrAuthorizationAxios = async (data: RegistrationOrAuthorizationAxiosInterface) => {
    return axios.post(LOCALHOST + AUTH + '/login', {
        email: data.input_email,
        nickname: data.input_nickname,
        password: data.input_password,
    }).then(response => {
        data.setCode(response.status)
        data.setShowMessage(false)
        switch (response.status) {
            case 200 : {
                if (response.data.token.split(' ').length === 2) {
                    localStorage.setItem('token', response.data.token.split(' ')[1])
                } else {
                    localStorage.setItem('token', response.data.token)
                }
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('idUser', response.data.id)
                localStorage.setItem('password', data.input_password)
                data.cleanMessageAndChangePath()
                break
            }
            default:
        }
        data.setInputEmail('')
        data.setInputPassword('')
        return response.status
    }).catch(error => {
        data.setShowMessage(true)
        data.setCode(error.response.status)
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "User doesn't exist") {
                    data.setMessage('Такого пользователя не существует')
                }else if (error.response.data === 'Password mismatch') {
                    data.setMessage('Неверный пароль')
                }
                break
            }
            case 403 : {
                data.setMessage('Аккаунт не активирован')
                localStorage.setItem('id', error.response.data)
                break
            }
            default:
        }
        return error.response.status
    })
}

export const RegistrationAxios = (data: RegistrationAxiosInterface) => { // registration
    axios.post(LOCALHOST + AUTH + '/registration', {
        email: data.input_email,
        nickname: data.input_nickname,
        password: data.input_password,
        confirmPassword: data.input_confirmPassword
    }).then(response => {
        data.setShowMessage(true)
        data.setCode(response.status)
        switch (response.status) {
            case 201 : {
                if (response.data !== null) {
                    localStorage.setItem('id', response.data)

                    RegistrationSocialAxios( {
                        input_name: data.input_name,
                        input_birthDate: data.input_birthDate
                    })
                }
                break
            }
            default:
        }
    }).catch(error => {
        data.setShowMessage(true)
        data.setCode(error.response.status)
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "Password mismatch") {
                    data.setMessage('Пароли не соответствуют')
                }
                break
            }
            case 409 : {
                if (error.response.data === "This email is already in use") {
                    data.setMessage('Данный email уже используется')
                }else if (error.response.data === 'This nickname is already in use') {
                    data.setMessage('Имя пользователя уже занято')
                }
                break
            }
            default:
        }
    })
}

export const ForgotPasswordAxios = (data: ForgotPasswordAxiosInterface) => {
    axios.put(LOCALHOST + AUTH + '/forget/password', {
        email: data.input_email
    }).then(response => {
        data.setShowMessage(true)
        data.setCode(response.status)
        switch (response.status) {
            case 200: {
                if (response.data === 'Check your mailbox') {
                    data.setMessage('Проверьте почту. При входе в аккаунт, сразу поменяйте пароль, время действия высланного пароля ограничено.')
                }
            }
        }
    }).catch(error => {
        data.setShowMessage(true)
        data.setCode(error.response.status)
        switch (error.response.status) {
            case 400: {
                if (error.response.data === 'User doesn\'t exist') {
                    data.setMessage('Пользователя с данной почтой не существует')
                }else if (error.response.data === "Bad token") {
                    data.setMessage('Плохой токен')
                }
                break
            }
            case 409: {
                if (error.response.data === 'The password was changed less than 5 minutes ago, please try again later') {
                    data.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                }
            }
        }
    })
}

export const ActivationAccountAxios = async (data: ActivationAccountAxiosInterface) => {
    return axios.put(LOCALHOST + AUTH + '/active/account', {
        "id": localStorage.getItem('id')
    })
        .then(response => {
            data.setMessage(response.data.message)
            switch (response.status) {
                case 200 : {
                    if (response.data === "Account activated") {
                        data.setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт')
                    }
                    return response.status
                }
                default:
            }
        })
        .catch(error => {
            data.setMessage(error.message)
            switch (error.response.status) {
                case 400 : {
                    if (error.response.data === "User doesn't exist") {
                        data.setMessage('Такого пользователя не существует')
                    } else if (error.response.data === 'Account has already been activated') {
                        data.setMessage('Аккаунт уже активирован')
                    }
                    break
                }
                default:
            }
            return error.response.status
        });
}

export const AuthDataAxios = async (data: AuthDataAxiosInterface) => {
    return axios.get(LOCALHOST + AUTH + `/data/${data.id}`, config)
        .then(response => {
            return [response.status, response.data];
        }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    break;
                }
                case 404: {
                    // todo тут перейти на стр такого пользователя не сущ
                    break;
                }
            }
            return [error.response.status, '']
        });
}

export const ChangeEmailAxios = (data: ChangeEmailAxiosInterface) => {
    axios.post(LOCALHOST + AUTH + '/change/email', {
        "password": data.input_password,
        "newEmail": data.input_email
    }, config).then(response => {
        data.setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла')
        localStorage.setItem('token', response.data)
        // props.setToken(response.data) todo перенести в successful change email
        data.setNewEmail(data.input_email)

    }).catch(error => {
        console.dir(error)
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "User doesn't exist") {
                    data.setMessage('Пользователя с такой почтой не существует')
                } else if (error.response.data === "Password mismatch") {
                    data.setMessage('Неверный пароль')
                }else if (error.response.data === "Bad token") {
                    data.setMessage('Плохой токен')
                }
                break
            }
            case 409 : {
                if (error.response.data === "This email is already in use") {
                    data.setMessage('Данный email уже используется')
                }
                break
            }
            default:
        }
    })
}

export const SuccessfulChangeEmail = (props : SuccessfulChangeEmailInterface) => {
    axios.put(LOCALHOST + AUTH + '/confirm/email', {
        "email": props.newEmail
    }, config)
        .then(response => {
            props.setMessage('Пароль был успешно изменен!')
            props.setEmail(props.newEmail)
            localStorage.setItem('token', response.data)
        })
        .catch(error => {
            console.dir(error)
            props.setMessage(error.message)
            switch (error.response.status) {
                case 400 : {
                    if (error.response.data === "User doesn't exist") {
                        props.setMessage('Такого пользователя не существует')
                    }else if (error.response.data === "Bad token") {
                        props.setMessage('Плохой токен')
                    }
                    break
                }
                default:
            }
        });
}

export const ChangeOldPasswordAxios = (props: ChangeOldPasswordAxiosInterface) => {
    axios.post(LOCALHOST + AUTH + '/change/password', {
        password: props.input_password,
    }, config).then(response => {
        switch (response.status) {
            case 200 : {
                if (response.data === "Check your mailbox to confirm new password") {
                    props.setMessage('На Вашу почту был отправлен одноразовый код')
                }

                props.setButtonChangePasswordFirstStepPressed(false)
                props.setButtonChangePasswordSecondStepPressed(true)
                break
            }
            default:
        }
    }).catch(error => {
        console.dir(error)
        props.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "User doesn't exist") {
                    props.setMessage('Пользователя не существует')
                } else if (error.response.data === "Password mismatch") {
                    props.setMessage('Неверный пароль')
                }else if (error.response.data === "Bad token") {
                    props.setMessage('Плохой токен')
                }
                break
            }
            case 409 : {
                if (error.response.data === "The password was changed less than 5 minutes ago, please try again later") {
                    props.setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже')
                }
                break
            }
            default:
        }
    })
}

export const NewPasswordAxios = (data: NewPasswordAxiosInterface) => {
    axios.put(LOCALHOST + AUTH + '/confirm/password', {
        oneTimeCode: data.input_code,
        newPassword: data.input_password
    }, config).then(response => {

        data.setMessage('Пароль был изменен')
        data.setPassword(data.input_password)
        localStorage.setItem('password', data.input_password)
        if (response.data.split(' ').length === 2) {
            localStorage.setItem('token', response.data.split(' ')[1])
        } else {
            localStorage.setItem('token', response.data)
        }

    }).catch(error => {
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "User doesn't exist") {
                    data.setMessage('Пользователя не существует')
                } else if (error.response.data === "Code doesn't match") {
                    data.setMessage('Неверный код')
                } else if (error.response.data === "The code is not relevant") {
                    data.setMessage('Истекло время использования кода')
                }else if (error.response.data === "Bad token") {
                    data.setMessage('Плохой токен')
                }
                break
            }
            default:
        }
    })
}

export const DeleteProfileAxios = (data: DeleteProfileAxiosInterface) => {
    axios.put(LOCALHOST + AUTH + '/block', {
        password: localStorage.getItem('password')
    }, config).then(response => {
        switch (response.status) {
            case 200 : {
                if (response.data === "Account is blocked") {
                    data.setMessage('')
                    localStorage.setItem('email', '')
                    localStorage.setItem('token', '')
                    localStorage.setItem('password', '')
                    localStorage.setItem('id', '')
                    localStorage.setItem('idUser', '')
                }
                break
            }
            default:
        }
    }).catch(error => {
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "User doesn't exist") {
                    data.setMessage('Пользователя не существует')
                } else if (error.response.data === "Code doesn't match") {
                    data.setMessage('Неверный код')
                } else if (error.response.data === "Bad token") {
                    data.setMessage('Плохой токен')
                }
                break
            }
            case 403: {
                if (error.response.data === "Account has already been blocked") {
                    data.setMessage('Аккаунт уже заблокирован')
                }
                break
            }
            default:
        }
    })
}

export const ChangeNicknameAxios = (data: ChangeNicknameAxiosInterface) => {
    axios.post(LOCALHOST + AUTH + '/change/nickname', {
        nickname: data.input_nickname
    }, config).then(response => {
        data.setNickname(data.input_nickname)
        if (response.data.split(' ').length === 2) {
            localStorage.setItem('token', response.data.split(' ')[1])
        } else {
            localStorage.setItem('token', response.data)
        }



    }).catch(error => {
        debugger
        data.setMessage(error.message)
    })
}

