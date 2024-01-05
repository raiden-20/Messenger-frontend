import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Post, StatePost} from "../../../../../../redux/interfaces/profile/post/post";
import PostClass from "./PostClass";
import {setMessage} from "../../../../../../redux/reducers/authReducer";
import {
    setButtonEditPostClick,
    setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl,
    setInputPostText,
    setPosts,
    setComments,
    deleteOnePost,
    deleteOneComment,
    setOnePost,
    setOneComment,
    addOneComment,
    setOneLikeCountPost, setOneLikeCommentPost, setOneCommentCountPost, setOneCommentUserData
} from "../../../../../../redux/reducers/postReducer";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";

const mapStateToProps = (state : StatePost) => {
    return {
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        message: state.auth.message,
        comments: state.post.comments,
        posts: state.post.posts,
        buttonEditPost: state.post.buttonEditPost,
        input_comment: state.post.input_comment
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setMessage(message: string) {
            dispatch(setMessage(message))
        },
        setPosts(posts: []) {
            dispatch(setPosts(posts))
        },
        setUserComments(comments: []) {
            dispatch(setComments(comments))
        },
        setInputPostPhotoUrl(input_postPhotoUrl: string) {
            dispatch(setInputPostPhotoUrl(input_postPhotoUrl))
        },
        setInputPostPhoto(input_postPhoto: File, flag: boolean) {
            dispatch(setInputPostPhoto(input_postPhoto, flag))
        },
        setInputPostText(input_postText: string) {
            dispatch(setInputPostText(input_postText))
        },
        setInputPostComment(input_comment: string) {
            dispatch(setInputPostComment(input_comment))
        },
        setButtonEditPostClick(flag: boolean) {
            dispatch(setButtonEditPostClick(flag))
        },
        deleteOnePost (postId: string) {
            dispatch(deleteOnePost(postId))
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
        setOneCommentCountPost(postId: string, commentCount: string) {
            dispatch(setOneCommentCountPost(postId, commentCount))
        },
        setOneComment(oneComment: Comment) {
            dispatch(setOneComment(oneComment))
        },
        setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string) {
            dispatch(setOneCommentUserData(commentId, name, nickname, avatarUrl))
        },
        addOneComment(oneComment: Comment) {
            dispatch(addOneComment(oneComment))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostClass)

export default PostContainer