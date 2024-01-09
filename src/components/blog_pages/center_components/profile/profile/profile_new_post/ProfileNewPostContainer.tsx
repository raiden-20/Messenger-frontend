import {connect} from "react-redux";
import {StateCreatingPost} from "../../../../../../redux/interfaces/post/CreatePost";
import {
    setButtonCreatePostClick,
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText, setMessage
} from "../../../../../../redux/reducers/postReducer";
import ProfileNewPostClass from "./ProfileNewPostClass";
import {CreatePost} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state: StateCreatingPost) => {
    return {
        input_postText : state.post.input_postText,
        input_postPhoto: state.post.input_postPhoto,
        input_postPhotoUrl: state.post.input_postPhotoUrl,
        message: state.post.message,
        buttonEditPost: state.post.buttonEditPost
    }
}

const mapDispatchToProps = {
    CreatePost,
    setInputPostPhoto,
    setInputPostText,
    setInputPostPhotoUrl,
    setInputPostPhotoDelete,
    setInputPostAllPhotoDelete,
    setMessage,
    setButtonCreatePostClick
}

const ProfileNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileNewPostClass)
export default ProfileNewPostContainer