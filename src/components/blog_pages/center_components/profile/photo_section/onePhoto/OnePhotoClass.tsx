import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";
import axios from "axios";
import config from "../../../../../paths/config";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    commentId = ''
    text = 'bla bla'
    time = '2023-10-14'
    isLiked = false
    likeCount = '9'
    commentCount = '2'

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/post/${this.props.postId} `, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.commentId = response.data.commentId
                        this.text = response.data.text
                        this.time = response.data.time
                        this.isLiked = response.data.isLiked
                        this.likeCount = response.data.likeCount
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
        axios.post('http://localhost:8080/blog/comment', {
            postId: this.props.postId,
            text: this.props.input_comment
        }, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
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
    likePost = () => {
        axios.put('http://localhost:8080/blog/comment/like', {
            commentId: this.commentId
        }, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
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
        return <OnePhotoComponent postId={this.props.postId}
                                  userComments={this.props.userComments}
                                  input_comment={this.props.input_comment}
                                  name={this.props.name}
                                  nickname={this.props.nickname}
                                  setInputPostComment={this.props.setInputPostComment}
                                  setButtonOpenPhoto={this.props.setButtonOpenPhoto}
                                  onePhotoUrl={this.props.onePhotoUrl}
                                  avatarUrl={this.props.avatarUrl}
                                  commentCount={this.commentCount}
                                  isLiked={this.isLiked}
                                  likeCount={this.likeCount}
                                  text={this.text}
                                  time={this.time}
                                  setComment={this.setComment}
                                  likePost={this.likePost}/>
    }
}

export default OnePhotoClass