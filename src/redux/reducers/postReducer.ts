import {Comment} from "../interfaces/profile/post/comments";
import {Post} from "../interfaces/profile/post/post";

const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_USER_COMMENTS'

const SET_ONE_POST = 'SET_POSTS'
const SET_ONE_COMMENT = 'SET_USER_COMMENTS'

const ADD_ONE_POST = 'SET_POSTS'
const ADD_ONE_COMMENT = 'SET_USER_COMMENTS'

const DELETE_ONE_POST = 'DELETE_ONE_POST'
const DELETE_ONE_COMMENT = 'DELETE_ONE_COMMENT'

const SET_POST_INPUT_PHOTO = 'SET_POST_INPUT_PHOTO'
const SET_POST_INPUT_PHOTO_DELETE = 'SET_POST_INPUT_PHOTO_DELETE'
const SET_POST_INPUT_ALL_PHOTO_DELETE = 'SET_POST_INPUT_ALL_PHOTO_DELETE'
const SET_POST_INPUT_PHOTO_URL = 'SET_POST_INPUT_PHOTO_URL'
const SET_POST_INPUT_COMMENT = 'SET_POST_INPUT_COMMENT'
const SET_POST_INPUT_TEXT = 'SET_POST_INPUT_TEXT'

const SET_BUTTON_EDIT_POST = 'SET_BUTTON_EDIT_POST'

const initialState = {
    posts: [],
    comments: [],

    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',
    input_comment: '',

    buttonEditPost: false,
}

const postReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_POSTS : {
            stateCopy.posts = action.posts

            return stateCopy
        }
        case SET_COMMENTS : {
            stateCopy.comments = action.comments

            return stateCopy
        }
        case SET_ONE_POST : {
            // @ts-ignore
            stateCopy= {...state, posts: [...state.posts]}
            // @ts-ignore
            stateCopy.posts[action.postId] = action.onePost
            return stateCopy
        }
        case SET_ONE_COMMENT : {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            // @ts-ignore
            stateCopy.comments[action.commentId] = action.oneComment
            return stateCopy
        }
        case ADD_ONE_POST : {
            // @ts-ignore
            stateCopy= {...state, posts: [...state.posts]}
            // @ts-ignore
            stateCopy.posts.push(action.onePost)
            return stateCopy
        }
        case ADD_ONE_COMMENT : {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            // @ts-ignore
            stateCopy.comments.push(action.oneComment)
            return stateCopy
        }
        case DELETE_ONE_POST : {
            // @ts-ignore
            stateCopy= {...state, posts: [...state.posts]}
            stateCopy.posts.splice(action.postId, 1)
            return stateCopy
        }
        case DELETE_ONE_COMMENT: {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            stateCopy.comments.splice(action.commentId, 1)
            return stateCopy
        }


        case SET_POST_INPUT_PHOTO : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy.input_postPhoto.push(action.input_postPhoto)

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

export const setPosts = (posts: []) => {
    return {
        type: SET_POSTS, posts
    }
}
export const setComments = (comments: []) => {
    return {
        type: SET_COMMENTS, comments
    }
}

export const setOnePost = (onePost: Post, postId: string) => {
    return {
        type: SET_ONE_POST, onePost, postId
    }
}
export const setOneComment = (oneComment: Comment, commentId: string) => {
    return {
        type: SET_ONE_COMMENT, oneComment, commentId
    }
}
export const addOnePost = (onePost: Post) => {
    return {
        type: ADD_ONE_POST, onePost
    }
}
export const addOneComment = (oneComment: Comment) => {
    return {
        type: ADD_ONE_COMMENT, oneComment
    }
}
export const deleteOnePost = (postId: string) => {
    return {
        type: DELETE_ONE_POST, postId
    }
}
export const deleteOneComment = (commentId: string) => {
    return {
        type: DELETE_ONE_COMMENT, commentId
    }
}


export const setInputPostPhoto = (input_postPhoto: File) => {
    return {
        type: SET_POST_INPUT_PHOTO, input_postPhoto
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