import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateCreatingPost} from "../../../../../../redux/interfaces/post/CreatePost";
import {
    addOnePost, setButtonEditPostClick,
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText, setMessage, setPosts
} from "../../../../../../redux/reducers/postReducer";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";
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
    setButtonEditPostClick,
    setInputPostPhoto,
    setInputPostText,
    setInputPostPhotoUrl,
    setInputPostPhotoDelete,
    setInputPostAllPhotoDelete,
    setMessage
}

const ProfileButtonCreatingPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileNewPostClass)
export default ProfileButtonCreatingPostContainer