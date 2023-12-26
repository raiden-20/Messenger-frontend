import {PropsOnePostComponent} from "../../../../../../redux/interfaces/profile/photo/postInPhoto";
import cat from '../../../../../../assets/images/cat_registration.jpg'
import prof_setting from "../../profile/profile_setting/ProfileSetting.module.css";
import React from "react";
import onePhoto_css from './OnePhoto.module.css'
import post_comm_css from "../../post/userComments/UserComments.module.css";
import post_css from "../../post/postMain/Post.module.css";
import sent_comment from "../../../../../../assets/images/post/sent_comment.svg";
import {Comment} from "../../../../../../redux/interfaces/profile/post/comments";
import OneUserDataClass from "./oneUserData/OneUserDataClass";

const OnePhotoComponent = (props: PropsOnePostComponent) => {

    const setInputComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.value !== '') {
            props.setInputPostComment(event.target.value)
        }

    }

    return (
        <section className={prof_setting.location_edit_window}>
            <section className={prof_setting.overflay} onClick={() => props.setButtonOpenPhoto(false)}></section>
            <section className={onePhoto_css.page}>
                <img src={cat} alt={'user_photo'} className={onePhoto_css.photo}/>
                <section className={onePhoto_css.body}>
                    <OneUserDataClass comment_id={''}
                                      avatarUrl={props.avatarUrl}
                                      name={props.name}
                                      nickname={props.nickname}
                                      isLike={props.isLiked}
                                      likesCount={props.countLikes}
                                      time={props.time}
                                      text={props.text}
                                      commentsCount={props.countComments}/>
                    <section className={post_comm_css.section_writeComment}>
                            <textarea placeholder={'Написать комментарий'} value={props.input_comment}
                                      onChange={setInputComment}></textarea>
                        <button className={post_css.button} onClick={props.setComment}>
                            <img src={sent_comment} alt={'sent comment'}/>
                        </button>
                    </section>
                    <section className={onePhoto_css.comments}>
                        {props.userComments.map((oneComment: Comment) => (
                            <OneUserDataClass comment_id={oneComment.comment_id}
                                              avatarUrl={props.avatarUrl}
                                              name={props.name}
                                              nickname={props.nickname}
                                              isLike={oneComment.isLiked}
                                              likesCount={oneComment.countLikes}
                                              time={oneComment.time}
                                              text={oneComment.text}
                                              commentsCount={''}/>
                        ))}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default OnePhotoComponent