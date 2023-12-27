import {Component} from "react";
import {PropsPhotoProfile, StatePhotoProfileClass} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import PhotoProfileComponent from "./PhotoProfileComponent";
import axios from "axios";
import config from "../../../../paths/config";
class PhotoProfileClass extends Component<PropsPhotoProfile, StatePhotoProfileClass> {

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/photo/${localStorage.getItem('idUser')}`, config)
            .then(response =>{
                switch (response.status) {
                    case 200 : {
                        this.props.setPhotoUrl(response.data)
                    }
                }
            }).catch(error => {
                switch (error.response.status){
                    case 403 : {
                        //bad token
                    }
                }
        })

        axios.get(`http://localhost:8080/blog/photo/count/${localStorage.getItem('idUser')}`, config)
            .then(response =>{
                switch (response.status) {
                    case 200 : {
                        this.props.setCountPhoto(response.data)
                    }
                }
            }).catch(error => {
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