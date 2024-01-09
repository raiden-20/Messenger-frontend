import React from "react";
import {Post, PropsPostComponent} from "../../../../../../redux/interfaces/profile/post/post";
import post from './Post.module.css'
import OnePostContainer from "../onePost/OnePostContainer";
import ProfileNewPostContainer from "../../profile/profile_new_post/ProfileNewPostContainer";

const PostComponent = (props: PropsPostComponent) => {


    if (props.posts.length > 0) {
        return (
            <div>
                {props.posts.map((post: Post) => (
                    <OnePostContainer post={post}/>
                ))}
            </div>

        )
    } else if (localStorage.getItem('idUser') === localStorage.getItem('id')){
        return (
            <div className={post.noPost}>
                <p>
                    Пока что здесь ничего нет... Не хотите
                    <button className={post.link} onClick={() => props.setButtonCreatePostClick(true)}>
                        поделиться
                    </button>
                    чем-нибудь?
                </p>
                {props.buttonCreatePost ? <ProfileNewPostContainer/> : null}
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