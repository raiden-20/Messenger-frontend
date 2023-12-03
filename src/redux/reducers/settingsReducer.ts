const SET_BUTTON_CHANGE_EMAIL_PRESSED = 'SET_BUTTON_CHANGE_EMAIL_PRESSED'
const SET_BUTTON_CHANGE_PASSWORD_FIRST_STEP_PRESSED = 'SET_BUTTON_CHANGE_PASSWORD_FIRST_STEP_PRESSED'
const SET_BUTTON_CHANGE_PASSWORD_SECOND_STEP_PRESSED = 'SET_BUTTON_CHANGE_PASSWORD_SECOND_STEP_PRESSED'
const SET_LANGUAGE = 'SET_LANGUAGE'
const SET_INPUT_PASSWORD = 'SET_INPUT_PASSWORD'
const SET_INPUT_PASSWORD_CONFIRM = 'SET_INPUT_PASSWORD_CONFIRM'
const SET_INPUT_EMAIL = 'SET_INPUT_EMAIL'
const SET_INPUT_CODE = 'SET_INPUT_CODE'

const initialState = {
    input_password: null,
    input_email: null,
    input_passwordConfirm: null,
    input_code: null,

    buttonChangeEmail: false,
    buttonChangePasswordFirstStep: false,
    buttonChangePasswordSecondStep: false,
    language: 'Russian'
}

const settingsReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_BUTTON_CHANGE_EMAIL_PRESSED : {
            stateCopy.buttonChangeEmail = action.buttonChangeEmail
            return stateCopy
        }

        case SET_BUTTON_CHANGE_PASSWORD_FIRST_STEP_PRESSED : {
            stateCopy.buttonChangePasswordFirstStep = action.buttonChangePasswordFirstStep
            return stateCopy
        }

        case SET_BUTTON_CHANGE_PASSWORD_SECOND_STEP_PRESSED : {
            stateCopy.buttonChangePasswordSecondStep = action.buttonChangePasswordSecondStep
            return stateCopy
        }

        case SET_LANGUAGE : {
            stateCopy.language = action.language
            return stateCopy
        }

        case SET_INPUT_PASSWORD : {
            stateCopy.input_password = action.input_password
            return stateCopy
        }
        case SET_INPUT_PASSWORD_CONFIRM : {
            stateCopy.input_passwordConfirm = action.input_passwordConfirm
            return stateCopy
        }
        case SET_INPUT_EMAIL : {
            stateCopy.input_email = action.input_email
            return stateCopy

        }case SET_INPUT_CODE : {
            stateCopy.input_code = action.input_code
            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setButtonChangeEmailPressed = (buttonChangeEmail : boolean) => {
    return {
        type: SET_BUTTON_CHANGE_EMAIL_PRESSED, buttonChangeEmail
    }
}
export const setButtonChangePasswordFirstStepPressed = (buttonChangePasswordFirstStep : boolean) => {
    return {
        type: SET_BUTTON_CHANGE_PASSWORD_FIRST_STEP_PRESSED, buttonChangePasswordFirstStep
    }
}
export const setButtonChangePasswordSecondStepPressed = (buttonChangePasswordSecondStep : boolean) => {
    return {
        type: SET_BUTTON_CHANGE_PASSWORD_SECOND_STEP_PRESSED, buttonChangePasswordSecondStep
    }
}
export const setLanguage = (language : string) => {
    return {
        type: SET_LANGUAGE, language
    }
}
export const setInputPassword = (input_password : string) => {
    return {
        type: SET_INPUT_PASSWORD, input_password
    }
}
export const setInputPasswordConfirm = (input_passwordConfirm : string) => {
    return {
        type: SET_INPUT_PASSWORD_CONFIRM, input_passwordConfirm
    }
}
export const setInputEmail = (input_email : string) => {
    return {
        type: SET_INPUT_EMAIL, input_email
    }
}
export const setInputCode = (input_code: string) => {
    return {
        type: SET_INPUT_CODE, input_code
    }
}

export default settingsReducer