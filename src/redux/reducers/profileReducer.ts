const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_NAME = 'SET_USER_NAME'
const SET_USER_BIRTH_DATE = 'SET_USER_BIRTH_DATE'
const SET_USER_BIO = 'SET_USER_BIO'
const SET_USER_AVATAR_URL = 'SET_USER_AVATAR_URL'
const SET_USER_COVER_URL = 'SET_USER_COVER_URL'
const SET_USER_STATUS = 'SET_USER_STATUS'


const SET_INPUT_USER_NAME = 'SET_INPUT_EMAIL_DATA'
const SET_INPUT_USER_BIRTH_DATE = 'SET_INPUT_PASSWORD_DATA'
const SET_INPUT_USER_ABOUT = 'SET_INPUT_CONFIRM_PASSWORD_DATA'
const SET_INPUT_USER_AVATAR_URL = 'SET_INPUT_USER_AVATAR_URL'
const SET_INPUT_USER_COVER_URL = 'SET_INPUT_USER_COVER_URL'
const initialState = {
    name: 'Настя',
    birthDate: '',
    bio: 'будьте счастливы',
    avatarUrl: '',
    coverUrl: '',
    status: '',

    input_name: '',
    input_avatarUrl: File,
    input_coverUrl: File,
    input_birthDate: '',
    input_bio : ''
}

const profileReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_NAME : {
            stateCopy.name = action.name

            return stateCopy
        }

        case SET_USER_BIRTH_DATE : {
            stateCopy.birthDate = action.birthDate

            return stateCopy
        }

        case SET_USER_BIO : {
            stateCopy.bio = action.bio

            return stateCopy
        }

        case SET_USER_AVATAR_URL : {
            stateCopy.avatarUrl = action.avatarUrl

            return stateCopy
        }

        case SET_USER_COVER_URL : {
            stateCopy.coverUrl = action.coverUrl

            return stateCopy
        }

        case SET_USER_STATUS : {
            stateCopy.status = action.status

            return stateCopy
        }

        case SET_INPUT_USER_NAME : {
            stateCopy.input_name = action.input_name

            return stateCopy
        }

        case SET_INPUT_USER_BIRTH_DATE : {
            stateCopy.input_birthDate = action.input_birthDate

            return stateCopy
        }

        case SET_INPUT_USER_ABOUT : {
            stateCopy.input_bio = action.input_about

            return stateCopy
        }

        case SET_INPUT_USER_AVATAR_URL : {
            stateCopy.input_avatarUrl = action.input_avatarUrl

            return stateCopy
        }

        case SET_INPUT_USER_COVER_URL : {
            stateCopy.input_coverUrl = action.input_coverUrl

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
export const setBirthDate = (birthDate : string) => {
    return {
        type: SET_USER_BIRTH_DATE, birthDate
    }
}
export const setBio = (about : string) => {
    return {
        type: SET_USER_BIO, about
    }
}
export const setAvatarUrl = (avatarUrl : string) => {
    return {
        type: SET_USER_AVATAR_URL, avatarUrl
    }
}
export const setCoverUrl = (coverUrl : string) => {
    return {
        type: SET_USER_COVER_URL, coverUrl
    }
}
export const setStatus = (status : string) => {
    return {
        type: SET_USER_STATUS, status
    }
}
export const setInputName = (input_name : string) => {
    return {
        type: SET_INPUT_USER_NAME, input_name
    }
}
export const setInputBirthDate = (input_birthDate : string) => {
    return {
        type: SET_INPUT_USER_BIRTH_DATE, input_birthDate
    }
}
export const setInputBio = (input_about : string) => {
    return {
        type: SET_INPUT_USER_ABOUT, input_about
    }
}
export const setInputAvatarUrl = (input_avatarUrl : File) => {
    return {
        type: SET_INPUT_USER_AVATAR_URL, input_avatarUrl
    }
}
export const setInputCoverUrl = (input_coverUrl : File) => {
    return {
        type: SET_INPUT_USER_COVER_URL, input_coverUrl
    }
}

export default profileReducer