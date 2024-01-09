import React, {Component} from "react";
import {
    PropsCreatePostButtonClass,
    StateCreatingPostClass
} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostComponent from "./ProfileNewPostComponent";

class ProfileNewPostClass extends Component<PropsCreatePostButtonClass, StateCreatingPostClass> {

    setNewPost = (): void => {
        this.props.CreatePost(this.props.input_postText, this.props.input_postPhoto)
    }

    render() {
        return <ProfileNewPostComponent setButtonEditPostClick={this.props.setButtonEditPostClick}
                                        setInputPostPhoto={this.props.setInputPostPhoto}
                                        setInputPostText={this.props.setInputPostText}
                                        input_postPhoto={this.props.input_postPhoto}
                                        input_postText={this.props.input_postText}
                                        input_postPhotoUrl={this.props.input_postPhotoUrl}
                                        setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                        setInputPostPhotoDelete={this.props.setInputPostPhotoDelete}
                                        setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                        setNewPost={this.setNewPost}
                                        message={this.props.message}
                                        setMessage={this.props.setMessage}/>
    }
}

export default ProfileNewPostClass