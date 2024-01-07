import {Component} from "react";
import OneCommentComponent from "./OneCommentComponent";
import {Comment, PropsComment} from "../../../../../../../redux/interfaces/profile/post/comments";
import {Blog} from "../../../../../../../axios/post/PostAxios";
import {Profile} from "../../../../../../../axios/profile/ProfileAxios";
import {Auth} from "../../../../../../../axios/auth/AuthAxios";
class OneCommentClass extends Component<PropsComment, Comment> {
    name = ''
    nickname = ''
    avatarUrl = ''


    likeComment = () => {
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

    deleteComment = () => {
        Blog.DeleteCommentAxios({
            commentId: this.props.commentId
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.deleteOneComment(this.props.commentId)
                    this.props.setOneCommentCountPost(this.props.postId, (Number.parseInt(this.props.commentCount) - 1).toString())
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
        return <OneCommentComponent text={this.props.text}
                                    userId={this.props.userId}
                                    time={this.props.time}
                                    likeCount={this.props.likeCount}
                                    isLiked={this.props.isLiked}
                                    likeComment={this.likeComment}
                                    deleteComment={this.deleteComment}
                                    avatarUrl={this.avatarUrl}
                                    name={this.name}
                                    nickname={this.nickname}/>
    }
}

export default OneCommentClass