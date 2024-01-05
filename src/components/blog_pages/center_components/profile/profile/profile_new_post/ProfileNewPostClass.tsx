import React, {Component} from "react";
import {
    PropsCreatePostButtonClass,
    StateCreatingPostClass
} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostComponent from "./ProfileNewPostComponent";
import {NewPostAxios} from "../../../../../axios/post/PostAxios";

class ProfileNewPostClass extends Component<PropsCreatePostButtonClass, StateCreatingPostClass> {

    setNewPost = (): boolean => {
        return NewPostAxios({
            input_postText: this.props.input_postText,
            input_postPhoto: this.props.input_postPhoto,
            addOnePost: this.props.addOnePost,
            setInputPostText: this.props.setInputPostText,
            setButtonCreatPostPressed: this.props.setButtonCreatPostPressed
        })
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