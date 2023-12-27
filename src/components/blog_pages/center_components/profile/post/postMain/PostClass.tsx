import {Component} from "react";
import {PropsPost, StatePostsClass} from "../../../../../../redux/interfaces/profile/post/post";
import PostComponent from "./PostComponent";
import axios from "axios";
import config from "../../../../../paths/config";

class PostClass extends Component<PropsPost, StatePostsClass> {


    componentDidMount() {
        axios.get(`http://localhost:8080/blog/user/${localStorage.getItem('idUser')}`, config)
            .then(response => {
                switch (response.status) {
                    case 200: {
                        this.props.setPosts(response.data)
                        if (response.data.size === 0) {
                            this.props.setMessage('Нет постов')
                        }
                    }
                }
            }).catch(error => {
                debugger
        })
    }

    render() {
        return <PostComponent name={this.props.name}
                              nickname={this.props.nickname}
                              avatarUrl={this.props.avatarUrl}
                              message={this.props.message}
                              setMessage={this.props.setMessage}
                              posts={this.props.posts}
                              userComments={this.props.userComments}
                              setUserComments={this.props.setUserComments}
                              setInputPostPhoto={this.props.setInputPostPhoto}
                              setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                              setInputPostText={this.props.setInputPostText}
                              setButtonEditPostClick={this.props.setButtonEditPostClick}
                              buttonEditPost={this.props.buttonEditPost}
                              input_comment={this.props.input_comment}
                              setInputPostComment={this.props.setInputPostComment}
                              commentAvatarUrl={this.props.commentAvatarUrl}
                              commentName={this.props.commentName}
                              commentNickname={this.props.commentNickname}
                              setCommentAvatarUrl={this.props.setCommentAvatarUrl}
                              setCommentName={this.props.setCommentName}
                              setCommentNickname={this.props.setCommentNickname}/>
    }
}

export default PostClass