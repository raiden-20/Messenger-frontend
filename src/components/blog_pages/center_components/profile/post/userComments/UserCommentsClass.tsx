import {Component} from "react";
import {
    PropsUserCommentClass,
    StateUserCommentClass
} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        this.props.GetCommentsToPost(this.props.postId)
    }
    like = () => {
        this.props.LikePost(this.props.postId, this.props.isLiked, this.props.likeCount)
    }
    sentComment = () => {
        this.props.SetComment(this.props.postId, this.props.input_comment, this.props.myName,
            this.props.myNickname, this.props.myAvatarUrl, this.props.commentCount)
    }


    render() {
        return<UserCommentsComponent comments={this.props.comments}
                                     setButtonClickToPostWithComments={this.props.setButtonClickToPostWithComments}
                                     commentCount={this.props.commentCount}
                                     postId={this.props.postId}
                                     isLiked={this.props.isLiked}
                                     likeCount={this.props.likeCount}
                                     photoUrl={this.props.photoUrl}
                                     text={this.props.text}
                                     time={this.props.time}
                                     avatarUrl={this.props.avatarUrl}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     like_button={this.like}
                                     input_comment={this.props.input_comment}
                                     setInputPostComment={this.props.setInputPostComment}
                                     setComment={this.sentComment}
                                     like={this.like}/>
    }
}

export default UserCommentsClass