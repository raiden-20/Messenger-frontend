import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StatePostInPhoto} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {setInputPostComment, setUserComments} from "../../../../../../redux/reducers/postReducer";
import OnePhotoClass from "./OnePhotoClass";
import {setButtonOpenPhoto} from "../../../../../../redux/reducers/photoReducer";

const mapStateToProps = (state: StatePostInPhoto) => {
    return {
        nickname: state.auth.nickname,
        postId: state.post.postId,
        userComments: state.post.userComments,
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
        setUserComments(userComments : []) {
            dispatch(setUserComments(userComments))
        },
    }

}

const OnePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(OnePhotoClass)

export default OnePhotoContainer