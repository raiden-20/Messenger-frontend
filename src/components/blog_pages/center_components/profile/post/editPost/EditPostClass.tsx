import {Component} from "react";
import {PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";
import axios from "axios";
import config from "../../../../../paths/config";
class EditPostClass extends Component<PropsEditPost, StateEditPost> {

    setNewPost = () : boolean => { //edit post
        axios.put(`http://localhost:8080/blog/post/${this.props.idPost}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        //ok
                    }
                }
            })
        return false
    }

    render() {
        return<ProfileNewPostComponent input_postPhoto={this.props.input_postPhoto}
                                       input_postPhotoUrl={this.props.input_postPhotoUrl}
                                       input_postText={this.props.input_postText}
                                       setInputPostPhoto={this.props.setInputPostPhoto}
                                       setInputPostText={this.props.setInputPostText}
                                       setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                       setInputPostPhotoDelete={this.props.setInputPostPhotoDelete}
                                       setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                       setButtonCreatPostPressed={this.props.setButtonEditPostClick}
                                       setNewPost={this.setNewPost}/>
    }
}

export default EditPostClass