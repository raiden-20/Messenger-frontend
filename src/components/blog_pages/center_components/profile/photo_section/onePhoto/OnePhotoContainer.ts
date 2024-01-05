import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StatePostInPhoto} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {
    setInputPostComment,
    setComments,
    setOneComment,
    deleteOneComment,
    setOnePost,
    addOneComment,
    setOneLikeCountPost,
    setOneLikeCommentPost,
    setOneCommentCountPost,
    setOneCommentUserData
} from "../../../../../../redux/reducers/postReducer";
import OnePhotoClass from "./OnePhotoClass";
import {setButtonOpenPhoto} from "../../../../../../redux/reducers/photoReducer";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";

const mapStateToProps = (state: StatePostInPhoto) => {
    return {
        nickname: state.auth.nickname,
        postId: state.photo.postId,
        comments: state.post.comments,
        name: state.profile.name,
        input_comment: state.post.input_comment,
        onePhotoUrl: state.photo.onePhotoUrl,
        avatarUrl: state.profile.avatarUrl
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setInputPostComment(input_comment : string) {
            dispatch(setInputPostComment(input_comment))
        },
        setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean) {
            dispatch(setButtonOpenPhoto(isButtonOpenPhotoPressed))
        },
        setUserComments(comments : []) {
            dispatch(setComments(comments))
        },
        setOneComment(oneComment: Comment) {
            dispatch(setOneComment(oneComment))
        },
        addOneComment(oneComment: Comment) {
            dispatch(addOneComment(oneComment))
        },
        deleteOneComment(commentId: string) {
            dispatch(deleteOneComment(commentId))
        },
        setOnePost(onePost: Post) {
            dispatch(setOnePost(onePost))
        },
        setOneLikeCountPost(postId: string, likeCount: string) {
            dispatch(setOneLikeCountPost(postId, likeCount))
        },
        setOneLikeCommentPost(commentId: string, likeComment: string) {
            dispatch(setOneLikeCommentPost(commentId, likeComment))
        },
        setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string) {
            dispatch(setOneCommentUserData(commentId, name, nickname, avatarUrl))
        },
        setOneCommentCountPost(postId: string, commentCount: string) {
            dispatch(setOneCommentCountPost(postId, commentCount))
        },
    }

}

const OnePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(OnePhotoClass)

export default OnePhotoContainer