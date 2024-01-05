import onePhoto_css from "../OnePhoto.module.css";
import default_ava from "../../../../../../../assets/images/default_profile_ava.svg";
import like_isLiked from "../../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../../assets/images/post/like_notLiked.svg";
import comment from "../../../../../../../assets/images/post/comment.svg";
import TimeComponent from "../../../post/time/TimeComponent";
import React, {useState} from "react";
import {PropsOneUserComponent} from "../../../../../../../redux/interfaces/profile/photo/postInPhoto";
import post_css from "../../../post/postMain/Post.module.css";
import settings_post from "../../../../../../../assets/images/post/settings_post.svg";

const OneUserDataComponent = (props: PropsOneUserComponent) => {
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
                    <button className={post_css.button + ' ' + post_css.setting_post}
                            onMouseEnter={() => setMouseEnter(true)}>
                        <img src={settings_post} alt={'settings post'} className={onePhoto_css.settingComment}/>
                    </button>
                    {isMouseEnter ?
                        <section className={onePhoto_css.deleteComment} onMouseLeave={() => setMouseEnter(false)}>
                            <button onClick={() => props.deleteComment} className={post_css.button}><strong>Удалить</strong>
                            </button>
                        </section> : null}
                </section>
                {props.text}
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
                        <section>
                            <button className={onePhoto_css.button}>
                                <img src={comment} alt={'comment'}/>
                            </button>
                            <div>
                                {props.likeCount}
                            </div>
                        </section>
                    </section>
                    <TimeComponent time={props.time.split('-')}/>
                </section>
            </section>
        </section>
    )
}
export default OneUserDataComponent