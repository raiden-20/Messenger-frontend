import React, {Component} from "react";
import OneUserDataComponent from "./OneUserDataComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {DeleteCommentAxios, LikeCommentAxios} from "../../../../../../axios/post/PostAxios";
import {AuthDataAxios} from "../../../../../../axios/auth/AuthAxios";
import {ProfileGetDataAxios} from "../../../../../../axios/profile/ProfileAxios";

class OneUserDataClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {
    name = ''
    nickname = ''
    avatarUrl = ''

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

    componentDidMount() {
        let authDataPromise = AuthDataAxios({
            id: this.props.userId as string
        })
        authDataPromise.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.nickname = response[1].nickname
                }
            }

        })

        let dataPromise = ProfileGetDataAxios({
            id: this.props.userId as string
        })
        dataPromise.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.name = response[1].name
                    this.avatarUrl = response[1].avatarUrl
                    this.props.setOneCommentUserData(this.props.commentId, this.name, this.nickname, this.avatarUrl)
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
                                     text={this.props.text}
                                     deleteComment={this.deleteComment}
                                     likeComment={this.likeComment}
                                     commentsCount={this.props.commentsCount}/>
    }
}

export default OneUserDataClass