import {Component} from "react";
import OnePostComponent from "./OnePostComponent";
import {PropsOnePostClass, StateOnePostClass} from "../../../../../../redux/interfaces/profile/post/post";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
import {Blog} from "../../../../../../axios/post/PostAxios";

class OnePostClass extends Component<PropsOnePostClass, StateOnePostClass> {

    componentDidMount() {

        Blog.GetCommentsAxios({
            postId: this.props.post.postId,
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

    like = () => {
        Blog.LikePostAxios({
            postId: this.props.post.postId
        }).then(response => {
            switch (response[0]) {
                case 200: {
                    this.props.setOneLikeCountPost(this.props.post.postId, this.props.post.isLiked ? (Number.parseInt(this.props.post.likeCount) - 1).toString() :
                        (Number.parseInt(this.props.post.likeCount) + 1).toString())
                    break
                }
                case 401: {
                    // bad token
                    break
                }
                case 400: {
                    // todo post doesn't exist
                    break
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
        Blog.DeletePostAxios({
            postId: this.props.post.postId
        }).then(response => {
            switch (response[0]) {
                case 200: {
                    this.props.deleteOnePost(this.props.post.postId)
                    this.props.setButtonEditPostClick(false)
                    break
                }
                case 400: {
                    // todo post doesn't exist
                    break
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
                                 setOneLikeCommentPost={this.props.setOneLikeCommentPost}
                                 setOneCommentUserData={this.props.setOneCommentUserData}/>
    }
}

export default OnePostClass