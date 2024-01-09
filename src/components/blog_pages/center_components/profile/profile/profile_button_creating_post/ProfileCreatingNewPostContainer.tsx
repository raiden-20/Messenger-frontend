import {connect} from "react-redux";
import ProfileButtonCreatingPostComponent from "./ProfileButtonCreatingPostComponent";
import {setButtonCreatePostClick} from "../../../../../../redux/reducers/postReducer";
import {StateButtonNewPost} from "../../../../../../redux/interfaces/post/CreatePost";


const mapStateToProps = (state: StateButtonNewPost) => {
    return {
        buttonCreatePost: state.post.buttonCreatePost
    }
}

const mapDispatchToProps = {
    setButtonCreatePostClick
}

const ProfileButtonCreatingPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileButtonCreatingPostComponent)
export default ProfileButtonCreatingPostContainer