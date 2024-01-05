import {Component} from "react";
import OnePostComponent from "./OnePostComponent";
import {PropsOnePostClass, StateOnePostClass} from "../../../../../../redux/interfaces/profile/post/post";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
import {DeletePostAxios, GetCommentsAxios, LikePostAxios} from "../../../../../axios/post/PostAxios";

class OnePostClass extends Component<PropsOnePostClass, StateOnePostClass> {

    componentDidMount() {

        let a = GetCommentsAxios({
            postId: this.props.post.postId,
        })
        a.then(response => {
            switch (response[0]) {
                case 200 : {
                    this.props.setUserComments(response[1])
                }
            }
        })
    }

    like = () => {
        let ax = LikePostAxios({
            postId: this.props.post.postId
        })
        ax.then(response => {
            switch (response) {
                case 200: {
                    this.props.setOneLikeCountPost(this.props.post.postId, this.props.post.isLiked ? (Number.parseInt(this.props.post.likeCount) - 1).toString() :
                        (Number.parseInt(this.props.post.likeCount) + 1).toString())
                }
            }
        })
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
        let ax = DeletePostAxios({
            postId: this.props.post.postId,
            deleteOnePost: this.props.deleteOnePost
        })
        ax.then(response => {
            switch (response) {
                case 200: {
                    this.props.deleteOnePost(this.props.post.postId)
                    this.props.setButtonEditPostClick(false)
                }
            }
        })
    }

    render() {
        return <OnePostComponent name={this.props.name}
                                 nickname={this.props.nickname}
                                 avatarUrl={this.props.avatarUrl}
                                 message={this.props.message}
                                 setMessage={this.props.setMessage}
                                 photoUrl={this.props.post.photoUrl}
                                 time={this.props.post.time}
                                 text={this.props.post.text}
                                 likeCount={this.props.post.likeCount}
                                 commentCount={this.props.post.commentCount}
                                 isLiked={this.props.post.isLiked}
                                 postId={this.props.post.postId}
                                 like={this.like}
                                 comments={this.props.comments}
                                 setUserComments={this.props.setUserComments}
                                 deletePost={this.deletePost}
                                 editPost={this.editPost}
                                 setButtonEditPostClick={this.props.setButtonEditPostClick}
                                 buttonEditPost={this.props.buttonEditPost}
                                 input_comment={this.props.input_comment}
                                 setInputPostComment={this.props.setInputPostComment}
                                 deleteOneComment={this.props.deleteOneComment}
                                 setOneComment={this.props.setOneComment}
                                 addOneComment={this.props.addOneComment}
                                 setOneCommentCountPost={this.props.setOneCommentCountPost}
                                 setOneLikeCommentPost={this.props.setOneLikeCommentPost}/>
    }
}

export default OnePostClass