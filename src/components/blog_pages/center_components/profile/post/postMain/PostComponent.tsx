import React, {useState} from "react";
import {Post, PropsPostComponent} from "../../../../../../redux/interfaces/profile/post/post";
import OnePostClass from "../onePost/OnePostClass";
import post from './Post.module.css'
import ProfileButtonCreatingPostContainer from "../../profile/profile_new_post/ProfileNewPostContainer";

const PostComponent = (props: PropsPostComponent) => {
    const [isButtonCreatPostPressed, setButtonCreatPostPressed] = useState(false)


    if (props.posts.length > 0) {
        return (
            <div>
                {props.posts.map((post: Post) => (
                    <OnePostClass avatarUrl={props.avatarUrl}
                                  message={props.message}
                                  name={props.name}
                                  nickname={props.nickname}
                                  setMessage={props.setMessage}
                                  post={post}
                                  comments={props.comments}
                                  setUserComments={props.setUserComments}
                                  setInputPostPhoto={props.setInputPostPhoto}
                                  setInputPostPhotoUrl={props.setInputPostPhotoUrl}
                                  setInputPostText={props.setInputPostText}
                                  setButtonEditPostClick={props.setButtonEditPostClick}
                                  buttonEditPost={props.buttonEditPost}
                                  input_comment={props.input_comment}
                                  setInputPostComment={props.setInputPostComment}
                                  deleteOneComment={props.deleteOneComment}
                                  deleteOnePost={props.deleteOnePost}
                                  setOneComment={props.setOneComment}
                                  setOnePost={props.setOnePost}
                                  addOneComment={props.addOneComment}
                                  setOneCommentCountPost={props.setOneCommentCountPost}
                                  setOneLikeCommentPost={props.setOneLikeCommentPost}
                                  setOneLikeCountPost={props.setOneLikeCountPost}
                                  setOneCommentUserData={props.setOneCommentUserData}/>
                ))}
            </div>

        )
    } else if (localStorage.getItem('idUser') === localStorage.getItem('id')){
        return (
            <div className={post.noPost}>
                <p>
                    Пока что здесь ничего нет... Не хотите
                    <button className={post.link} onClick={() => setButtonCreatPostPressed(true)}>
                        поделиться
                    </button>
                    чем-нибудь?
                </p>
                {isButtonCreatPostPressed ? <ProfileButtonCreatingPostContainer setButtonCreatPostPressed={setButtonCreatPostPressed}/> : null}
            </div>
        )
    }
    else {
        return (
            <div className={post.noPostOther}>
                <p>
                    У пользователя еще нет постов....
                </p>
            </div>
        )
    }
}

export default PostComponent