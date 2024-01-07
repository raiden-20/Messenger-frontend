import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    setButtonEditPostClick,
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText, setMessage, setOnePost
} from "../../../../../../redux/reducers/postReducer";
import EditPostClass from "./EditPostClass";
import {StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";

const mapStateToProps = (state: StateEditPost) => {
    return {
        input_postText : state.post.input_postText,
        input_postPhoto: state.post.input_postPhoto,
        input_postPhotoUrl: state.post.input_postPhotoUrl,
        message: state.post.message
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setInputPostPhoto (input_postPhoto: File, flag: boolean) {
            dispatch(setInputPostPhoto(input_postPhoto, flag))
        },
        setInputPostText (input_postText: string) {
            dispatch(setInputPostText(input_postText))
        },
        setInputPostPhotoUrl (input_postPhotoUrl: string) {
            dispatch(setInputPostPhotoUrl(input_postPhotoUrl))
        },
        setInputPostPhotoDelete (index: number) {
            dispatch(setInputPostPhotoDelete(index))
        },
        setInputPostAllPhotoDelete () {
            dispatch(setInputPostAllPhotoDelete())
        },
        setButtonEditPostClick(flag: boolean) {
            dispatch(setButtonEditPostClick(flag))
        },
        setOnePost(onePost: Post) {
            dispatch(setOnePost(onePost))
        },
        setMessage(message: string) {
            dispatch(setMessage(message))
        },
    }

}

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPostClass)
export default EditPostContainer









