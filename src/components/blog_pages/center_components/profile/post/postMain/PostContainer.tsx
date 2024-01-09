import {connect} from "react-redux";
import {StatePost} from "../../../../../../redux/interfaces/profile/post/post";
import PostClass from "./PostClass";
import {setButtonCreatePostClick} from "../../../../../../redux/reducers/postReducer"
import {GetPosts} from "../../../../../../redux/thunk/postThunk";

const mapStateToProps = (state : StatePost) => {
    return {
        posts: state.post.posts,
        buttonCreatePost: state.post.buttonCreatePost
    }
}

const mapDispatchToProps = {
    GetPosts,
    setButtonCreatePostClick
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostClass)

export default PostContainer