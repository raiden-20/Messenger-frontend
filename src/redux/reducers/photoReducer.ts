const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_USER_COUNT_PHOTO = 'SET_USER_COUNT_PHOTO'
const SET_BUTTON_OPEN_PHOTO = 'SET_BUTTON_OPEN_PHOTO'
const SET_LIKED_PHOTO = 'SET_LIKED_PHOTO'

const initialState = {
    photoUrl: [],
    countPhoto: 0,

    isButtonOpenPhotoPressed: false,
    isLiked: false
}

const photoReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_PHOTO : {
            stateCopy.photoUrl = action.photoUrl

            return stateCopy
        }
        case SET_USER_COUNT_PHOTO : {
            stateCopy.countPhoto = action.countPhoto

            return stateCopy
        }
        case SET_BUTTON_OPEN_PHOTO : {
            stateCopy.isButtonOpenPhotoPressed = action.isButtonOpenPhotoPressed

            return stateCopy
        }
        case SET_LIKED_PHOTO : {
            stateCopy.isLiked = action.isLiked

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPhotoUrl = (photoUrl : []) => {
    return {
        type: SET_USER_PHOTO, photoUrl
    }
}
export const setCountPhoto = (countPhoto : number) => {
    return {
        type: SET_USER_COUNT_PHOTO, countPhoto
    }
}
export const setButtonOpenPhoto = (isButtonOpenPhotoPressed : boolean) => {
    return {
        type: SET_BUTTON_OPEN_PHOTO, isButtonOpenPhotoPressed
    }
}
export const setLikedPhoto = (isLiked : boolean) => {
    return {
        type: SET_LIKED_PHOTO, isLiked
    }
}

export default photoReducer