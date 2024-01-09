import {Component} from "react";
import {PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";

class EditPostClass extends Component<PropsEditPost, StateEditPost> {
    deletePhotoPostUrl: string[] = []

    setDeletePhoto = (url: string) => {
        this.deletePhotoPostUrl.push(url)
    }

    setInputPostPhotoDelete = (index: number) => {
        this.setDeletePhoto(this.props.input_postPhotoUrl[index])
        this.props.setInputPostPhotoDelete(index)
    }

    setNewPost = () => { //edit post
        this.props.EditPost(this.props.postId, this.props.input_postText, this.props.input_postPhoto, this.deletePhotoPostUrl)
        this.props.setButtonChange(false) // todo потом исправить нормально
    }

    changePost = () => {
        this.props.setButtonEditPostClick(this.props.postId, false)
        this.props.setButtonChange(false)
    }

    render() {
        return <ProfileNewPostComponent input_postPhoto={this.props.input_postPhoto}
                                        input_postPhotoUrl={this.props.input_postPhotoUrl}
                                        input_postText={this.props.input_postText}
                                        setInputPostPhoto={this.props.setInputPostPhoto}
                                        setInputPostText={this.props.setInputPostText}
                                        setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                        setInputPostPhotoDelete={this.setInputPostPhotoDelete}
                                        setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                        changePost={this.changePost}
                                        setNewPost={this.setNewPost}
                                        message={this.props.message}
                                        setMessage={this.props.setMessage}/>
    }
}

export default EditPostClass