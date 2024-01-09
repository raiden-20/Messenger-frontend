import {connect} from "react-redux";
import {StatePost} from "../../../../../../redux/interfaces/profile/post/post";
import PostClass from "./PostClass";
import {setButtonEditPostClick} from "../../../../../../redux/reducers/postReducer"
import {GetPosts} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state : StatePost) => {
    return {
        posts: state.post.posts,
        buttonEditPost: state.post.buttonEditPost
    }
}

const mapDispatchToProps = {
    GetPosts,
    setButtonEditPostClick
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostClass)

export default PostContainer