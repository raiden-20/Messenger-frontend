import {Component} from "react";
import OnePostComponent from "./OnePostComponent";
import {PropsOnePostClass, StateOnePostClass} from "../../../../../../redux/interfaces/profile/post/post";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";

class OnePostClass extends Component<PropsOnePostClass, StateOnePostClass> {

    componentDidMount() {
        this.props.GetCommentsToPost(this.props.post.postId)
    }

    like = () => {
        this.props.LikePost(this.props.post.postId, this.props.post.isLiked, this.props.post.likeCount)
    }

    editPost = () => {
        this.props.post.photoUrl.map((url: PostPhoto) => (
            fetch(url.url)
                .then(response => response.blob())
                .then(blob => {
                    this.props.setInputPostPhoto(new File([blob], 'photo.jpg', { type: 'image/jpeg' }), true)
                    this.props.setInputPostPhotoUrl(url.url)
                })
        ))
        this.props.setInputPostText(this.props.post.text)
    }

    deletePost = () =>{
        this.props.DeletePost(this.props.post.postId)
    }

    render() {
        return <OnePostComponent name={this.props.name}
                                 nickname={this.props.nickname}
                                 avatarUrl={this.props.avatarUrl}
                                 photoUrl={this.props.post.photoUrl}
                                 time={this.props.post.time}
                                 text={this.props.post.text}
                                 likeCount={this.props.post.likeCount}
                                 commentCount={this.props.post.commentCount}
                                 isLiked={this.props.post.isLiked}
                                 postId={this.props.post.postId}
                                 like={this.like}
                                 comments={this.props.comments}
                                 deletePost={this.deletePost}
                                 editPost={this.editPost}
                                 setButtonEditPostClick={this.props.setButtonEditPostClick}
                                 buttonEditPost={this.props.buttonEditPost}
                                 input_comment={this.props.input_comment}
                                 setInputPostComment={this.props.setInputPostComment}/>
    }
}

export default OnePostClass