import {connect} from "react-redux";
import {StateOnePost} from "../../../../../../redux/interfaces/profile/post/post";
import {
    setButtonEditPostClick,
    setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl,
    setInputPostText,} from "../../../../../../redux/reducers/postReducer";
import OnePostClass from "./OnePostClass";
import {
    DeletePost,
    GetCommentsToPost,
    GetPosts,
    LikePost
} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state : StateOnePost) => {
    return {
        myName: state.profile.myName,
        myNickname: state.auth.myNickname,
        myAvatarUrl: state.profile.myAvatarUrl,
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        message: state.auth.message,
        comments: state.post.comments,
        input_comment: state.post.input_comment,
        buttonEditPost: state.post.buttonEditPost,
        posts: state.post.posts
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
    GetPosts
}

const OnePostContainer = connect(mapStateToProps, mapDispatchToProps)(OnePostClass)

export default OnePostContainer