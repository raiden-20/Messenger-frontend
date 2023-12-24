import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StatePost} from "../../../../../../redux/interfaces/profile/post/post";
import Post from "./Post";
import {setMessage} from "../../../../../../redux/reducers/authReducer";
import {
    setButtonEditPostClick, setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl, setInputPostText,
    setPosts,
    setUserComments
} from "../../../../../../redux/reducers/postReducer";

const mapStateToProps = (state : StatePost) => {
    return {
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        message: state.auth.message,
        userComments: state.post.userComments,
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
        setUserComments(userComments: []) {
            dispatch(setUserComments(userComments))
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
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer