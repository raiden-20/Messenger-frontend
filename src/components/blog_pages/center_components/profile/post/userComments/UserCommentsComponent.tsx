import prof_setting from "../../profile/profile_setting/ProfileSetting.module.css";
import React, {useState} from "react";
import {Comment, PropsUserComment} from "../../../../../../redux/interfaces/profile/post/comments";
import post_comm_css from './UserComments.module.css'
import post_css from "../postMain/Post.module.css";
import default_profile_ava from "../../../../../../assets/images/default_profile_ava.svg";
import settings_post from "../../../../../../assets/images/post/settings_post.svg";
import EditPostContainer from "../editPost/EditPostContainer";
import like_isLiked from "../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../assets/images/post/like_notLiked.svg";
import comment from "../../../../../../assets/images/post/comment.svg";
import TimeComponent from "../time/TimeComponent";
import sent_comment from '../../../../../../assets/images/post/sent_comment.svg'
import OneCommentClass from "./oneComment/OneCommentClass";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";

const UserCommentsComponent = (props: PropsUserComment) => {
    const [isMouseEnter, setMouseEnter] = useState(false)

    const setInputComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setInputPostComment(event.target.value)
    }

    return (
        <div>
            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.overflay} onClick={() => props.setButtonCommentClick(false)}></section>
                <section className={post_comm_css.root}>
                    <section className={post_comm_css.page_structure}>
                        <header>
                            <section className={post_css.section_img}>
                                <img src={props.avatarUrl === '' ? default_profile_ava : props.avatarUrl} alt={'this is ava'}/>
                            </section>
                            <section className={post_css.name_and_status}>
                                <div className={post_css.name}>{props.name}</div>
                                <div className={post_css.userName}>{'@' + props.nickname}</div>
                            </section>
                            <button className={post_css.button + ' ' + post_css.setting_post}
                                    onMouseEnter={() => setMouseEnter(true)}>
                                <img src={settings_post} alt={'settings post'}/>
                            </button>
                            {isMouseEnter ?
                                <section className={post_css.setting_choose} onMouseLeave={() => setMouseEnter(false)}>
                                    <button onClick={() => props.edit()} className={post_css.button}><strong>Изменить</strong></button>
                                    <button onClick={() => props.deletePost()} className={post_css.button}><strong>Удалить</strong>
                                    </button>
                                </section> : null}
                            {props.buttonEditPost ? <EditPostContainer postId={props.postId}/> : null}
                            {
                                localStorage.getItem('userId') === localStorage.getItem('id') ?
                                <img src={settings_post} alt={'settings post'}/> : null
                            }
                        </header>
                        <section className={post_comm_css.post_gap}>
                            <section className={post_css.post}>
                                <section className={
                                    props.photoUrl.length !== 0 ?
                                        props.photoUrl.length === 1 || props.photoUrl.length === 2 ? post_css.input_photo2 :
                                            props.photoUrl.length === 3 ? post_css.input_photo3 :
                                                props.photoUrl.length === 4 ? post_css.input_photo4 :
                                                    props.photoUrl.length === 5 || props.photoUrl.length === 6 ? post_css.input_photo5 : '' :
                                        post_css.input_photo0}>
                                    {props.photoUrl.map((url: PostPhoto, i: number) => (
                                        <section>
                                            <img src={url.url} alt={'input img'} className={post_css.one_photo}/>
                                        </section>
                                    ))}
                                </section>
                                <section className={post_css.text}>
                                    {props.text}
                                </section>
                            </section>
                            <footer className={post_css.footer}>
                                <section className={post_css.like_comment}>
                                    <section className={post_css.icon_count}>
                                            <button onClick={props.like_button} className={post_css.button}>
                                                {props.isLiked ?
                                                    <img src={like_isLiked} className={post_css.icon} alt={'like is liked'}/>
                                                    :
                                                    <img src={like_notLiked} className={post_css.icon} alt={'like is not liked'}/>
                                                }
                                            </button>
                                        {props.likeCount}
                                    </section>
                                    <section className={post_css.icon_count}>
                                        <button className={post_css.button}>
                                            <img src={comment} className={post_css.icon} alt={'comment icon'}/>
                                        </button>
                                        {props.commentCount}
                                    </section>
                                </section>
                                <TimeComponent time={props.time.split('-')}/>
                            </footer>
                        </section>
                        <section className={post_comm_css.section_writeComment}>
                            <textarea placeholder={'Написать комментарий'} value={props.input_comment}
                                      onChange={setInputComment}></textarea>
                            <button className={post_css.button} onClick={props.setComment}>
                                <img src={sent_comment} alt={'sent comment'}/>
                            </button>
                        </section>
                        <section className={post_comm_css.comments_arr}>
                            {props.comments.length > 0 ?
                                props.comments.map((comment: Comment) => (
                                <OneCommentClass userId={comment.userId}
                                                 text={comment.text}
                                                 time={comment.time}
                                                 countLikes={comment.countLikes}
                                                 isLiked={comment.isLiked}
                                                 commentId={comment.commentId}
                                                 deleteOneComment={props.deleteOneComment}
                                                 setOneCommentCountPost={props.setOneCommentCountPost}
                                                 setOneLikeCommentPost={props.setOneLikeCommentPost}
                                                 setOneCommentUserData={props.setOneCommentUserData}
                                                 avatarUrl={comment.avatarUrl}
                                                 name={comment.name}
                                                 nickname={comment.nickname}/>
                            )) :
                            <section className={post_comm_css.noComm}>
                                <p>Нет комментарий...</p>
                            </section>}
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default UserCommentsComponent