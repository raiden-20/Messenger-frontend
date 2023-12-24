import React, {Component} from "react";
import {
    PropsCreatePostButtonClass,
    StateCreatingPostClass
} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostComponent from "./ProfileNewPostComponent";
import axios from "axios";
import config from "../../../../../paths/config";
class ProfileNewPostClass extends Component<PropsCreatePostButtonClass, StateCreatingPostClass> {
    setNewPost = () : boolean => {
        let formData = new FormData()
        this.props.input_postPhoto.map((photo, i) => (
            formData.append('photo' + (i + 1), photo)
        ))


        axios.post('http://localhost:8080/blog/post/create', {
            text: this.props.input_postText,
            photo: formData}, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        // ok
                        return true
                    }
                }
            }).catch(error => {
                switch (error.response.status) {
                    case 400: {
                        // too many characters
                        // file too big
                        break
                    }
                    case 403: {
                        // bad token
                        break
                    }
                }
                return false
        })
        return false
    }
    render() {
        return <ProfileNewPostComponent setButtonCreatPostPressed={this.props.setButtonCreatPostPressed}
                                        setInputPostPhoto={this.props.setInputPostPhoto}
                                        setInputPostText={this.props.setInputPostText}
                                        input_postPhoto={this.props.input_postPhoto}
                                        input_postText={this.props.input_postText}
                                        input_postPhotoUrl={this.props.input_postPhotoUrl}
                                        setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                        setInputPostPhotoDelete={this.props.setInputPostPhotoDelete}
                                        setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                        setNewPost={this.setNewPost}/>
    }
}

export default ProfileNewPostClass