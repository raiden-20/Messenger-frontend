const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_USER_ONE_PHOTO = 'SET_USER_ONE_PHOTO'
const SET_USER_COUNT_PHOTO = 'SET_USER_COUNT_PHOTO'
const SET_BUTTON_OPEN_PHOTO = 'SET_BUTTON_OPEN_PHOTO'
const SET_LIKED_PHOTO = 'SET_LIKED_PHOTO'
const SET_POST_URL = 'SET_POST_URL'

const initialState = {
    photoUrl: [
        {postId: '', photoId: '', url: ''},
        {postId: '', photoId: '', url: ''},
        {postId: '', photoId: '', url: ''}
    ],
    countPhoto: 0,

    onePhotoUrl: '',

    isButtonOpenPhotoPressed: false,
    isLiked: false,
    postId: ''
}

const photoReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_PHOTO : {
            stateCopy = {...state, photoUrl: [...action.photoUrl]}

            return stateCopy
        }
        case SET_USER_ONE_PHOTO : {
            stateCopy.onePhotoUrl = action.onePhotoUrl

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
        }case SET_POST_URL : {
            stateCopy.postId = action.postId

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
export const setOnePhotoUrl = (onePhotoUrl : string) => {
    return {
        type: SET_USER_ONE_PHOTO, onePhotoUrl
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
export const setPostUrl = (postId : string) => {
    return {
        type: SET_POST_URL, postId
    }
}

export default photoReducer