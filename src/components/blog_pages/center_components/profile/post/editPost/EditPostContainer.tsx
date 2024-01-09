import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    setButtonEditPostClick,
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText, setMessage
} from "../../../../../../redux/reducers/postReducer";
import EditPostClass from "./EditPostClass";
import {StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import {EditPost} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state: StateEditPost) => {
    return {
        input_postText : state.post.input_postText,
        input_postPhoto: state.post.input_postPhoto,
        input_postPhotoUrl: state.post.input_postPhotoUrl,
        message: state.post.message
    }
}

const mapDispatchToProps = {
    setInputPostPhoto,
    setInputPostText,
    setInputPostPhotoUrl,
    setInputPostPhotoDelete,
    setInputPostAllPhotoDelete,
    setButtonEditPostClick,
    setMessage,
    EditPost
}

const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPostClass)
export default EditPostContainer









