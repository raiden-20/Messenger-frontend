const SET_POSTS = 'SET_POSTS'
const SET_USER_COMMENTS = 'SET_USER_COMMENTS'
const SET_COMMENT_NAME = 'SET_COMMENT_NAME'
const SET_COMMENT_NICKNAME = 'SET_COMMENT_NICKNAME'
const SET_COMMENT_AVATAR_URL = 'SET_COMMENT_AVATAR_URL'
const SET_POST_INPUT_PHOTO = 'SET_POST_INPUT_PHOTO'
const SET_POST_INPUT_PHOTO_DELETE = 'SET_POST_INPUT_PHOTO_DELETE'
const SET_POST_INPUT_ALL_PHOTO_DELETE = 'SET_POST_INPUT_ALL_PHOTO_DELETE'
const SET_POST_INPUT_PHOTO_URL = 'SET_POST_INPUT_PHOTO_URL'
const SET_POST_INPUT_COMMENT = 'SET_POST_INPUT_COMMENT'
const SET_POST_INPUT_TEXT = 'SET_POST_INPUT_TEXT'

const SET_BUTTON_EDIT_POST = 'SET_BUTTON_EDIT_POST'
const SET_DELETE_PHOTO_POST_URL = 'SET_DELETE_PHOTO_POST_URL'

const initialState = {
    posts: [],

    postId: '',
    commentId: '',

    isLikedPost: false,
    likeCount: 0,
    commentCount: 0,
    isLikedComment: false,


    userComments: [],
    commentName : '',
    commentNickname: '',
    commentAvatarUrl: '',

    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',
    input_comment: '',

    buttonEditPost: false,

    deletePhotoPostUrl: []
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
            stateCopy.userComments = action.userComments

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
        case SET_DELETE_PHOTO_POST_URL: {
            // @ts-ignore
            stateCopy = {...state, deletePhotoPostUrl: [...state.deletePhotoPostUrl]}
            action.deletePhotoPostUrl === null ? stateCopy.deletePhotoPostUrl = [] :
                // @ts-ignore
            stateCopy.deletePhotoPostUrl.push(action.deletePhotoPostUrl)

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
        case SET_COMMENT_NAME : {
            stateCopy.commentName = action.commentName

            return stateCopy
        }
        case SET_COMMENT_NICKNAME : {
            stateCopy.commentNickname = action.commentNickname

            return stateCopy
        }
        case SET_COMMENT_AVATAR_URL : {
            stateCopy.commentAvatarUrl = action.commentAvatarUrl

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
        type: SET_USER_COMMENTS, userComments
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
export const setCommentName = (commentName: string) => {
    return {
        type: SET_COMMENT_NAME, commentName
    }
}
export const setCommentNickname = (commentNickname: string) => {
    return {
        type: SET_COMMENT_NICKNAME, commentNickname
    }
}
export const setCommentAvatarUrl = (commentAvatarUrl: string) => {
    return {
        type: SET_COMMENT_AVATAR_URL, commentAvatarUrl
    }
}
export const setDeletePhotoPostUrl = (deletePhotoPostUrl: {} | null) => {
    return {
        type: SET_DELETE_PHOTO_POST_URL, deletePhotoPostUrl
    }
}

export default postReducer