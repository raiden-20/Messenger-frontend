import {Component} from "react";
import {PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";
import {Photo} from "../../../../../../axios/photo/PhotoAxios";
import {Blog} from "../../../../../../axios/post/PostAxios";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";
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
        Blog.EditPostAxios({
            postId: this.props.postId,
            input_postText: this.props.input_postText,
            input_postPhoto: this.props.input_postPhoto
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    let onePost: Post = {
                        postId: this.props.postId,
                        time: '1970-01-01',
                        text: this.props.input_postText,
                        photoUrl: [],
                        likeCount: '',
                        commentCount: '',
                        isLiked: false
                    }
                    Blog.GetPostDataAxios({
                        postId: this.props.postId
                    }).then(response => {
                        switch (response[0]) {
                            case 200: {
                                onePost.likeCount = response[1].likeCount
                                onePost.commentCount = response[1].commentCount
                                onePost.isLiked = response[1].isLiked

                                this.deletePhotoPostUrl.map((data: string) => {
                                    response[1].photoUrl.map((url: PostPhoto) => {
                                        if (data === url.url) {
                                            Photo.DeletePhotoPostAxios({
                                                url: data,
                                                photoId: url.photoId,
                                                postId: this.props.postId,
                                            }).then(response => {
                                                switch (response[0]) {
                                                    case 200 : {
                                                        //ok
                                                        break
                                                    }
                                                    case 400 : {
                                                        this.props.setMessage('Плохое имя файла, выберите другой')
                                                        break
                                                    }
                                                    case 401: {
                                                        // bad token
                                                        break
                                                    }
                                                }
                                            })
                                        }
                                    })
                                })
                                this.props.setInputPostText('')
                            }
                        }
                    })
                    for(let i = 0; i < this.props.input_postPhoto.length; i++) {
                        if (!this.props.input_postPhoto[i].flag) {
                            Photo.SetPostPhotoAxios({
                                input_postPhoto: this.props.input_postPhoto[i].input_postPhoto,
                                postId:this.props.postId
                            }).then(response => {
                                switch (response[0]) {
                                    case 200 : {
                                        break
                                    }
                                    case 400 : {
                                        if (response[1] === 'File too big') {
                                            this.props.setMessage('Файл слишком большой')
                                        } else if (response[1] === 'Bad file name') {
                                            this.props.setMessage('Плохое имя файла, выберите другой')
                                        }
                                        break
                                    }
                                    case 401: {
                                        // bad token
                                        break
                                    }
                                }
                            })
                        }
                    }
                    setTimeout(() => {
                        Blog.GetPostDataAxios({
                            postId: this.props.postId
                        }).then(response => {
                            switch (response[0]) {
                                case 200: {
                                    onePost.photoUrl = response[1].photoUrl
                                }
                            }
                        })
                    }, 3000)
                    this.props.setOnePost(onePost)
                    return true
                }
                case 400 : {
                    //todo post doesn't exist
                    break
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
                                       setInputPostPhotoDelete={this.setInputPostPhotoDelete}
                                       setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                       setButtonCreatPostPressed={this.props.setButtonEditPostClick}
                                       setNewPost={this.setNewPost}
                                       message={this.props.message}
                                       setMessage={this.props.setMessage}/>
    }
}

export default EditPostClass