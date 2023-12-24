import {Component} from "react";
import {PropsUserCommentClass, StateUserCommentClass} from "../../../../../../redux/interfaces/profile/post/comments";
import UserComments from "./UserComments";
import axios from "axios";
import config from "../../../../../paths/config";
class UserCommentsClass extends Component<PropsUserCommentClass, StateUserCommentClass> {

    componentDidMount() {
        axios.get(`http://localhost:8080/blog/comment/${this.props.idPost}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setUserComments(response.data)
                        break
                    }
                }
            })
    }
 
    render() {
        return<UserComments userComments={this.props.userComments}
                            setButtonCommentClick={this.props.setButtonCommentClick}
                            setUserComments={this.props.setUserComments}
                            commentCount={this.props.commentCount}
                            idPost={this.props.idPost}
                            isLiked={this.props.isLiked}
                            likesCount={this.props.likesCount}
                            photoUrl={this.props.photoUrl}
                            text={this.props.text}
                            time={this.props.time}
                            avatarUrl={this.props.avatarUrl}
                            buttonEditPost={this.props.buttonEditPost}
                            message={this.props.message}
                            name={this.props.name}
                            nickname={this.props.nickname}/>
    }
}

export default UserCommentsClass