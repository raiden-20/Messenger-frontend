import {Component} from "react";
import {PropsPhotoProfile, StatePhotoProfileClass} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileComponent from "./PhotoProfileComponent";
import {GetPhotoAxios, GetPhotoCountAxios} from "../../../../axios/photo/PhotoAxios";
import {ProfileGetDataAxios} from "../../../../axios/profile/ProfileAxios";
class PhotoProfileClass extends Component<PropsPhotoProfile, StatePhotoProfileClass> {

    componentDidMount() {
        let dataPromise = ProfileGetDataAxios({
            id: localStorage.getItem('idUser') as string
        })
        dataPromise.then(responseSocial => {
            switch (responseSocial[0]) {
                case 200 : {
                    this.props.setName(responseSocial[1].name)
                }
            }
        })

        let photo = GetPhotoAxios({
            id: localStorage.getItem('idUser') as string
        })
        photo.then(response => {
            this.props.setPhotoUrl(response)
        })
        GetPhotoCountAxios({
            setCountPhoto: this.props.setCountPhoto
        })
    }

    render() {
        return <PhotoProfileComponent name={this.props.name}
                                      countPhoto={this.props.countPhoto}
                                      photoUrl={this.props.photoUrl}
                                      setButtonOpenPhoto={this.props.setButtonOpenPhoto}
                                      isButtonOpenPhotoPressed={this.props.isButtonOpenPhotoPressed}
                                      setPostUrl={this.props.setPostUrl}
                                      setOnePhotoUrl={this.props.setOnePhotoUrl}/>
    }
}

export default PhotoProfileClass