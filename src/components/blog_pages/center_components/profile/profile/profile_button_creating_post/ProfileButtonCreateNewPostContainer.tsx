
import {connect} from "react-redux";
import {setButtonEditPostClick} from "../../../../../../redux/reducers/postReducer";
import ProfileButtonCreatingPostComponent from "./ProfileButtonCreatingPostComponent";
import {StateCreatingPost} from "../../../../../../redux/interfaces/post/CreatePost";

const mapStateToProps = (state: StateCreatingPost) => {
    return {
        buttonEditPost: state.post.buttonEditPost
    }
}

const mapDispatchToProps = {
    setButtonEditPostClick
}

const ProfileNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileButtonCreatingPostComponent)

export default ProfileNewPostContainer