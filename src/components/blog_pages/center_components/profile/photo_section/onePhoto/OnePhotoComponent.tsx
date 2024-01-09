import {PropsOnePostComponent} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import prof_setting from "../../profile/profile_setting/ProfileSetting.module.css";
import React from "react";
import onePhoto_css from './OnePhoto.module.css'
import post_comm_css from "../../post/userComments/UserComments.module.css";
import post_css from "../../post/postMain/Post.module.css";
import sent_comment from "../../../../../../assets/images/post/sent_comment.svg";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";
import OneUserCommentContainer from "../../post/oneUserComment/OneUserCommentContainer";

const OnePhotoComponent = (props: PropsOnePostComponent) => {

    const setInputComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setInputPostComment(event.target.value)
    }

    return (
        <section className={prof_setting.location_edit_window}>
            <section className={prof_setting.overflay} onClick={() => props.setButtonOpenPhoto(false)}></section>
            <section className={onePhoto_css.page}>
                <section className={onePhoto_css.photo}>
                    <img src={props.onePhotoUrl} alt={'user_photo'}/>
                </section>
                <section className={onePhoto_css.body}>
                    <OneUserCommentContainer commentId={''}
                                             userId={localStorage.getItem('idUser')}
                                             avatarUrl={props.avatarUrl}
                                             name={props.name}
                                             nickname={props.nickname}
                                             isLiked={props.isLiked}
                                             likeCount={props.likeCount}
                                             time={props.time}
                                             text={props.text}
                                             commentsCount={props.commentCount}
                                             likePost={props.likePost}/>
                    <section className={post_comm_css.section_writeComment}>
                            <textarea placeholder={'Написать комментарий'} value={props.input_comment}
                                      onChange={setInputComment}></textarea>
                        <button className={post_css.button} onClick={props.setComment}>
                            <img src={sent_comment} alt={'sent comment'}/>
                        </button>
                    </section>
                    <section className={onePhoto_css.comments}>
                        {props.comments.map((oneComment: Comment) => (
                            <OneUserCommentContainer commentId={oneComment.commentId}
                                                     avatarUrl={oneComment.avatarUrl}
                                                     name={oneComment.name}
                                                     nickname={oneComment.nickname}
                                                     isLiked={oneComment.isLiked}
                                                     likeCount={oneComment.likeCount}
                                                     time={oneComment.time}
                                                     text={oneComment.text}
                                                     userId={oneComment.userId}
                                                     commentsCount={props.commentCount}
                                                     likePost={props.likePost}/>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default OnePhotoComponent