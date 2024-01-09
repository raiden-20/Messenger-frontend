import {connect} from "react-redux";
import {StatePostInPhoto} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {
    setInputPostComment
} from "../../../../../../redux/reducers/postReducer";
import OnePhotoClass from "./OnePhotoClass";
import {setButtonOpenPhoto} from "../../../../../../redux/reducers/photoReducer";
import {GetCommentsToPost, GetOnePostData, LikePost, SetComment} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state: StatePostInPhoto) => {

    return {
        nickname: state.auth.nickname,
        postId: state.photo.postId,
        comments: state.post.comments,
        name: state.profile.name,
        input_comment: state.post.input_comment,
        onePhotoUrl: state.photo.onePhotoUrl,
        avatarUrl: state.profile.avatarUrl,
        // @ts-ignore
        post: state.post.posts[0] // todo разобраться
    }
}

const mapDispatchToProps = {
    GetOnePostData,
    GetCommentsToPost,
    SetComment,
    LikePost,
    setButtonOpenPhoto,
    setInputPostComment
}

const OnePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(OnePhotoClass)

export default OnePhotoContainer