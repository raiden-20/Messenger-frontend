import {Component} from "react";
import {
    PropsUserCommentClass,
    StateUserCommentClass
} from "../../../../../../redux/interfaces/profile/post/comments";
import UserCommentsComponent from "./UserCommentsComponent";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        this.props.GetCommentsToPost(this.props.postId)
    }
    like = () => {
        this.props.LikePost(this.props.postId, this.props.isLiked, this.props.likeCount)
    }
    sentComment = () => {
        this.props.SetComment(this.props.postId, this.props.input_comment, this.props.name,
            this.props.nickname, this.props.avatarUrl, this.props.commentCount)
    }
    editPost = () => {
        this.props.photoUrl.map((url: PostPhoto) => (
            fetch(url.url)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputPostPhoto(new File([blob], 'photo.jpg', { type: 'image/jpeg' }), true)
                    this.props.setInputPostPhotoUrl(url.url)
                })
        ))
        this.props.setInputPostText(this.props.text)
    }
    deletePost = () =>{
        this.props.DeletePost(this.props.postId)
    }


    render() {
        return<UserCommentsComponent comments={this.props.comments}
                                     setButtonCommentClick={this.props.setButtonCommentClick}
                                     commentCount={this.props.commentCount}
                                     postId={this.props.postId}
                                     isLiked={this.props.isLiked}
                                     likeCount={this.props.likeCount}
                                     photoUrl={this.props.photoUrl}
                                     text={this.props.text}
                                     time={this.props.time}
                                     avatarUrl={this.props.avatarUrl}
                                     buttonEditPost={this.props.buttonEditPost}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     deletePost={this.deletePost}
                                     edit={this.editPost}
                                     like_button={this.like}
                                     input_comment={this.props.input_comment}
                                     setInputPostComment={this.props.setInputPostComment}
                                     setComment={this.sentComment}
                                     like={this.like}/>
    }
}

export default UserCommentsClass