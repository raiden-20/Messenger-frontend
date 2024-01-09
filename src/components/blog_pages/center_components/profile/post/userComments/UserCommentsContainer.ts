import {connect} from "react-redux";
import { StateOnePost} from "../../../../../../redux/interfaces/profile/post/post";
import {
    setInputPostComment,
    setInputPostPhoto,
    setInputPostPhotoUrl,
    setInputPostText
} from "../../../../../../redux/reducers/postReducer";
import {DeletePost, GetCommentsToPost, LikePost, SetComment} from "../../../../../../redux/thunk/postThunk";
import UserCommentsClass from "./UserCommentsClass";

const mapStateToProps = (state : StateOnePost) => {
    return {
        myName: state.profile.myName,
        myNickname: state.auth.myNickname,
        myAvatarUrl: state.profile.myAvatarUrl,
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        comments: state.post.comments,
        input_comment: state.post.input_comment
    }
}

const mapDispatchToProps = {
    GetCommentsToPost,
    LikePost,
    DeletePost,
    SetComment,
    setInputPostPhotoUrl,
    setInputPostPhoto,
    setInputPostText,
    setInputPostComment,
}

const UserCommentsContainer = connect(mapStateToProps, mapDispatchToProps)(UserCommentsClass)

export default UserCommentsContainer