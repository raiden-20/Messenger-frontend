import {Component} from "react";
import {PropsPost, StatePostsClass} from "../../../../../../redux/interfaces/profile/post/post";
import PostComponent from "./PostComponent";
import {GetPostsAxios} from "../../../../../axios/post/PostAxios";

class PostClass extends Component<PropsPost, StatePostsClass> {


    componentDidMount() {
        GetPostsAxios({
            setPosts: this.props.setPosts
        })
    }

    render() {
        return <PostComponent name={this.props.name}
                              nickname={this.props.nickname}
                              avatarUrl={this.props.avatarUrl}
                              message={this.props.message}
                              setMessage={this.props.setMessage}
                              posts={this.props.posts}
                              comments={this.props.comments}
                              setUserComments={this.props.setUserComments}
                              setInputPostPhoto={this.props.setInputPostPhoto}
                              setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                              setInputPostText={this.props.setInputPostText}
                              setButtonEditPostClick={this.props.setButtonEditPostClick}
                              buttonEditPost={this.props.buttonEditPost}
                              input_comment={this.props.input_comment}
                              setInputPostComment={this.props.setInputPostComment}
                              deleteOneComment={this.props.deleteOneComment}
                              deleteOnePost={this.props.deleteOnePost}
                              setOneComment={this.props.setOneComment}
                              addOneComment={this.props.addOneComment}
                              setOnePost={this.props.setOnePost}
                              setOneCommentCountPost={this.props.setOneCommentCountPost}
                              setOneLikeCommentPost={this.props.setOneLikeCommentPost}
                              setOneLikeCountPost={this.props.setOneLikeCountPost}
                              setOneCommentUserData={this.props.setOneCommentUserData}/>
    }
}

export default PostClass