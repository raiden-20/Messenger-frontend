import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";
import {GetCommentsAxios, GetPostDataAxios, LikePostAxios, SetCommentAxios} from "../../../../../axios/post/PostAxios";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    text = ''
    time = '1999-01-01'
    isLiked = false
    likeCount = '0'
    commentCount = '0'
    photoUrl = []

    componentDidMount() {
        let postData = GetPostDataAxios({
            postId: this.props.postId
        })

        postData.then(response => {
            debugger
            this.text = response.text
            this.time = response.time
            this.isLiked = response.isLiked
            this.likeCount = response.likeCount
            this.commentCount = response.commentCount
            this.photoUrl = response.photoUrl
        })

        let a = GetCommentsAxios({
            postId: this.props.postId,
        })
        a.then(response => {
            switch (response[0]) {
                case 200 : {
                    debugger
                    this.props.setUserComments(response[1])
                }
            }
        })
    }

    setComment = () => {
        let a = SetCommentAxios({
            postId: this.props.postId,
            input_comment: this.props.input_comment,
            addOneComment: this.props.addOneComment
        })
        a.then(response => {
            switch (response) {
                case 200 : {
                    const now = new Date();
                    const dateString = now.toLocaleDateString();
                    let oneComment: Comment = {
                        commentId: response.data,
                        userId: localStorage.getItem('idUser'),
                        text: this.props.input_comment,
                        time: dateString.split('.').join('-'),
                        countLikes: '0',
                        isLiked: false,
                        name: this.props.name,
                        nickname: this.props.nickname,
                        avatarUrl: this.props.avatarUrl
                    }
                    this.props.addOneComment(oneComment)
                    this.props.setOneCommentCountPost(this.props.postId, this.commentCount + 1)
                    this.props.setInputPostComment('')
                }
            }
        })
    }
    likePost = () => {
        let ax = LikePostAxios({
            postId: this.props.postId
        })
        ax.then(response => {
            switch (response) {
                case 200: {
                    this.props.setOneLikeCountPost(this.props.postId, this.isLiked ? (Number.parseInt(this.likeCount) - 1).toString() :
                        (Number.parseInt(this.likeCount) + 1).toString())
                }
            }
        })
    }

    render() {
        return <OnePhotoComponent postId={this.props.postId}
                                  comments={this.props.comments}
                                  input_comment={this.props.input_comment}
                                  name={this.props.name}
                                  nickname={this.props.nickname}
                                  setInputPostComment={this.props.setInputPostComment}
                                  setButtonOpenPhoto={this.props.setButtonOpenPhoto}
                                  onePhotoUrl={this.props.onePhotoUrl}
                                  avatarUrl={this.props.avatarUrl}
                                  commentCount={this.commentCount}
                                  isLiked={this.isLiked}
                                  likeCount={this.likeCount}
                                  text={this.text}
                                  time={this.time}
                                  setComment={this.setComment}
                                  likePost={this.likePost}
                                  deleteOneComment={this.props.deleteOneComment}
                                  setOneCommentCountPost={this.props.setOneCommentCountPost}
                                  setOneLikeCommentPost={this.props.setOneLikeCommentPost}
                                  setOneCommentUserData={this.props.setOneCommentUserData}/>
    }
}

export default OnePhotoClass