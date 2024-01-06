import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";
import {GetCommentsAxios, GetPostDataAxios, LikePostAxios, SetCommentAxios} from "../../../../../axios/post/PostAxios";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    componentDidMount() {

        let postData = GetPostDataAxios({
            postId: this.props.postId
        })
        postData.then(response => {
            switch (response[0]) {
                case 200: {
                    let post = {
                        postId: response[1].postId,
                        time: response[1].time,
                        text: response[1].text,
                        photoUrl: response[1].photoUrl,
                        likeCount: response[1].likeCount,
                        commentCount: response[1].commentCount,
                        isLiked: response[1].isLiked
                    }
                    this.props.setPosts([])
                    this.props.addOnePost(post)
                }
            }
        })

        let a = GetCommentsAxios({
            postId: this.props.postId,
        })
        a.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserComments(response[1])
                    console.log(response[1])
                }
            }
        })
    }

    setComment = () => {
        if (this.props.input_comment !== '') {
            let a = SetCommentAxios({
                postId: this.props.postId,
                input_comment: this.props.input_comment,
                addOneComment: this.props.addOneComment
            })
            a.then(response => {
                switch (response[0]) {
                    case 200 : {
                        const now = new Date();
                        let dateString = now.toLocaleDateString();
                        const dateStringArr = dateString.split('.')
                        dateString = dateStringArr[2] + '-' + dateStringArr[1] + '-' + dateStringArr[0]
                        let oneComment: Comment = {
                            commentId: response[1],
                            userId: localStorage.getItem('idUser'),
                            text: this.props.input_comment,
                            time: dateString,
                            likeCount: '0',
                            isLiked: false,
                            name: this.props.name,
                            nickname: this.props.nickname,
                            avatarUrl: this.props.avatarUrl
                        }
                        this.props.addOneComment(oneComment)
                        this.props.setOneCommentCountPost(this.props.postId, (Number.parseInt(this.props.post.commentCount) + 1).toString())
                        this.props.setInputPostComment('')
                    }
                }
            })
        }
    }
    likePost = () => {
        let ax = LikePostAxios({
            postId: this.props.postId
        })
        ax.then(response => {
            switch (response) {
                case 200: {
                    this.props.setOneLikeCountPost(this.props.postId, this.props.post.isLiked ? (Number.parseInt(this.props.post.likeCount) - 1).toString() :
                        (Number.parseInt(this.props.post.likeCount) + 1).toString())
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
                                  isLiked={this.props.post.isLiked}
                                  commentCount={this.props.post.commentCount}
                                  likeCount={this.props.post.likeCount}
                                  text={this.props.post.text}
                                  time={this.props.post.time}
                                  setComment={this.setComment}
                                  likePost={this.likePost}
                                  deleteOneComment={this.props.deleteOneComment}
                                  setOneCommentCountPost={this.props.setOneCommentCountPost}
                                  setOneLikeCommentPost={this.props.setOneLikeCommentPost}
                                  setOneCommentUserData={this.props.setOneCommentUserData}/>
    }
}

export default OnePhotoClass