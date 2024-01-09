import {connect} from "react-redux";
import {StatePhotoProfile} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileClass from "./PhotoProfileClass";
import {setButtonOpenPhoto, setPostUrl, setOnePhotoUrl} from "../../../../../redux/reducers/photoReducer";
import {AuthGetData} from "../../../../../redux/thunk/authThunk";
import {ProfileData} from "../../../../../redux/thunk/profileThunk";
import {GetPhoto, GetPhotoCount} from "../../../../../redux/thunk/photoThunk";

const mapStateToProps = (state: StatePhotoProfile) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        isButtonOpenPhotoPressed: state.photo.isButtonOpenPhotoPressed,
        name: state.profile.name,
    }
}

const mapDispatchToProps = {
    AuthGetData,
    ProfileData,
    GetPhoto,
    GetPhotoCount,
    setButtonOpenPhoto,
    setPostUrl,
    setOnePhotoUrl
}

const PhotoProfileContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoProfileClass)

export default PhotoProfileContainer