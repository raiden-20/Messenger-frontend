import {connect} from "react-redux";
import {StateOnePost} from "../../../../../../redux/interfaces/profile/post/post";
import {
    setButtonEditPostClick,
    setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl,
    setInputPostText,} from "../../../../../../redux/reducers/postReducer";
import OnePostClass from "./OnePostClass";
import {DeletePost, GetCommentsToPost, LikePost} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state : StateOnePost) => {
    return {
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        message: state.auth.message,
        comments: state.post.comments,
        buttonEditPost: state.post.buttonEditPost,
        input_comment: state.post.input_comment
    }
}

const mapDispatchToProps = {
    GetCommentsToPost,
    LikePost,
    DeletePost,
    setInputPostPhotoUrl,
    setInputPostPhoto,
    setInputPostText,
    setInputPostComment,
    setButtonEditPostClick,
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(OnePostClass)

export default PostContainer