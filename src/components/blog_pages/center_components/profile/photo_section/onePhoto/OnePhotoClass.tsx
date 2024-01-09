import {Component} from "react";
import {PropsOnePhotoClass, StateOnePhotoClass} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import OnePhotoComponent from "./OnePhotoComponent";

class OnePhotoClass extends Component<PropsOnePhotoClass, StateOnePhotoClass> {

    componentDidMount() {
        this.props.GetOnePostData(this.props.postId)
        this.props.GetCommentsToPost(this.props.postId)
    }

    setComment = () => {
        if (this.props.input_comment !== '') {
            this.props.SetComment(this.props.postId, this.props.input_comment,
                this.props.name, this.props.nickname, this.props.avatarUrl,
                this.props.post.commentCount)
        }
    }
    likePost = () => {
        this.props.LikePost(this.props.postId, this.props.post.isLiked, this.props.post.likeCount)

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
                                  likePost={this.likePost}/>
    }
}

export default OnePhotoClass