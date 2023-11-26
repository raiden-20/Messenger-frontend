const SET_USER_DATA = 'SET_USER_DATA'

const SET_EMAIL_DATA = 'SET_EMAIL_DATA'
const SET_NICKNAME_DATA = 'SET_NICKNAME_DATA'
const SET_PASSWORD_DATA = 'SET_PASSWORD_DATA'
const SET_CONFIRM_PASSWORD_DATA = 'SET_CONFIRM_PASSWORD_DATA'


const SET_INPUT_EMAIL_DATA = 'SET_INPUT_EMAIL_DATA'
const SET_INPUT_NICKNAME_DATA = 'SET_INPUT_NICKNAME_DATA'
const SET_INPUT_PASSWORD_DATA = 'SET_INPUT_PASSWORD_DATA'
const SET_INPUT_CONFIRM_PASSWORD_DATA = 'SET_INPUT_CONFIRM_PASSWORD_DATA'

const initialState = {
    email: null,
    nickname: null,
    password: null,

    input_email: null,
    input_nickname: null,
    input_password: null,
    input_confirmPassword : null,
}

const authReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_DATA : {
            let data = {...action.data}
            stateCopy.email = data.email
            stateCopy.nickname = data.nickname
            stateCopy.password = data.password

            return stateCopy
        }

        case SET_EMAIL_DATA : {
            stateCopy.email = action.email

            return stateCopy
        }

        case SET_NICKNAME_DATA : {
            stateCopy.nickname = action.nickname

            return stateCopy
        }

        case SET_PASSWORD_DATA : {
            stateCopy.password = action.password

            return stateCopy
        }

        case SET_INPUT_EMAIL_DATA : {
            stateCopy.input_email = action.email

            return stateCopy
        }

        case SET_INPUT_NICKNAME_DATA : {
            stateCopy.input_nickname = action.nickname

            return stateCopy
        }

        case SET_INPUT_PASSWORD_DATA : {
            stateCopy.input_password = action.password

            return stateCopy
        }

        case SET_INPUT_CONFIRM_PASSWORD_DATA : {
            stateCopy.input_confirmPassword = action.confirmPassword

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setEmail = (email : string) => {
    return {
        type: SET_EMAIL_DATA, email
    }
}
export const setNickname = (nickname : string) => {
    return {
        type: SET_NICKNAME_DATA, nickname
    }
}
export const setPassword = (password : string) => {
    return {
        type: SET_PASSWORD_DATA, password
    }
}
export const setConfirmPassword = (password : string) => {
    return {
        type: SET_CONFIRM_PASSWORD_DATA, password
    }
}
export const setInputEmail = (email : string) => {
    return {
        type: SET_INPUT_EMAIL_DATA, email
    }
}
export const setInputNickname = (nickname : string) => {
    return {
        type: SET_INPUT_NICKNAME_DATA, nickname
    }
}
export const setInputPassword = (password : string) => {
    return {
        type: SET_INPUT_PASSWORD_DATA, password
    }
}
export const setInputConfirmPassword = (confirmPassword : string) => {
    return {
        type: SET_INPUT_CONFIRM_PASSWORD_DATA, confirmPassword
    }
}

export default authReducer