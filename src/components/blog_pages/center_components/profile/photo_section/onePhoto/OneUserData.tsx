import onePhoto_css from "./OnePhoto.module.css";
import default_ava from "../../../../../../assets/images/default_profile_ava.svg";
import like_isLiked from "../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../assets/images/post/like_notLiked.svg";
import comment from "../../../../../../assets/images/post/comment.svg";
import TimeComponent from "../../post/time/TimeComponent";
import React from "react";
import {PropsOneUserComponent} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";

const OneUserData = (props: PropsOneUserComponent) => {
    return (
        <section className={onePhoto_css.user}>
            <img className={onePhoto_css.user_ava} src={props.avatarUrl === '' ? default_ava : props.avatarUrl} alt={'user avatar'}/>
            <section className={onePhoto_css.userPostData}>
                <section className={onePhoto_css.header}>
                    <section className={onePhoto_css.nameNick}>
                        <section><strong>{props.name}</strong></section>
                        <section>@{props.nickname}</section>
                    </section>
                </section>
                {props.text}
                <section className={onePhoto_css.footer}>
                    <section className={onePhoto_css.likeComments}>
                        <section>
                            <button className={onePhoto_css.button}>
                                <img src={props.isLike ? like_isLiked : like_notLiked} alt={'likes'}/>
                            </button>
                            <div>
                                {props.likesCount}
                            </div>
                        </section>
                        <section>
                            <button className={onePhoto_css.button}>
                                <img src={comment} alt={'likes'}/>
                            </button>
                            <div>{props.commentsCount}</div>
                        </section>
                    </section>
                    <TimeComponent time={props.time.split('-')}/>
                </section>
            </section>
        </section>
    )
}
export default OneUserData