import React, {Component} from "react";
import {
    PropsCreatePostButtonClass,
    StateCreatingPostClass
} from "../../../../../../redux/interfaces/post/CreatePost";
import ProfileNewPostComponent from "./ProfileNewPostComponent";
import {Blog} from "../../../../../../axios/post/PostAxios";
import {Photo} from "../../../../../../axios/photo/PhotoAxios";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";

class ProfileNewPostClass extends Component<PropsCreatePostButtonClass, StateCreatingPostClass> {

    setNewPost = (): boolean => {

        Blog.NewPostAxios({
            input_postText: this.props.input_postText
        }).then(response => {
            switch (response[0]) {
                case 200: {
                    this.props.setInputPostText('')
                    for(let i = 0; i < this.props.input_postPhoto.length; i++) {
                        Photo.SetPostPhotoAxios({
                            input_postPhoto: this.props.input_postPhoto[i].input_postPhoto,
                            postId: response[1]
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

                    setTimeout(() => {
                        Blog.GetPostDataAxios({
                            postId: response[1]
                        }).then(response => {
                            switch (response[0]) {
                                case 200: {
                                    let onePost: Post = {
                                        postId: response[1].postId,
                                        time: response[1].time,
                                        text: response[1].text,
                                        photoUrl: response[1].photoUrl,
                                        likeCount: response[1].likeCount,
                                        commentCount: response[1].commentCount,
                                        isLiked: response[1].isLiked
                                    }
                                    this.props.addOnePost(onePost)
                                    this.props.setButtonCreatPostPressed(false)

                                    return true
                                }
                            }
                        })
                    }, 3000);
                    break
                }
                case 400: {
                    this.props.setMessage('Лимит символов 1000')
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
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
                                        setNewPost={this.setNewPost}
                                        message={this.props.message}
                                        setMessage={this.props.setMessage}/>
    }
}

export default ProfileNewPostClass