import {Component} from "react";
import OnePostComponent from "./OnePostComponent";
import {PropsOnePostClass, StateOnePostClass} from "../../../../../../redux/interfaces/profile/post/post";
import axios from "axios";
import config from "../../../../../paths/config";

class OnePostClass extends Component<PropsOnePostClass, StateOnePostClass> {

    comment = () => {
        axios.post(`http://localhost:8080/blog/comment/${this.props.post.idPost}`, config)
            .then(response => {

            })
    }
    like = () => {
        axios.put('http://localhost:8080/blog/post/like', config)
            .then(response => {

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
        axios.delete(`http://localhost:8080/blog/post/${this.props.post.idPost}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        //ok
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
                                 likesCount={this.props.post.likesCount}
                                 commentCount={this.props.post.commentCount}
                                 isLiked={this.props.post.isLiked}
                                 idPost={this.props.post.idPost}
                                 comment={this.comment}
                                 like={this.like}
                                 userComments={this.props.userComments}
                                 setUserComments={this.props.setUserComments}
                                 deletePost={this.deletePost}
                                 editPost={this.editPost}
                                 setButtonEditPostClick={this.props.setButtonEditPostClick}
                                 buttonEditPost={this.props.buttonEditPost}/>
    }
}

export default OnePostClass