import {Dispatch} from "redux";
import {setMessage} from "../../../../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {StatePost} from "../../../../../redux/interfaces/profile/post/post";
import Post from "./Post";

const mapStateToProps = (state : StatePost) => {
    return {
        name: state.profile.name,
        nickname: state.auth.nickname,
        avatarUrl: state.profile.avatarUrl,
        message: state.auth.message
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setMessage(message: string) {
            dispatch(setMessage(message))
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer