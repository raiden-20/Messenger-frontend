import {Component} from "react";
import {PropsPhotoProfile, StatePhotoProfileClass} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileComponent from "./PhotoProfileComponent";
class PhotoProfileClass extends Component<PropsPhotoProfile, StatePhotoProfileClass> {

    componentDidMount() {
        this.props.AuthGetData(localStorage.getItem('idUser') as string)
        this.props.ProfileData(localStorage.getItem('idUser') as string)
        this.props.GetPhoto()
        this.props.GetPhotoCount()
    }

    render() {
        return <PhotoProfileComponent name={this.props.name}
                                      countPhoto={this.props.countPhoto}
                                      photoUrl={this.props.photoUrl}
                                      setButtonOpenPhoto={this.props.setButtonOpenPhoto}
                                      isButtonOpenPhotoPressed={this.props.isButtonOpenPhotoPressed}
                                      setPostUrl={this.props.setPostUrl}
                                      setOnePhotoUrl={this.props.setOnePhotoUrl} />
    }
}

export default PhotoProfileClass