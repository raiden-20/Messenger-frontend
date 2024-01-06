import {Comment} from "../interfaces/profile/post/comments";
import {Post} from "../interfaces/profile/post/post";
import {SetPhotoInterface} from "../../components/axios/photo/photoInterface";

const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'

const SET_ONE_POST = 'SET_ONE_POST'
const SET_ONE_LIKE_COUNT_POST = 'SET_ONE_LIKE_COUNT_POST'
const SET_ONE_LIKE_COUNT_COMMENT = 'SET_ONE_LIKE_COUNT_COMMENT'
const SET_ONE_COMMENT_COUNT_POST = 'SET_ONE_COMMENT_COUNT_POST'
const SET_ONE_COMMENT = 'SET_ONE_COMMENT'
const SET_ONE_COMMENT_USER_DATA = 'SET_ONE_COMMENT_USER_DATA'

const ADD_ONE_POST = 'ADD_ONE_POST'
const ADD_ONE_COMMENT = 'ADD_ONE_COMMENT'

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
    posts: [{
        postId: '',
        time: '1970-01-01',
        text: '',
        photoUrl: [],
        likeCount: '',
        commentCount: '',
        isLiked: false
    }],
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
            stateCopy= {...state, posts: [...state.posts]}
            for (let index = 0; index < stateCopy.posts.length; index++) {
                // @ts-ignore
                if (stateCopy.posts[index].postId === action.onePost.postId) {
                    // @ts-ignore
                    stateCopy.posts[index] = action.onePost
                }
            }
            return stateCopy
        }
        case SET_ONE_LIKE_COUNT_POST : {
            stateCopy= {...state, posts: [...state.posts]}
            console.log(stateCopy.posts)
            for (let index = 0; index < stateCopy.posts.length; index++) {
                // @ts-ignore
                if (stateCopy.posts[index].postId === action.postId) {
                    // @ts-ignore
                    stateCopy.posts[index].likeCount = action.likeCount
                    // @ts-ignore
                    stateCopy.posts[index].isLiked = !stateCopy.posts[index].isLiked;
                }
            }
            return stateCopy
        }
        case SET_ONE_LIKE_COUNT_COMMENT : {
            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                // @ts-ignore
                if (stateCopy.comments[index].commentId === action.commentId) {
                    // @ts-ignore
                    stateCopy.comments[index].likeCount = action.likeComment
                    // @ts-ignore
                    stateCopy.comments[index].isLiked = !stateCopy.comments[index].isLiked;
                }
            }
            return stateCopy
        }
        case SET_ONE_COMMENT_COUNT_POST : {
            stateCopy= {...state, posts: [...state.posts]}
            for (let index = 0; index < stateCopy.posts.length; index++) {
                // @ts-ignore
                if (stateCopy.posts[index].postId === action.postId) {
                    // @ts-ignore
                    stateCopy.posts[index].commentCount = action.commentCount
                }
            }
            return stateCopy
        }
        case SET_ONE_COMMENT : {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                // @ts-ignore
                if (stateCopy.comments[index].commentId === action.oneComment.commentId) {
                    // @ts-ignore
                    stateCopy.comments[index] = action.oneComment
                }
            }
            return stateCopy
        }
        case SET_ONE_COMMENT_USER_DATA : {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                // @ts-ignore
                if (stateCopy.comments[index].commentId === action.commentId) {
                    // @ts-ignore
                    stateCopy.comments[index].name = action.name
                    // @ts-ignore
                    stateCopy.comments[index].nickname = action.nickname
                    // @ts-ignore
                    stateCopy.comments[index].avatarUrl = action.avatarUrl
                }
            }
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
            for (let index = 0; index < stateCopy.posts.length; index++) {
                // @ts-ignore
                if (stateCopy.posts[index].postId === action.postId) {
                    stateCopy.posts.splice(index, 1)
                    break
                }
            }
            return stateCopy
        }
        case DELETE_ONE_COMMENT: {
            // @ts-ignore
            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                // @ts-ignore
                if (stateCopy.comments[index].commentId === action.commentId) {
                    stateCopy.comments.splice(index, 1)
                    break
                }
            }

            return stateCopy
        }


        case SET_POST_INPUT_PHOTO : {
            // @ts-ignore
            stateCopy = {...state, input_postPhoto: [...state.input_postPhoto]}
            // @ts-ignore
            stateCopy.input_postPhoto.push({
                input_postPhoto : action.input_postPhoto,
                flag: action.flag
            })

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
            stateCopy.input_postPhoto = []

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

export const setOnePost = (onePost: Post) => {
    return {
        type: SET_ONE_POST, onePost
    }
}
export const setOneLikeCountPost = (postId: string, likeCount: string) => {
    return {
        type: SET_ONE_LIKE_COUNT_POST, postId, likeCount
    }
}
export const setOneLikeCommentPost = (commentId: string, likeComment: string) => {
    return {
        type: SET_ONE_LIKE_COUNT_COMMENT, commentId, likeComment
    }
}
export const setOneCommentCountPost = (postId: string, commentCount: string) => {
    return {
        type: SET_ONE_COMMENT_COUNT_POST, postId, commentCount
    }
}
export const setOneComment = (oneComment: Comment) => {
    return {
        type: SET_ONE_COMMENT, oneComment
    }
}
export const setOneCommentUserData = (commentId: string, name: string, nickname: string, avatarUrl: string) => {
    return {
        type: SET_ONE_COMMENT_USER_DATA, commentId, name, nickname, avatarUrl
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

export const setInputPostPhoto = (input_postPhoto: File, flag: boolean) => {
    return {
        type: SET_POST_INPUT_PHOTO, input_postPhoto, flag
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