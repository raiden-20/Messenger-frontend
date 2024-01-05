import {Component} from "react";
import {
    Comment,
    PropsUserCommentClass,
    StateUserCommentClass
} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
import {GetCommentsAxios, SetCommentAxios} from "../../../../../axios/post/PostAxios";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        let a = GetCommentsAxios({
            postId: this.props.postId,
        })
        a.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserComments(response[1])
                }
            }
        })
    }

    sentComment = () => {
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
                        isLiked: false
                    }
                    this.props.addOneComment(oneComment)
                    this.props.setOneCommentCountPost(this.props.postId, this.props.commentCount + 1)
                }
            }
        })
    }
 
    render() {
        return<UserCommentsComponent comments={this.props.comments}
                                     setButtonCommentClick={this.props.setButtonCommentClick}
                                     setUserComments={this.props.setUserComments}
                                     commentCount={this.props.commentCount}
                                     postId={this.props.postId}
                                     isLiked={this.props.isLiked}
                                     likeCount={this.props.likeCount}
                                     photoUrl={this.props.photoUrl}
                                     text={this.props.text}
                                     time={this.props.time}
                                     avatarUrl={this.props.avatarUrl}
                                     buttonEditPost={this.props.buttonEditPost}
                                     message={this.props.message}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     deletePost={this.props.deletePost}
                                     edit={this.props.edit}
                                     like_button={this.props.like_button}
                                     input_comment={this.props.input_comment}
                                     setInputPostComment={this.props.setInputPostComment}
                                     setComment={this.sentComment}
                                     deleteOneComment={this.props.deleteOneComment}
                                     setOneCommentCountPost={this.props.setOneCommentCountPost}
                                     setOneLikeCommentPost={this.props.setOneLikeCommentPost}/>
    }
}

export default UserCommentsClass