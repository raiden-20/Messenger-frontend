import React, {Component} from "react";
import OneUserDataComponent from "./OneUserDataComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import {Blog} from "../../../../../../../axios/post/PostAxios";
import {Auth} from "../../../../../../../axios/auth/AuthAxios";
import {Profile} from "../../../../../../../axios/profile/ProfileAxios";

class OneUserDataClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {
    name = ''
    nickname = ''
    avatarUrl = ''

    likeComment = () => {
        if (this.props.commentId === '') {
            this.props.likePost()
        } else {
            Blog.LikeCommentAxios({
                commentId: this.props.commentId
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        this.props.setOneLikeCommentPost(this.props.commentId, this.props.isLiked ? (Number.parseInt(this.props.likeCount) - 1).toString() :
                            (Number.parseInt(this.props.likeCount) + 1).toString())
                        break
                    }
                    case 401 : {
                        //bad token
                        break
                    }
                    case 400 : {
                        // post doesn't exist
                        break
                    }
                }
            })
        }

    }

    deleteComment = () => {
        Blog.DeleteCommentAxios({
            commentId: this.props.commentId
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.deleteOneComment(this.props.commentId)
                    this.props.setOneCommentCountPost(this.props.postId, (Number.parseInt(this.props.commentsCount) - 1).toString())
                    break
                }
                case 401 : {
                    //bad token
                    break
                }
                case 400 : {
                    // post doesn't exist
                    break
                }
            }
        })
    }

    componentDidMount() {
        Auth.AuthDataAxios({
            id: this.props.userId as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.nickname = response[1].nickname
                }
            }

        })

        Profile.ProfileGetDataAxios({
            id: this.props.userId as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.name = response[1].name
                    this.avatarUrl = response[1].avatarUrl
                    this.props.setOneCommentUserData(this.props.commentId, this.name, this.nickname, this.avatarUrl)
                    break
                }
                case 400: {
                    // user doesn't exist
                    break
                }
                case 401: {
                    // bad token
                    break
                }
            }
        })
    }

    render() {
        return <OneUserDataComponent avatarUrl={this.props.avatarUrl}
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

export default OneUserDataClass