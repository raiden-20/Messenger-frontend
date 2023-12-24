import {connect} from "react-redux";
import ProfileButtonCreatingPost from "./ProfileButtonCreatingPost";
import {Dispatch} from "redux";
import {StateCreatingPost} from "../../../../../../redux/interfaces/post/CreatePost";
import {
    setInputPostAllPhotoDelete,
    setInputPostPhoto,
    setInputPostPhotoDelete,
    setInputPostPhotoUrl,
    setInputPostText
} from "../../../../../../redux/reducers/postReducer";

const mapStateToProps = (state: StateCreatingPost) => {
    return {
        input_postText : state.post.input_postText,
        input_postPhoto: state.post.input_postPhoto,
        input_postPhotoUrl: state.post.input_postPhotoUrl
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
    }

}

const ProfileButtonCreatingPostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileButtonCreatingPost)
export default ProfileButtonCreatingPostContainer