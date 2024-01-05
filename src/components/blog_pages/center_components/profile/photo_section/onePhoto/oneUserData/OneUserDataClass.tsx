import React, {Component} from "react";
import OneUserDataComponent from "./OneUserDataComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {DeleteCommentAxios, LikeCommentAxios} from "../../../../../../axios/post/PostAxios";

class OneUserDataClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {

    likeComment = () => {
        let a = LikeCommentAxios({
            commentId: this.props.commentId
        })
        a.then(response => {
            switch (response.status) {
                case 200:
                    this.props.setOneLikeCommentPost(this.props.commentId, this.props.isLiked ? (Number.parseInt(this.props.countLikes) - 1).toString() :
                        (Number.parseInt(this.props.countLikes) + 1).toString())
            }
        })
    }

    deleteComment = () => {
        let a = DeleteCommentAxios({
            commentId: this.props.commentId
        })
        a.then(response => {
            switch (response.status) {
                case 200 : {
                    this.props.deleteOneComment(this.props.commentId)
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