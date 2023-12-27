import {Component} from "react";
import {PropsUserCommentClass, StateUserCommentClass} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
import axios from "axios";
import config from "../../../../../paths/config";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/comment/${this.props.postId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setUserComments(response.data)
                        break
                    }
                }
            }).catch( error => {
                debugger
        })
    }

    sentComment = () => {
        axios.post('http://localhost:8080/blog/comment/create', {
            postId: this.props.postId,
            text: this.props.input_comment
        }, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.addOneComment(response.data)
                    }
                }
            }).catch(error => {
                debugger
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
        return<UserCommentsComponent comments={this.props.comments}
                                     setButtonCommentClick={this.props.setButtonCommentClick}
                                     setUserComments={this.props.setUserComments}
                                     commentCount={this.props.commentCount}
                                     postId={this.props.postId}
                                     isLiked={this.props.isLiked}
                                     likeCount={this.props.likeCount}
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
                                     setComment={this.sentComment}
                                     deleteOneComment={this.props.deleteOneComment}
                                     setOneComment={this.props.setOneComment}/>
    }
}

export default UserCommentsClass