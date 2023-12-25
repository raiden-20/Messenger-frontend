import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";
import axios from "axios";
import config from "../../../../../paths/config";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    text = 'bla bla'
    time = '2023-10-14'
    isLike = false
    likesCount = '9'
    commentsCount = '2'

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/post/${this.props.postId} `, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.text = response.data.text
                        this.time = response.data.time
                        this.isLike = response.data.isLike
                        this.likesCount = response.data.likesCount
                        this.commentsCount = response.data.commentsCount
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
                                  commentsCount={this.commentsCount}
                                  isLike={this.isLike}
                                  likesCount={this.likesCount}
                                  text={this.text}
                                  time={this.time}
                                  setComment={this.setComment}/>
    }
}

export default OnePhotoClass