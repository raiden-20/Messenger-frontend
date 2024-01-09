import {connect} from "react-redux";
import OneUserCommentClass from "./OneUserCommentClass";
import {DeleteComment, GetOneCommentData, LikeComment} from "../../../../../../redux/thunk/postThunk";
import {StateOneComment} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";

const mapStateToProps = (state: StateOneComment) => {
    return {
        postId: state.photo.postId
    }
}

const mapDispatchToProps = {
    LikeComment,
    DeleteComment,
    GetOneCommentData
}

const OneUserCommentContainer = connect(mapStateToProps, mapDispatchToProps)(OneUserCommentClass)

export default OneUserCommentContainer