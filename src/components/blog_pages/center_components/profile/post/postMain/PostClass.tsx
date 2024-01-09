import {Component} from "react";
import {PropsPost, StatePostsClass} from "../../../../../../redux/interfaces/profile/post/post";
import PostComponent from "./PostComponent";

class PostClass extends Component<PropsPost, StatePostsClass> {


    componentDidMount() {
        this.props.GetPosts()
    }

    render() {
        return <PostComponent setButtonEditPostClick={this.props.setButtonEditPostClick}
                              posts={this.props.posts}
                              buttonEditPost={this.props.buttonEditPost}/>
    }
}

export default PostClass