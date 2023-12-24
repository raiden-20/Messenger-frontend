import React from "react";
import {Post, PropsPostComponent} from "../../../../../../redux/interfaces/profile/post/post";
import OnePostClass from "../onePost/OnePostClass";

const PostComponent = (props: PropsPostComponent) => {
    return (
        <div>
            {props.posts.map((post: Post) => (
                <OnePostClass avatarUrl={props.avatarUrl}
                              message={props.message}
                              name={props.name}
                              nickname={props.nickname}
                              setMessage={props.setMessage}
                              post={post}
                              userComments={props.userComments}
                              setUserComments={props.setUserComments}
                              setInputPostPhoto={props.setInputPostPhoto}
                              setInputPostPhotoUrl={props.setInputPostPhotoUrl}
                              setInputPostText={props.setInputPostText}
                              setButtonEditPostClick={props.setButtonEditPostClick}
                              buttonEditPost={props.buttonEditPost}
                              input_comment={props.input_comment}
                              setInputPostComment={props.setInputPostComment}/>
            ))}
        </div>

    )
}

export default PostComponent