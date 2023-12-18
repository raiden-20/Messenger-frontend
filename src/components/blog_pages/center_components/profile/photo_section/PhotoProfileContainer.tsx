import {Dispatch} from "redux";
import {connect} from "react-redux";
import {StatePhotoProfile} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfile from "./PhotoProfile";
import {setPhotoUrl, setButtonOpenPhoto, setCountPhoto, setLikedPhoto} from "../../../../../redux/reducers/photoReducer";

const mapStateToProps = (state: StatePhotoProfile) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        isButtonOpenPhotoPressed: state.photo.isButtonOpenPhotoPressed,
        isLiked: state.photo.isLiked,

        name: state.profile.name,
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setPhotoUrl(photoUrl : []) {
            dispatch(setPhotoUrl(photoUrl))
        },
        setCountPhoto (countPhoto : number) {
            dispatch(setCountPhoto(countPhoto))
        },
        setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean) {
            dispatch(setButtonOpenPhoto(isButtonOpenPhotoPressed))
        },
        setLikedPhoto(isLiked : boolean) {
            dispatch(setLikedPhoto(isLiked))
        }
    }

}

const PhotoProfileContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoProfile)

export default PhotoProfileContainer