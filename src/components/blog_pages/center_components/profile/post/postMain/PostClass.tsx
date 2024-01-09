import {Component} from "react";
import {PropsPost, StatePostsClass} from "../../../../../../redux/interfaces/profile/post/post";
import PostComponent from "./PostComponent";

class PostClass extends Component<PropsPost, StatePostsClass> {


    componentDidMount() {
        this.props.GetPosts()
    }

    render() {
        return <PostComponent setButtonCreatePostClick={this.props.setButtonCreatePostClick}
                              posts={this.props.posts}
                              buttonCreatePost={this.props.buttonCreatePost}/>
    }
}

export default PostClass