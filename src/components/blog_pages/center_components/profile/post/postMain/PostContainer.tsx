import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Post, StatePost} from "../../../../../../redux/interfaces/profile/post/post";
import PostClass from "./PostClass";
import {setMessage} from "../../../../../../redux/reducers/authReducer";
import {
    setButtonEditPostClick, setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl, setInputPostText,
    setPosts,
    setComments, deleteOnePost, deleteOneComment, setOnePost, setOneComment, addOneComment
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
        setInputPostPhoto(input_postPhoto: File) {
            dispatch(setInputPostPhoto(input_postPhoto))
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
        setOnePost(onePost: Post, postId: string) {
            dispatch(setOnePost(onePost, postId))
        },
        setOneComment(oneComment: Comment, commentId: string) {
            dispatch(setOneComment(oneComment, commentId))
        },
        addOneComment(oneComment: Comment) {
            dispatch(addOneComment(oneComment))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostClass)

export default PostContainer