
const SET_POSTS = 'SET_POSTS'
const SET_USER_COMMENTS = 'SET_USER_COMMENTS'
const SET_POST_INPUT_PHOTO = 'SET_POST_INPUT_PHOTO'
const SET_POST_INPUT_PHOTO_DELETE = 'SET_POST_INPUT_PHOTO_DELETE'
const SET_POST_INPUT_ALL_PHOTO_DELETE = 'SET_POST_INPUT_ALL_PHOTO_DELETE'
const SET_POST_INPUT_PHOTO_URL = 'SET_POST_INPUT_PHOTO_URL'
const SET_POST_INPUT_COMMENT = 'SET_POST_INPUT_COMMENT'
const SET_POST_INPUT_TEXT = 'SET_POST_INPUT_TEXT'

const SET_BUTTON_EDIT_POST = 'SET_BUTTON_EDIT_POST'

const initialState = {
    posts: [
        {idPost: 1, time: '2023-11-12', text: 'hi bitch', photoUrl: ['s', 'dd', 'd'], likesCount: 5, commentCount: 1, isLikes: false}
    ],

    userComments: [
        {comment_id: 1, user_id: 2, text: 'cat is so awesome', time: '2023-12-16', countLikes: 3, isLiked: true},
        {comment_id: 2, user_id: 2, text: 'cat is so awesome', time: '2023-12-16', countLikes: 3, isLiked: true}
    ],

    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',
    input_comment: '',

    buttonEditPost: false
}

const postReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_POSTS : {
            stateCopy.posts = action.posts

            return stateCopy
        }
        case SET_POST_INPUT_PHOTO : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy.input_postPhoto.push(action.input_postPhoto)

            return stateCopy
        }
        case SET_USER_COMMENTS : {
            // @ts-ignore
            stateCopy = {...state, userComments: [...state.userComments]}

            return stateCopy
        }
        case SET_POST_INPUT_PHOTO_URL : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy.input_postPhotoUrl.push(action.input_postPhotoUrl)

            return stateCopy
        }
        case SET_POST_INPUT_PHOTO_DELETE : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy.input_postPhotoUrl.splice(action.index, 1)
            stateCopy.input_postPhoto.splice(action.index, 1)

            return stateCopy
        }
        case SET_POST_INPUT_ALL_PHOTO_DELETE : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            stateCopy.input_postPhotoUrl = []

            return stateCopy
        }
        case SET_POST_INPUT_TEXT : {
            stateCopy.input_postText = action.input_postText

            return stateCopy
        }
        case SET_POST_INPUT_COMMENT : {
            stateCopy.input_comment = action.input_comment

            return stateCopy
        }

        case SET_BUTTON_EDIT_POST : {
            stateCopy.buttonEditPost = action.buttonEditPost

            return stateCopy
        }
        default : {
            return stateCopy
        }
    }
}

export const setInputPostPhoto = (input_postPhoto: File) => {
    return {
        type: SET_POST_INPUT_PHOTO, input_postPhoto
    }
}
export const setPosts = (posts: []) => {
    return {
        type: SET_POSTS, posts
    }
}
export const setUserComments = (userComments: []) => {
    return {
        type: SET_POSTS, userComments
    }
}
export const setInputPostPhotoDelete = (index: number) => {
    return {
        type: SET_POST_INPUT_PHOTO_DELETE, index
    }
}
export const setInputPostAllPhotoDelete = () => {
    return {
        type: SET_POST_INPUT_ALL_PHOTO_DELETE
    }
}
export const setInputPostPhotoUrl = (input_postPhotoUrl: string) => {
    return {
        type: SET_POST_INPUT_PHOTO_URL, input_postPhotoUrl
    }
}
export const setInputPostText = (input_postText: string) => {
    return {
        type: SET_POST_INPUT_TEXT, input_postText
    }
}
export const setInputPostComment = (input_comment: string) => {
    return {
        type: SET_POST_INPUT_COMMENT, input_comment
    }
}

export const setButtonEditPostClick = (buttonEditPost: boolean) => {
    return {
        type: SET_BUTTON_EDIT_POST, buttonEditPost
    }
}

export default postReducer