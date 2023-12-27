import {Component} from "react";
import {deleteData, PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";
import axios from "axios";
import config from "../../../../../paths/config";
class EditPostClass extends Component<PropsEditPost, StateEditPost> {
    config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
        }
    };

    setNewPost = () : boolean => { //edit post
        this.props.deletePhotoPostUrl.map((data: deleteData) => {
            axios.delete('http://localhost:8080/file/blog', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'

                },
                data: {
                    url: data.url,
                    photoId: data.photoId,
                    postId: data.postId
                }
            }).then(response => {
                this.props.setDeletePhotoPostUrl(null)
            }).catch(error => {
            })
        })
        this.props.setInputPostText('')
        axios.put(`http://localhost:8080/blog/post`, {
            postId: this.props.postId,
            text: this.props.input_postText
        },config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.input_postPhoto.map(file => {
                            let formDataAvatar = new FormData()
                            formDataAvatar.append('file', file)
                            formDataAvatar.append('postId', this.props.postId)

                            axios.post('http://localhost:8080/file/blog', formDataAvatar, this.config)
                                .then(response => {
                                    this.props.setInputPostAllPhotoDelete()
                            }).catch(error => {
                                debugger
                            })
                        })

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