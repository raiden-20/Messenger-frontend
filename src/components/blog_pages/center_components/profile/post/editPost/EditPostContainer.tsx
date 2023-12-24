import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateCreatingPost} from "../../../../../../redux/interfaces/post/CreatePost";
import {
    setButtonEditPostClick,
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText
} from "../../../../../../redux/reducers/postReducer";
import EditPostClass from "./EditPostClass";
import {StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";

const mapStateToProps = (state: StateEditPost) => {
    return {
        input_postText : state.post.input_postText,
        input_postPhoto: state.post.input_postPhoto,
        input_postPhotoUrl: state.post.input_postPhotoUrl,
        idPost: state.post.idPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setInputPostPhoto (input_postPhoto: File) {
            dispatch(setInputPostPhoto(input_postPhoto))
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
        }
    }

}

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPostClass)
export default EditPostContainer









