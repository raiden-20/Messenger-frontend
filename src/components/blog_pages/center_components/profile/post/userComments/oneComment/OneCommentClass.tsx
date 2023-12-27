import {Component} from "react";
import OneCommentComponent from "./OneCommentComponent";
import {Comment, PropsComment} from "../../../../../../../redux/interfaces/profile/post/comments";
import axios from "axios";
import config from "../../../../../../paths/config";

class OneCommentClass extends Component<PropsComment, Comment> {

    likeComment = () => {
        axios.put('http://localhost:8080/blog/comment/like',  {
            commentId: this.props.commentId
        },config)
            .then(response => {
                switch (response.status) {
                    case 200:
                        this.props.setCommentName(this.props.commentName)
                }
        }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //bad token
                    break
                }
                case 404: {
                    //post doesn't exist
                }
            }
        })
    }

    deleteComment = () => {
        axios.delete(`http://localhost:8080/blog/comment/${this.props.commentId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setCommentName('')
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //bad token
                    break
                }
                case 404: {
                    //comment doesn't exist
                }
            }
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/auth/data/${this.props.userId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setCommentNickname(response.data.nickname)
                    }
                }
        })
        axios.get(`http://localhost:8080/social/data/${this.props.userId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.props.setCommentName(response.data.name)
                        this.props.setCommentAvatarUrl(response.data.avatarUrl)
                    }
                }
            })
    }


    render() {
        return <OneCommentComponent text={this.props.text}
                                    time={this.props.time}
                                    likeCount={this.props.likeCount}
                                    isLiked={this.props.isLiked}
                                    likeComment={this.likeComment}
                                    deleteComment={this.deleteComment}
                                    commentAvatarUrl={this.props.commentAvatarUrl}
                                    commentName={this.props.commentName}
                                    commentNickname={this.props.commentNickname}/>
    }
}

export default OneCommentClass