const SET_USER_NAME = 'SET_USER_DATA'
const SET_USER_SURNAME = 'SET_EMAIL_DATA'
const SET_USER_BIRTH_DATE = 'SET_NICKNAME_DATA'
const SET_USER_ABOUT = 'SET_PASSWORD_DATA'


const SET_INPUT_USER_NAME = 'SET_INPUT_EMAIL_DATA'
const SET_INPUT_USER_SURNAME = 'SET_INPUT_NICKNAME_DATA'
const SET_INPUT_USER_BIRTH_DATE = 'SET_INPUT_PASSWORD_DATA'
const SET_INPUT_USER_ABOUT = 'SET_INPUT_CONFIRM_PASSWORD_DATA'

const initialState = {
    id : null,
    name: 'Настя',
    surname: 'Коробасникова',
    birthDate: null,
    bio: 'сосите хуй и будьте счастливы',

    input_name: null,
    input_surname: null,
    input_birthDate: null,
    input_about : null,
}

const profileReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_NAME : {
            stateCopy.name = action.name

            return stateCopy
        }

        case SET_USER_SURNAME : {
            stateCopy.surname = action.surname

            return stateCopy
        }

        case SET_USER_BIRTH_DATE : {
            stateCopy.birthDate = action.birthDate

            return stateCopy
        }

        case SET_USER_ABOUT : {
            stateCopy.bio = action.bio

            return stateCopy
        }

        case SET_INPUT_USER_NAME : {
            stateCopy.input_name = action.input_name

            return stateCopy
        }

        case SET_INPUT_USER_SURNAME : {
            stateCopy.input_surname = action.input_surname

            return stateCopy
        }

        case SET_INPUT_USER_BIRTH_DATE : {
            stateCopy.input_birthDate = action.input_birthDate

            return stateCopy
        }

        case SET_INPUT_USER_ABOUT : {
            stateCopy.input_about = action.input_about

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setName = (name : string) => {
    return {
        type: SET_USER_NAME, name
    }
}
export const setSurname = (surname : string) => {
    return {
        type: SET_USER_SURNAME, surname
    }
}
export const setBirthDate = (birthDate : string) => {
    return {
        type: SET_USER_BIRTH_DATE, birthDate
    }
}
export const setAbout = (about : string) => {
    return {
        type: SET_USER_ABOUT, about
    }
}
export const setInputName = (input_name : string) => {
    return {
        type: SET_INPUT_USER_NAME, input_name
    }
}
export const setInputSurname = (input_surname : string) => {
    return {
        type: SET_INPUT_USER_SURNAME, input_surname
    }
}
export const setInputBirthDate = (input_birthDate : string) => {
    return {
        type: SET_INPUT_USER_BIRTH_DATE, input_birthDate
    }
}
export const setInputAbout = (input_about : string) => {
    return {
        type: SET_INPUT_USER_ABOUT, input_about
    }
}

export default profileReducer