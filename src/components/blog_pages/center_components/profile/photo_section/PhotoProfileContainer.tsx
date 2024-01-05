import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StatePhotoProfile} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileClass from "./PhotoProfileClass";
import {
    setPhotoUrl,
    setButtonOpenPhoto,
    setCountPhoto,
    setPostUrl, setOnePhotoUrl
} from "../../../../../redux/reducers/photoReducer";
import {setName} from "../../../../../redux/reducers/profileReducer";
import {setOneCommentUserData} from "../../../../../redux/reducers/postReducer";

const mapStateToProps = (state: StatePhotoProfile) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        isButtonOpenPhotoPressed: state.photo.isButtonOpenPhotoPressed,
        name: state.profile.name,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setPhotoUrl(photoUrl: []) {
            dispatch(setPhotoUrl(photoUrl))
        },
        setName(name: string) {
            dispatch(setName(name))
        },
        setCountPhoto(countPhoto: number) {
            dispatch(setCountPhoto(countPhoto))
        },
        setButtonOpenPhoto(isButtonOpenPhotoPressed: boolean) {
            dispatch(setButtonOpenPhoto(isButtonOpenPhotoPressed))
        },
        setPostUrl(postId: string) {
            dispatch(setPostUrl(postId))
        },
        setOnePhotoUrl(onePhotoUrl: string) {
            dispatch(setOnePhotoUrl(onePhotoUrl))
        },
    }

}

const PhotoProfileContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoProfileClass)

export default PhotoProfileContainer