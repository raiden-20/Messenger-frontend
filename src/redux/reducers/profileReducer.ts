const SET_USER_DATA = 'SET_USER_DATA'

const SET_USER_NAME = 'SET_USER_NAME'
const SET_USER_BIRTH_DATE = 'SET_USER_BIRTH_DATE'
const SET_USER_BIO = 'SET_USER_BIO'
const SET_USER_AVATAR_URL = 'SET_USER_AVATAR_URL'
const SET_USER_COVER_URL = 'SET_USER_COVER_URL'
const SET_USER_STATUS = 'SET_USER_STATUS'


const SET_INPUT_USER_NAME = 'SET_INPUT_USER_NAME'
const SET_INPUT_USER_BIRTH_DATE = 'SET_INPUT_USER_BIRTH_DATE'
const SET_INPUT_USER_ABOUT = 'SET_INPUT_USER_ABOUT'
const SET_INPUT_USER_AVATAR_URL = 'SET_INPUT_USER_AVATAR_URL'
const SET_INPUT_USER_COVER_URL = 'SET_INPUT_USER_COVER_URL'

const SET_DELETE_AVATAR_FLAG = 'SET_DELETE_AVATAR_FLAG'
const SET_DELETE_COVER_FLAG = 'SET_DELETE_COVER_FLAG'

const SET_BUTTON_SETTING_PRESSED = 'SET_BUTTON_SETTING_PRESSED'
const SET_INPUT_CLEAR_DATA = 'SET_INPUT_CLEAR_DATA'


const initialState = {
    name: "",
    birthDate: "",
    bio: "",
    avatarUrl: "",
    coverUrl: "",
    status: "",

    input_name: "",
    input_avatarUrl: File,
    input_coverUrl: File,
    input_birthDate: "",
    input_bio: "",
    isButtonSettingPressed: false,

    deleteAvatarFlag: false,
    deleteCoverFlag: false,


}

const profileReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SET_USER_DATA : {
            stateCopy.name = action.name
            stateCopy.birthDate = action.birthDate
            stateCopy.bio = action.bio
            stateCopy.avatarUrl = action.avatarUrl
            stateCopy.coverUrl = action.coverUrl
            stateCopy.status = action.status

            return stateCopy
        }


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
        case SET_INPUT_CLEAR_DATA : {
            stateCopy.input_name = ""
            stateCopy.input_avatarUrl = File
            stateCopy.input_coverUrl = File
            stateCopy.input_birthDate = ""
            stateCopy.input_bio = ""

            return stateCopy
        }
        case SET_BUTTON_SETTING_PRESSED : {
            stateCopy.isButtonSettingPressed = action.isButtonSettingPressed

            return stateCopy
        }
        case SET_DELETE_AVATAR_FLAG : {
            stateCopy.deleteAvatarFlag = action.deleteAvatarFlag

            return stateCopy
        }
        case SET_DELETE_COVER_FLAG : {
            stateCopy.deleteCoverFlag = action.deleteCoverFlag

            return stateCopy
        }
        default : {
            return stateCopy
        }
    }
}

export const setUserData = (name: string,
                            birthDate: string,
                            bio: string,
                            avatarUrl: string,
                            coverUrl: string,
                            status: string) => {
    return {
        type: SET_USER_DATA, name, birthDate, bio, avatarUrl, coverUrl, status
    }
}

export const setName = (name: string) => {
    return {
        type: SET_USER_NAME, name
    }
}
export const setBirthDate = (birthDate: string) => {
    return {
        type: SET_USER_BIRTH_DATE, birthDate
    }
}
export const setBio = (bio: string) => {
    return {
        type: SET_USER_BIO, bio
    }
}
export const setAvatarUrl = (avatarUrl: string) => {
    return {
        type: SET_USER_AVATAR_URL, avatarUrl
    }
}
export const setCoverUrl = (coverUrl: string) => {
    return {
        type: SET_USER_COVER_URL, coverUrl
    }
}
export const setStatus = (status: string) => {
    return {
        type: SET_USER_STATUS, status
    }
}
export const setInputName = (input_name: string) => {
    return {
        type: SET_INPUT_USER_NAME, input_name
    }
}
export const setInputBirthDate = (input_birthDate: string) => {
    return {
        type: SET_INPUT_USER_BIRTH_DATE, input_birthDate
    }
}
export const setInputBio = (input_about: string) => {
    return {
        type: SET_INPUT_USER_ABOUT, input_about
    }
}
export const setInputAvatarUrl = (input_avatarUrl: File) => {
    return {
        type: SET_INPUT_USER_AVATAR_URL, input_avatarUrl
    }
}
export const setInputCoverUrl = (input_coverUrl: File) => {
    return {
        type: SET_INPUT_USER_COVER_URL, input_coverUrl
    }
}
export const setInputClearDataProfile = () => {
    return {
        type: SET_INPUT_CLEAR_DATA
    }
}
export const setButtonSettingPressed = (isButtonSettingPressed: boolean) => {
    return {
        type: SET_BUTTON_SETTING_PRESSED, isButtonSettingPressed
    }
}
export const setDeleteAvatarFlag = (deleteAvatarFlag: boolean) => {
    return {
        type: SET_DELETE_AVATAR_FLAG, deleteAvatarFlag
    }
}
export const setDeleteCoverFlag = (deleteCoverFlag: boolean) => {
    return {
        type: SET_DELETE_COVER_FLAG, deleteCoverFlag
    }
}

export default profileReducer