import {Component} from "react";
import {PropsUserCommentClass, StateUserCommentClass} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
import axios from "axios";
import config from "../../../../../paths/config";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/comment/${this.props.idPost}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setUserComments(response.data)
                        break
                    }
                }
            })
    }

    sentComment = () => {
        axios.post('http://localhost:8080/blog/comment', {
            idPost: this.props.idPost,
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
        return<UserCommentsComponent userComments={this.props.userComments}
                                     setButtonCommentClick={this.props.setButtonCommentClick}
                                     setUserComments={this.props.setUserComments}
                                     commentCount={this.props.commentCount}
                                     idPost={this.props.idPost}
                                     isLiked={this.props.isLiked}
                                     likesCount={this.props.likesCount}
                                     photoUrl={this.props.photoUrl}
                                     text={this.props.text}
                                     time={this.props.time}
                                     avatarUrl={this.props.avatarUrl}
                                     buttonEditPost={this.props.buttonEditPost}
                                     message={this.props.message}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     deletePost={this.props.deletePost}
                                     edit={this.props.edit}
                                     like_button={this.props.like_button}
                                     input_comment={this.props.input_comment}
                                     setInputPostComment={this.props.setInputPostComment}
                                     setComment={this.sentComment}/>
    }
}

export default UserCommentsClass