import React, {Component} from "react";
import OneUserDataComponent from "./OneUserDataComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import axios from "axios";
import config from "../../../../../../paths/config";
import {Comment} from "../../../../../../../redux/interfaces/profile/post/comments";

class OneUserDataClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {

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

    render() {
        return <OneUserDataComponent avatarUrl={this.props.avatarUrl}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     isLike={this.props.isLiked}
                                     likeCount={this.props.countLikes}
                                     time={this.props.time}
                                     text={this.props.time}
                                     deleteComment={this.deleteComment}
                                     likeComment={this.likeComment}
                                     commentsCount={this.props.commentsCount}/>
    }
}

export default OneUserDataClass