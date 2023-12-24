import {Component} from "react";
import OneCommentComponent from "./OneCommentComponent";
import {Comment} from "../../../../../../../redux/interfaces/profile/post/comments";
import axios from "axios";
import config from "../../../../../../paths/config";

class OneCommentClass extends Component<Comment, Comment> {

    name = 'Настя'
    nickname = 'stasy'
    avatarUrl = ''

    likeComment = () => {
        axios.put('http://localhost:8080/blog/comment/like',  {
            // todo comment id
        },config)
            .then(response => {
                switch (response.status) {
                    case 200:
                        //ok
                }
        }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //bad token
                    break
                }
                case 404: {
                    //post doesn't exist
                }
            }
        })
    }

    deleteComment = () => {

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/auth/data/${this.props.user_id}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.nickname = response.data.nickname
                    }
                }
        })
        axios.get(`http://localhost:8080/social/data/${this.props.user_id}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        this.name = response.data.name
                        this.avatarUrl = response.data.avatarUrl
                    }
                }
            })
    }


    render() {
        return <OneCommentComponent name={this.name}
                                    nickname={this.nickname}
                                    avatarUrl={this.avatarUrl}
                                    text={this.props.text}
                                    createdAt={this.props.createdAt}
                                    countLikes={this.props.countLikes}
                                    isLiked={this.props.isLiked}
                                    likeComment={this.likeComment}
                                    deleteComment={this.deleteComment}/>
    }
}

export default OneCommentClass