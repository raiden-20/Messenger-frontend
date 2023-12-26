import React, {Component} from "react";
import OneUserDataComponent from "./OneUserDataComponent";
import {
    PropsOneUserDataClass,
    StateOneUserDataClass
} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import axios from "axios";
import config from "../../../../../../paths/config";

class OneUserDataClass extends Component<PropsOneUserDataClass, StateOneUserDataClass> {
    likeComment = () => {
        axios.put('http://localhost:8080/blog/comment/like',  {
            comment_id: this.props.comment_id
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
        axios.delete(`http://localhost:8080/blog/comment/${this.props.comment_id}`, config)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        //ok
                    }
                }
            }).catch(error => {
            switch (error.response.status) {
                case 403: {
                    //bad token
                    break
                }
                case 404: {
                    //comment doesn't exist
                }
            }
        })
    }

    render() {
        return <OneUserDataComponent avatarUrl={this.props.avatarUrl}
                                     name={this.props.name}
                                     nickname={this.props.nickname}
                                     isLike={this.props.isLike}
                                     likesCount={this.props.likesCount}
                                     time={this.props.time}
                                     text={this.props.time}
                                     deleteComment={this.deleteComment}
                                     likeComment={this.likeComment}
                                     commentsCount={this.props.commentsCount}/>
    }
}

export default OneUserDataClass