import {Component} from "react";
import {PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";
import {DeletePhotoPostAxios} from "../../../../../axios/photo/PhotoAxios";
import {EditPostAxios, GetPostDataAxios} from "../../../../../axios/post/PostAxios";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
class EditPostClass extends Component<PropsEditPost, StateEditPost> {
    deletePhotoPostUrl: string[] = []

    setDeletePhoto = (url: string) => {
        this.deletePhotoPostUrl.push(url)
    }

    setInputPostPhotoDelete = (index: number) => {
        this.setDeletePhoto(this.props.input_postPhotoUrl[index])
        this.props.setInputPostPhotoDelete(index)
    }

    setNewPost = () : boolean => { //edit post
        let postData = GetPostDataAxios({
            postId: this.props.postId
        })
        postData.then(response => {
            if (response !== null) {
                this.deletePhotoPostUrl.map((data: string) => {
                    response.photoUrl.map((url: PostPhoto) => {
                        if (data === url.url) {
                            DeletePhotoPostAxios({
                                url: data,
                                photoId: url.photoId,
                                postId: this.props.postId,
                            })
                        }
                    })
                })
                this.props.setInputPostText('')
            }
        })

        return EditPostAxios({
            postId: this.props.postId,
            input_postText: this.props.input_postText,
            input_postPhoto: this.props.input_postPhoto,
            setButtonCreatPostPressed: this.props.setButtonEditPostClick,
            setOnePost: this.props.setOnePost
        })
    }

    render() {
        return<ProfileNewPostComponent input_postPhoto={this.props.input_postPhoto}
                                       input_postPhotoUrl={this.props.input_postPhotoUrl}
                                       input_postText={this.props.input_postText}
                                       setInputPostPhoto={this.props.setInputPostPhoto}
                                       setInputPostText={this.props.setInputPostText}
                                       setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                       setInputPostPhotoDelete={this.setInputPostPhotoDelete}
                                       setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                       setButtonCreatPostPressed={this.props.setButtonEditPostClick}
                                       setNewPost={this.setNewPost}/>
    }
}

export default EditPostClass