const SET_ID = 'SET_ID'
const SET_USER_DATA = 'SET_USER_DATA'

const SET_EMAIL_DATA = 'SET_EMAIL_DATA'
const SET_NEW_EMAIL = 'SET_NEW_EMAIL'
const SET_NICKNAME_DATA = 'SET_NICKNAME_DATA'
const SET_PASSWORD_DATA = 'SET_PASSWORD_DATA'
const SET_CONFIRM_PASSWORD_DATA = 'SET_CONFIRM_PASSWORD_DATA'


const SET_INPUT_EMAIL_DATA = 'SET_INPUT_EMAIL_DATA'
const SET_INPUT_NICKNAME_DATA = 'SET_INPUT_NICKNAME_DATA'
const SET_INPUT_EMAIL_OR_NICKNAME_DATA = 'SET_INPUT_EMAIL_OR_NICKNAME_DATA'
const SET_INPUT_PASSWORD_DATA = 'SET_INPUT_PASSWORD_DATA'
const SET_INPUT_CONFIRM_PASSWORD_DATA = 'SET_INPUT_CONFIRM_PASSWORD_DATA'

const SET_MESSAGE = 'SET_MESSAGE'
const SET_SHOW_MESSAGE = 'SET_SHOW_MESSAGE'
const SET_TOKEN = 'SET_TOKEN'
const SET_CODE = 'SET_CODE'

const initialState = {
    id: '',
    token: '',

    email: 'an.korobeynikova@gmail.com',
    newEmail: '',
    nickname: 'anastas',
    password: 12345678910,

    input_email: null,
    input_nickname: '',
    input_emailOrNickname: '',
    input_password: '',
    input_confirmPassword : '',

    message: '',
    buttonShowMessage: false,
    code: 0
}

const authReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_ID : {
            stateCopy.id = action.id

            return stateCopy
        }

        case SET_USER_DATA : {
            let data = {...action.data}
            stateCopy.id = data.id
            stateCopy.email = data.email
            stateCopy.nickname = data.nickname
            stateCopy.password = data.password

            return stateCopy
        }

        case SET_EMAIL_DATA : {
            stateCopy.email = action.email

            return stateCopy
        }
        case SET_NEW_EMAIL : {
            stateCopy.newEmail = action.newEmail

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
            stateCopy.input_email = action.input_email

            return stateCopy
        }

        case SET_INPUT_NICKNAME_DATA : {
            stateCopy.input_nickname = action.input_nickname

            return stateCopy
        }

        case SET_INPUT_EMAIL_OR_NICKNAME_DATA : {
            stateCopy.input_emailOrNickname = action.input_emailOrNickname

            return stateCopy
        }

        case SET_INPUT_PASSWORD_DATA : {
            stateCopy.input_password = action.input_password

            return stateCopy
        }

        case SET_INPUT_CONFIRM_PASSWORD_DATA : {
            stateCopy.input_confirmPassword = action.input_confirmPassword

            return stateCopy
        }
        case SET_MESSAGE : {
            stateCopy.message = action.message

            return stateCopy
        }
        case SET_SHOW_MESSAGE : {
            stateCopy.buttonShowMessage = action.buttonShowMessage

            return stateCopy
        }
        case SET_TOKEN : {
            stateCopy.token = action.token

            return stateCopy
        }
        case SET_CODE : {
            stateCopy.code = action.code

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setData = (data : object) => {
    return {
        type: SET_USER_DATA, data
    }
}
export const setId = (id : string) => {
    return {
        type: SET_ID, id
    }
}
export const setEmail = (email : string) => {
    return {
        type: SET_EMAIL_DATA, email
    }
}
export const setNewEmail = (newEmail : string) => {
    return {
        type: SET_NEW_EMAIL, newEmail
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
export const setInputEmail = (input_email : string) => {
    return {
        type: SET_INPUT_EMAIL_DATA, input_email
    }
}
export const setInputNickname = (input_nickname : string) => {
    return {
        type: SET_INPUT_NICKNAME_DATA, input_nickname
    }
}
export const setInputEmailOrNickname = (input_emailOrNickname : string) => {
    return {
        type: SET_INPUT_EMAIL_OR_NICKNAME_DATA, input_emailOrNickname
    }
}
export const setInputPassword = (input_password : string) => {
    return {
        type: SET_INPUT_PASSWORD_DATA, input_password
    }
}
export const setInputConfirmPassword = (input_confirmPassword : string) => {
    return {
        type: SET_INPUT_CONFIRM_PASSWORD_DATA, input_confirmPassword
    }
}

export const setMessage = (message : string) => {
    return {
        type: SET_MESSAGE, message
    }
}
export const setShowMessage = (buttonShowMessage : boolean) => {
    return {
        type: SET_SHOW_MESSAGE, buttonShowMessage
    }
}
export const setToken = (token : string) => {
    return {
        type: SET_TOKEN, token
    }
}
export const setCode = (code : number) => {
    return {
        type: SET_CODE, code
    }
}



export default authReducer