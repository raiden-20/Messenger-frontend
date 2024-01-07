import {Component} from "react";
import {PropsPhotoProfile, StatePhotoProfileClass} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileComponent from "./PhotoProfileComponent";
import {Photo} from "../../../../../axios/photo/PhotoAxios";
import {Profile} from "../../../../../axios/profile/ProfileAxios";
import {Auth} from "../../../../../axios/auth/AuthAxios";
class PhotoProfileClass extends Component<PropsPhotoProfile, StatePhotoProfileClass> {

    componentDidMount() {
        Auth.AuthDataAxios({
            id: localStorage.getItem('idUser') as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setNickname(response[1].nickname)
                    this.props.setEmail(response[1].email)
                    break
                }
                case 401: {

                }
            }
        })

        Profile.ProfileGetDataAxios({
            id: localStorage.getItem('idUser') as string
        }).then(responseSocial => {
            switch (responseSocial[0]) {
                case 200 : {
                    this.props.setUserData(responseSocial[1].name,
                        responseSocial[1].birthDate,
                        responseSocial[1].bio,
                        responseSocial[1].avatarUrl,
                        responseSocial[1].coverUrl,
                        responseSocial[1].status)
                    break
                }
                case 400: {
                    // user doesn't exist
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
        })

        Photo.GetPhotoAxios({
            id: localStorage.getItem('idUser') as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setPhotoUrl(response[1])
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }

        })
        Photo.GetPhotoCountAxios().then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setCountPhoto(response[1])
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
        })
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