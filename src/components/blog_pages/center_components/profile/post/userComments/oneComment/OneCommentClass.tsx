import {Component} from "react";
import OneCommentComponent from "./OneCommentComponent";
import {Comment, PropsComment} from "../../../../../../../redux/interfaces/profile/post/comments";
import axios from "axios";
import config from "../../../../../../paths/config";

class OneCommentClass extends Component<PropsComment, Comment> {
    name = ''
    nickname = ''
    avatarUrl = ''


    likeComment = () => {
        axios.put('http://localhost:8080/blog/comment/like',  {
            commentId: this.props.commentId
        },config)
            .then(response => {
                switch (response.status) {
                    case 200:
                        let commentData: Comment = {
                            commentId: this.props.commentId,
                            userId: this.props.userId,
                            text: this.props.text,
                            time: this.props.time,
                            countLikes: this.props.countLikes,
                            isLiked: this.props.isLiked
                        }
                        commentData.isLiked = !this.props.isLiked;
                        this.props.setOneComment(commentData, this.props.commentId)
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
                        this.props.deleteOneComment(this.props.commentId)
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
                        this.nickname = response.data.nickname
                    }
                }
        })
        axios.get(`http://localhost:8080/social/data/${this.props.userId}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.name = response.data.name
                        this.avatarUrl = response.data.avatarUrl
                    }
                }
            })
    }


    render() {
        return <OneCommentComponent text={this.props.text}
                                    time={this.props.time}
                                    countLikes={this.props.countLikes}
                                    isLiked={this.props.isLiked}
                                    likeComment={this.likeComment}
                                    deleteComment={this.deleteComment}
                                    avatarUrl={this.avatarUrl}
                                    name={this.name}
                                    nickname={this.nickname}/>
    }
}

export default OneCommentClass