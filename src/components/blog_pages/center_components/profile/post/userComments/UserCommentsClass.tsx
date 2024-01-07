import {Component} from "react";
import {
    Comment,
    PropsUserCommentClass,
    StateUserCommentClass
} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
import {Blog} from "../../../../../../axios/post/PostAxios";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        Blog.GetCommentsAxios({
            postId: this.props.postId,
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserComments(response[1])
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

    sentComment = () => {
        Blog.SetCommentAxios({
            postId: this.props.postId,
            input_comment: this.props.input_comment,
            addOneComment: this.props.addOneComment
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    const now = new Date();
                    const dateString = now.toLocaleDateString();
                    let oneComment: Comment = {
                        commentId: response[1],
                        userId: localStorage.getItem('idUser'),
                        text: this.props.input_comment,
                        time: dateString.split('.').join('-'),
                        likeCount: '0',
                        isLiked: false,
                        name: this.props.name,
                        nickname: this.props.nickname,
                        avatarUrl: this.props.avatarUrl
                    }
                    this.props.addOneComment(oneComment)
                    this.props.setOneCommentCountPost(this.props.postId, (Number.parseInt(this.props.commentCount) + 1).toString())
                    this.props.setInputPostComment('')
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
                                     setOneLikeCommentPost={this.props.setOneLikeCommentPost}
                                     setOneCommentUserData={this.props.setOneCommentUserData}/>
    }
}

export default UserCommentsClass