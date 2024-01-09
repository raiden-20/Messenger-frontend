import React, {Component} from "react";
import OneUserCommentComponent from "./OneUserCommentComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";

class OneUserCommentClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {

    componentDidMount() {
        this.props.GetOneCommentData(this.props.userId as string, this.props.commentId)
    }

    likeComment = () => {
        if (this.props.commentId === '') {
            this.props.likePost()
        } else {
            this.props.LikeComment(this.props.commentId, this.props.isLiked, this.props.likeCount)
        }

    }
// todo добавить потом редактирование комментария
    deleteComment = () => {
        this.props.DeleteComment(this.props.commentId, this.props.postId, this.props.commentsCount)
    }

    render() {
        return <OneUserCommentComponent avatarUrl={this.props.avatarUrl}
                                        name={this.props.name}
                                        nickname={this.props.nickname}
                                        isLike={this.props.isLiked}
                                        likeCount={this.props.likeCount}
                                        time={this.props.time}
                                        text={this.props.text}
                                        deleteComment={this.deleteComment}
                                        likeComment={this.likeComment}
                                        commentsCount={this.props.commentsCount}
                                        commentId={this.props.commentId}
                                        userId={this.props.userId}/>
    }
}

export default OneUserCommentClass