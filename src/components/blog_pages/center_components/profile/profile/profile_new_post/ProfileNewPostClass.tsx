import React, {Component} from "react";
import {
    PropsCreatePostButtonClass,
    StateCreatingPostClass
} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostComponent from "./ProfileNewPostComponent";
import axios from "axios";
import config from "../../../../../paths/config";

class ProfileNewPostClass extends Component<PropsCreatePostButtonClass, StateCreatingPostClass> {
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
        }
    };

    setNewPost = (): boolean => {
        axios.post('http://localhost:8080/blog/post/create', {
            text: this.props.input_postText
        }, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setInputPostText('')
                        for(let i = 0; i < this.props.input_postPhoto.length; i++) {
                            let formData = new FormData()
                            formData.append('file', this.props.input_postPhoto[i])
                            formData.append('postId', response.data)
                            axios.post('http://localhost:8080/file/blog', formData, this.config)
                                .then(response => {

                                }).catch(error => {
                                debugger
                                alert(error)
                            })
                        }
                        axios.get(`http://localhost:8080/blog/user/${localStorage.getItem('idUser')}`, config)
                            .then(response => {
                                switch (response.status) {
                                    case 200: {
                                        this.props.setPosts(response.data)
                                    }
                                }
                            }).catch(error => {
                            debugger
                        })
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