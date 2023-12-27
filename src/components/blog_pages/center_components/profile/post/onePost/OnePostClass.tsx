import {Component} from "react";
import OnePostComponent from "./OnePostComponent";
import {PropsOnePostClass, StateOnePostClass} from "../../../../../../redux/interfaces/profile/post/post";
import axios from "axios";
import config from "../../../../../paths/config";

class OnePostClass extends Component<PropsOnePostClass, StateOnePostClass> {

    componentDidMount() {
        axios.post(`http://localhost:8080/blog/comment/${this.props.post.postId}`, config)
            .then(response => {
                this.props.setUserComments(response.data)
            })
    }

    like = () => {
        axios.put('http://localhost:8080/blog/post/like', {
            postId: this.props.post.postId
        }, config)
            .then(response => {
                axios.get(`http://localhost:8080/blog/post/${this.props.post.postId}`, config)
                    .then(response => {
                        switch (response.status) {
                            case 200: {
                                this.props.setOnePost(response.data, this.props.post.postId)
                            }
                        }
                    }).catch(error => {
                    debugger
                })
            }).catch(error => {
                switch (error.response.status) {
                    case 403: {
                        // bad token //todo сделать alarm 'ваша сессия истекла, войдите в систему заново' и выкинуть на вход
                        break
                    }
                    case 404: {
                        // post doesn't exist
                        break
                    }
                }
        })
    }

    editPost = () => {
        this.props.post.photoUrl.map((url: string) => (
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputPostPhoto(new File([blob], 'photo.jpg', { type: 'image/jpeg' }))
                    this.props.setInputPostPhotoUrl(url)
                })
        ))
        this.props.setInputPostText(this.props.post.text)
    }

    deletePost = () =>{
        axios.delete(`http://localhost:8080/blog/post/${this.props.post.postId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.deleteOnePost(this.props.post.postId)
                    }
                }
            }).catch(error => {
                switch (error.response.status) {
                    case 403 : {
                        //bad token
                        break
                    }
                    case 404 : {
                        // post doesn't exist
                    }
                }
        })
    }

    render() {
        return <OnePostComponent name={this.props.name}
                                 nickname={this.props.nickname}
                                 avatarUrl={this.props.avatarUrl}
                                 message={this.props.message}
                                 setMessage={this.props.setMessage}

                                 time={this.props.post.time}
                                 photoUrl={this.props.post.photoUrl}
                                 text={this.props.post.text}
                                 likeCount={this.props.post.likeCount}
                                 commentCount={this.props.post.commentCount}
                                 isLiked={this.props.post.isLiked}
                                 postId={this.props.post.postId}
                                 like={this.like}
                                 comments={this.props.comments}
                                 setUserComments={this.props.setUserComments}
                                 deletePost={this.deletePost}
                                 editPost={this.editPost}
                                 setButtonEditPostClick={this.props.setButtonEditPostClick}
                                 buttonEditPost={this.props.buttonEditPost}
                                 input_comment={this.props.input_comment}
                                 setInputPostComment={this.props.setInputPostComment}
                                 deleteOneComment={this.props.deleteOneComment}
                                 setOneComment={this.props.setOneComment}
                                 addOneComment={this.props.addOneComment}/>
    }
}

export default OnePostClass