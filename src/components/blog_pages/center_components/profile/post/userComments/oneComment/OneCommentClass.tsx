import {Component} from "react";
import OneCommentComponent from "./OneCommentComponent";
import {Comment, PropsComment} from "../../../../../../../redux/interfaces/profile/post/comments";
import {DeleteCommentAxios, LikeCommentAxios} from "../../../../../../axios/post/PostAxios";
import {ProfileGetDataAxios} from "../../../../../../axios/profile/ProfileAxios";
import {AuthDataAxios} from "../../../../../../axios/auth/AuthAxios";
class OneCommentClass extends Component<PropsComment, Comment> {
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