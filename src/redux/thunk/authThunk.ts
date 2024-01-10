import {Dispatch} from "redux";
import {Auth} from "../../axios/auth/AuthAxios";
import {
    setCode, setData,
    setEmail, setIsFetching,
    setMessage,
    setMyNickname,
    setNewEmail,
    setNickname,
    setShowMessage
} from "../reducers/authReducer";
import {Profile} from "../../axios/profile/ProfileAxios";
import {
    setButtonChangePasswordFirstStepPressed,
    setButtonChangePasswordSecondStepPressed
} from "../reducers/settingsReducer";
import {setMyData, setUserData} from "../reducers/profileReducer";
import {PROFILE_USER} from "../../paths/profilePath";
import {REGISTRATION_RESTORE_ACCOUNT} from "../../paths/authPath";

export const Authorization = (input_email: string, input_nickname: string, input_password: string) => {
    debugger
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.RegistrationOrAuthorizationAxios({
            input_email: input_email,
            input_nickname: input_nickname,
            input_password: input_password
        }).then(response => {
            dispatch(setIsFetching(false))
            dispatch(setShowMessage(true))
            dispatch(setCode(response[0]))
            dispatch(setMessage(response[1]))
            debugger
            switch (response[0]) {
                case 200 : {
                    dispatch(setShowMessage(false))
                    dispatch(setMessage(''))

                    if (response[1].token.split(' ').length === 2) {
                        localStorage.setItem('token', response[1].token.split(' ')[1])
                    } else {
                        localStorage.setItem('token', response[1].token)
                    }
                    localStorage.setItem('id', response[1].id)
                    localStorage.setItem('idUser', response[1].id)
                    localStorage.setItem('password', input_password)
                    dispatch(setCode(200))
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        dispatch(setMessage('Такого пользователя не существует'))
                    }else if (response[1] === 'Password mismatch') {
                        dispatch(setMessage('Неверный пароль'))
                    }
                    break
                }
                case 403 : {
                    dispatch(setMessage('Аккаунт не активирован'))
                    localStorage.setItem('id', response[1])
                    dispatch(setCode(403))
                    break
                }
            }
        })
    }
}

export const Registration = (input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                             input_name: string, input_birthDate: string) => {
    return (dispatch : Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.RegistrationAxios({
            input_email: input_email,
            input_nickname: input_nickname,
            input_password: input_password,
            input_confirmPassword: input_confirmPassword
        }).then(response => {
            switch (response[0]) {
                case 201 : {
                    if (response[1] !== null) {
                        localStorage.setItem('id', response[1])
                        Profile.RegistrationSocialAxios({
                            input_name: input_name,
                            input_birthDate: input_birthDate
                        }).then(response => {
                            dispatch(setIsFetching(false))
                            switch (response) {
                                case 200: {
                                    break
                                }
                                case 400: {
                                    dispatch(setMessage('Ошибка регистрации (пользователя не существует)'))
                                }
                            }
                        })
                    }
                    break
                }
                case 400 : {
                    if (response[1] === "Password mismatch") {
                        dispatch(setMessage('Пароли не соответствуют'))
                    }
                    break
                }
                case 409 : {
                    if (response[1] === "This email is already in use") {
                        dispatch(setMessage('Данный email уже используется'))
                    } else if (response[1] === 'This nickname is already in use') {
                        dispatch(setMessage('Имя пользователя уже занято'))
                    }
                    break
                }
                default:
            }
        })
    }
}

export const ForgotPassword = (input_email: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.ForgotPasswordAxios({
            input_email: input_email
        }).then(response => {
            dispatch(setIsFetching(false))
            dispatch(setShowMessage(true))
            switch (response) {
                case 200: {
                    dispatch(setCode(200))
                    dispatch(setMessage('Проверьте почту. При входе в аккаунт, сразу поменяйте пароль, время действия высланного пароля ограничено.'))
                    break
                }
                case 400: {
                    dispatch(setMessage('Пользователя с данной почтой не существует'))
                    break
                }
                case 401: {
                    localStorage.setItem('token', '')
                    break
                }
                case 409: {
                    dispatch(setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже'))
                }
            }
        })
    }
}

export const AccountActivationMessage = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.ActivationAccountAxios()
            .then(response => {
                dispatch(setIsFetching(false))
                switch (response[0]) {
                    case 200 : {
                        dispatch(setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт'))
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            dispatch(setMessage('Такого пользователя не существует'))
                        } else if (response[1] === 'Account has already been activated') {
                            dispatch(setMessage('Аккаунт уже активирован'))
                        }
                        break
                    }
                    default:
                }
            })
    }
}

export const ChangeEmailMessage = (newEmail: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.SuccessfulChangeEmail({
            newEmail: localStorage.getItem('newEmail') as string
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    localStorage.setItem('newEmail', '')
                    dispatch(setMessage('Пароль был успешно изменен!'))
                    localStorage.setItem('token', response[1])
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const AuthGetData = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.AuthDataAxios({
            id: id
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setNickname(response[1].nickname))
                    dispatch(setEmail(response[1].email))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}
export const AuthGetMyData = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.AuthDataAxios({
            id: localStorage.getItem('id') as string
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setMyNickname(response[1].nickname))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const ChangeEmail = (input_password: string, input_email: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))

        Auth.ChangeEmailAxios( {
            input_password: input_password,
            input_email: input_email
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла'))
                    dispatch(setNewEmail(input_email)) // todo хрень, подумать как считывать
                    localStorage.setItem('newEmail', input_email)
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        dispatch(setMessage('Пользователя с такой почтой не существует'))
                    } else if (response[1] === "Password mismatch") {
                        dispatch(setMessage('Неверный пароль'))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 409 : {
                    dispatch(setMessage('Данный email уже используется'))
                    break
                }
                default:
            }
        })
    }
}

export const CheckOldPassword = (input_password: string) => {
    return (dispatch : Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.ChangeOldPasswordAxios( {
            input_password: input_password
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    if (response[1] === "Check your mailbox to confirm new password") {
                        dispatch(setMessage('На Вашу почту был отправлен одноразовый код'))
                    }

                    dispatch(setButtonChangePasswordFirstStepPressed(false))
                    dispatch(setButtonChangePasswordSecondStepPressed(true))
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        dispatch(setCode(404))
                    } else if (response[1] === "Password mismatch") {
                        dispatch(setMessage('Неверный пароль'))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 409 : {
                    if (response[1] === "The password was changed less than 5 minutes ago, please try again later") {
                        dispatch(setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже'))
                    }
                    break
                }
            }
        })
    }
}

export const SetNewPassword = (input_code: string, input_password: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.NewPasswordAxios( {
            input_code: input_code,
            input_password: input_password
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    localStorage.setItem('password', input_password)
                    if (response[1].split(' ').length === 2) {
                        localStorage.setItem('token', response[1].split(' ')[1])
                    } else {
                        localStorage.setItem('token', response[1])
                    }
                    dispatch(setMessage(''))
                    dispatch(setButtonChangePasswordSecondStepPressed(false))
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        dispatch(setCode(404))
                    } else if (response[1] === "Code doesn't match") {
                        dispatch(setMessage('Неверный код'))
                    } else if (response[1] === "The code is not relevant") {
                        dispatch(setMessage('Истекло время использования кода'))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                default:
            }
        })
    }
}

export const DeleteAccount = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.DeleteProfileAxios().then(response => {
            dispatch(setIsFetching(false))
            debugger
            switch (response[0]) {
                case 200 : {
                    if (response[1] === "Account is blocked") {
                        dispatch(setMessage(''))
                        dispatch(setData({
                            email: '',
                            nickname: '',
                            password: ''}))
                        dispatch(setUserData('', '', '', '', '', ''))
                        dispatch(setMyData('', '', '', '', ''))
                        localStorage.setItem('email', '')
                        localStorage.setItem('token', '')
                        localStorage.setItem('password', '')
                        localStorage.setItem('id', '')
                        localStorage.setItem('idUser', '')
                    }
                    break
                }
                case 400 : {
                    if (response[1] === "User doesn't exist") {
                        dispatch(setCode(404))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 403: {
                    dispatch(setMessage('Аккаунт уже заблокирован'))
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const ChangeNickname = (input_nickname: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.ChangeNicknameAxios({
            input_nickname: input_nickname
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setNickname(input_nickname))
                    if (response[1].split(' ').length === 2) {
                        localStorage.setItem('token', response[1].split(' ')[1])
                    } else {
                        localStorage.setItem('token', response[1])
                    }
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const Logout = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.LogoutAxios().then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setData({
                        email: '',
                        nickname: '',
                        password: ''}))
                    dispatch(setUserData('', '', '', '', '', ''))
                    dispatch(setMyData('', '', '', '', ''))

                    localStorage.setItem('token', '')
                    localStorage.setItem('id', '')
                    localStorage.setItem('idUser', '')
                    localStorage.setItem('email', '')
                    localStorage.setItem('password', '')

                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }

        })
    }
}

export const LogoutClear = () => {
    return (dispatch: Dispatch) => {
        dispatch(setData({
            email: '',
            nickname: '',
            password: ''}))
        dispatch(setUserData('', '', '', '', '', ''))
        dispatch(setMyData('', '', '', '', ''))

        localStorage.setItem('token', '')
        localStorage.setItem('id', '')
        localStorage.setItem('idUser', '')
        localStorage.setItem('email', '')
        localStorage.setItem('password', '')
    }
}