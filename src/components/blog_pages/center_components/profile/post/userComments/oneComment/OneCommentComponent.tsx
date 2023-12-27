import one_comment_css from './OneComment.module.css'
import {PropsOneCommentComponent} from "../../../../../../../redux/interfaces/profile/post/comments";
import default_ava from '../../../../../../../assets/images/default_profile_ava.svg'
import post_css from "../../postMain/Post.module.css";
import like_isLiked from "../../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../../assets/images/post/like_notLiked.svg";
import React, {useState} from "react";
import TimeComponent from "../../time/TimeComponent";
import settings_post from "../../../../../../../assets/images/post/settings_post.svg";

const OneCommentComponent = (props: PropsOneCommentComponent) => {
    const [isMouseEnter, setMouseEnter] = useState(false)

    return (
        <div className={one_comment_css.comment}>
            <img src={props.commentAvatarUrl === '' ? default_ava : props.commentAvatarUrl} alt={'user avatar'}/>
            <section className={one_comment_css.bodyComment}>
                <section className={one_comment_css.headerComment}>
                    <section className={one_comment_css.name_nick}>
                        <div><strong>{props.commentName}</strong></div>
                        <div className={one_comment_css.nickname}>@{props.commentNickname}</div>
                    </section>
                    <section>
                        <button className={post_css.button + ' ' + post_css.setting_post}
                                onMouseEnter={() => setMouseEnter(true)}>
                            <img src={settings_post} alt={'settings post'}/>
                        </button>
                        {isMouseEnter ?
                            <section className={one_comment_css.deleteComment} onMouseLeave={() => setMouseEnter(false)}>
                                <button onClick={props.deleteComment} className={post_css.button}><strong>Удалить</strong>
                                </button>
                            </section> : null}
                    </section>
                </section>
                {props.text}
                <section className={one_comment_css.footer}>
                    <div className={one_comment_css.time}>
                        <TimeComponent time={props.time.split('-')}/>
                    </div>

                    <section className={one_comment_css.likes}>
                        <section className={post_css.icon_count}>
                            <button onClick={props.likeComment} className={post_css.button}>
                                {props.isLiked ?
                                    <img src={like_isLiked} className={post_css.icon} alt={'like is liked'}/>
                                    :
                                    <img src={like_notLiked} className={post_css.icon} alt={'like is not liked'}/>
                                }
                                {props.likeCount}
                            </button>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default OneCommentComponent