import onePhoto_css from "../../photo_section/onePhoto/OnePhoto.module.css";
import default_ava from "../../../../../../assets/images/default_profile_ava.svg";
import like_isLiked from "../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../assets/images/post/like_notLiked.svg";
import comment from "../../../../../../assets/images/post/comment.svg";
import TimeComponent from "../time/TimeComponent";
import React, {useState} from "react";
import {PropsOneUserComponent} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import post_css from "../postMain/Post.module.css";
import settings_post from "../../../../../../assets/images/post/settings_post.svg";

const OneUserCommentComponent = (props: PropsOneUserComponent) => {
    const [isMouseEnter, setMouseEnter] = useState(false)

    return (
        <section className={onePhoto_css.user}>
            <section className={onePhoto_css.user_ava}>
                <img src={props.avatarUrl === '' ? default_ava : props.avatarUrl} alt={'user avatar'}/>
            </section>

            <section className={onePhoto_css.userPostData}>
                <section className={onePhoto_css.header}>
                    <section className={onePhoto_css.nameNick}>
                        <section><strong>{props.name}</strong></section>
                        <section className={onePhoto_css.nickname}>@{props.nickname}</section>
                    </section>
                    {props.commentId !== '' && props.userId === localStorage.getItem('id') ?
                        <section onMouseLeave={() => setMouseEnter(false)}>
                            <button className={post_css.button + ' ' + post_css.setting_post}
                                    onMouseEnter={() => setMouseEnter(true)}>
                                <img src={settings_post} alt={'settings post'} className={onePhoto_css.settingComment}/>
                            </button>
                            {isMouseEnter ?
                                <section className={onePhoto_css.deleteComment} onMouseLeave={() => setMouseEnter(false)}>
                                    <button onClick={props.deleteComment} className={post_css.button}><strong>Удалить</strong>
                                    </button>
                                </section> : null}
                        </section>
                        : null
                    }

                </section>
                <section className={onePhoto_css.text}>
                    {props.text}
                </section>

                <section className={onePhoto_css.footer}>
                    <section className={onePhoto_css.likeComments}>
                        <section>
                            <button className={onePhoto_css.button} onClick={props.likeComment}>
                                <img src={props.isLike ? like_isLiked : like_notLiked} alt={'likes'}/>
                            </button>
                            <div>
                                {props.likeCount}
                            </div>
                        </section>
                        {props.commentId === '' ?
                            <section>
                                <button className={onePhoto_css.button}>
                                    <img src={comment} alt={'comment'}/>
                                </button>
                                <div>
                                    {props.commentsCount}
                                </div>
                            </section> : null
                        }

                    </section>
                    <TimeComponent time={props.time.split('-')}/>
                </section>
            </section>
        </section>
    )
}
export default OneUserCommentComponent