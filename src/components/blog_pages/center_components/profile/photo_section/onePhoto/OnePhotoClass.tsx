import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    componentDidMount() {
        this.props.GetPosts()
        this.props.GetOnePostData(this.props.postId)
        this.props.GetCommentsToPost(this.props.postId)
    }

    setComment = () => {
        if (this.props.input_comment !== '') {
            this.props.SetComment(this.props.postId, this.props.input_comment,
                this.props.name, this.props.nickname, this.props.avatarUrl,
                this.props.onePost.commentCount)
        }
    }
    likePost = () => {
        this.props.LikePost(this.props.postId, this.props.onePost.isLiked, this.props.onePost.likeCount)

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
                                  isLiked={this.props.onePost.isLiked}
                                  commentCount={this.props.onePost.commentCount}
                                  likeCount={this.props.onePost.likeCount}
                                  text={this.props.onePost.text}
                                  time={this.props.onePost.time}
                                  setComment={this.setComment}
                                  likePost={this.likePost}/>
    }
}

export default OnePhotoClass