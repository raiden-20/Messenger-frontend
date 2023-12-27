import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";
import axios from "axios";
import config from "../../../../../paths/config";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    commentId = ''
    text = ''
    time = ''
    isLiked = false
    likesCount = ''
    commentCount = ''

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/post/${this.props.postId} `, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.text = response.data.text
                        this.time = response.data.time
                        this.isLiked = response.data.isLiked
                        this.likesCount = response.data.likesCount
                        this.commentCount = response.data.commentCount
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

        axios.get(`http://localhost:8080/blog/comment/${this.props.postId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setUserComments(response.data)
                        break
                    }
                }
            })
    }

    setComment = () => {
        axios.post('http://localhost:8080/blog/comment/create', {
            postId: this.props.postId,
            text: this.props.input_comment
        }, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        const now = new Date();
                        const dateString = now.toLocaleDateString();
                        let oneComment: Comment = {
                            commentId: response.data,
                            userId: localStorage.getItem('idUser'),
                            text: this.props.input_comment,
                            time: dateString.split('.').join('-'),
                            countLikes: '0',
                            isLiked: false
                        }
                        this.props.addOneComment(oneComment)
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
    likePost = () => {
        axios.put('http://localhost:8080/blog/post/like', {
            postId: this.props.postId
        }, config)
            .then(response => {
                axios.get(`http://localhost:8080/blog/post/${this.props.postId}`, config)
                    .then(response => {
                        switch (response.status) {
                            case 200: {
                                this.props.setOnePost(response.data, this.props.postId)
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

    render() {
        return <OnePhotoComponent postId={this.props.postId}
                                  comments={this.props.comments}
                                  input_comment={this.props.input_comment}
                                  name={this.props.name}
                                  nickname={this.props.nickname}
                                  setInputPostComment={this.props.setInputPostComment}
                                  setButtonOpenPhoto={this.props.setButtonOpenPhoto}
                                  onePhotoUrl={this.props.onePhotoUrl}
                                  avatarUrl={this.props.avatarUrl}
                                  commentCount={this.commentCount}
                                  isLiked={this.isLiked}
                                  likeCount={this.likesCount}
                                  text={this.text}
                                  time={this.time}
                                  setComment={this.setComment}
                                  likePost={this.likePost}
                                  addOneComment={this.props.addOneComment}
                                  deleteOneComment={this.props.deleteOneComment}
                                  setOneComment={this.props.setOneComment}/>
    }
}

export default OnePhotoClass