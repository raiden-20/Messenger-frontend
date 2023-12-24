import post_css from "../postMain/Post.module.css";
import default_profile_ava from "../../../../../../assets/images/default_profile_ava.svg";
import cat from "../../../../../../assets/images/cat_registration.jpg";
import settings_post from "../../../../../../assets/images/post/settings_post.svg";
import like_isLiked from "../../../../../../assets/images/post/like_isLiked.svg";
import like_notLiked from "../../../../../../assets/images/post/like_notLiked.svg";
import comment from "../../../../../../assets/images/post/comment.svg";
import React, {useState} from "react";
import {OnePost, Post} from "../../../../../../redux/interfaces/profile/post/post";
import TimeComponent from "../time/TimeComponent";
import UserCommentsClass from "../userComments/UserCommentsClass";
import EditPostContainer from "../editPost/EditPostContainer";

const OnePostComponent = (props: OnePost & Post) => {
    const [buttonCommentClick, setButtonCommentClick] = useState(false)
    const [isMouseEnter, setMouseEnter] = useState(false)

    const like_button = () => {

    }

    const edit = () => {
        debugger
        props.editPost()
        props.setButtonEditPostClick(true)
    }

    return (
        <section className={post_css.page}>
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
                        <button onClick={() => edit()} className={post_css.button}><strong>Изменить</strong></button>
                        <button onClick={() => props.deletePost()} className={post_css.button}><strong>Удалить</strong>
                        </button>
                    </section> : null}
                {props.buttonEditPost ? <EditPostContainer/> : null}
                {/*{*/}
                {/*    localStorage.getItem('userId') === localStorage.getItem('id') ?*/}
                {/*        <img src={settings_post} alt={'settings post'}/> : null*/}
                {/*}*/}
            </header>
            <section className={post_css.post}>
                <section className={
                    props.photoUrl.length !== 0 ?
                        props.photoUrl.length === 1 || props.photoUrl.length === 2 ? post_css.input_photo2 :
                            props.photoUrl.length === 3 ? post_css.input_photo3 :
                                props.photoUrl.length === 4 ? post_css.input_photo4 :
                                    props.photoUrl.length === 5 || props.photoUrl.length === 6 ? post_css.input_photo5 : '' :
                        post_css.input_photo0}>
                    {props.photoUrl.map((url: string, i: number) => (
                        <section>
                            <img src={cat} alt={'input img'} className={post_css.one_photo}/>
                        </section>
                    ))}
                </section>
                <section className={post_css.text}>
                    Lorem ipsum dolor sit amet consectetur. Cras facilisis diam lacus massa ultricies volutpat vitae.
                    Natoque consequat ut id nulla a faucibus scelerisque in. Ullamcorper dignissim blandit enim sed
                    morbi urna sit. Amet interdum amet purus urna sit. Odio interdum nec elit arcu nunc. Posuere
                    bibendum tempor adipiscing aliquet dignissim. In arcu viverra id suspendisse amet.
                </section>
            </section>
            <footer className={post_css.footer}>
                <section className={post_css.like_comment}>
                    <section className={post_css.icon_count}>
                        {props.isLiked ?
                            <button onClick={like_button} className={post_css.button}>
                                <img src={like_isLiked} className={post_css.icon} alt={'like is liked'}/>
                            </button> :
                            <button onClick={like_button} className={post_css.button}>
                                <img src={like_notLiked} className={post_css.icon} alt={'like is not liked'}/>
                            </button>
                        }
                        {props.likesCount}
                    </section>
                    <section className={post_css.icon_count}>
                        <button className={post_css.button} onClick={() => setButtonCommentClick(true)}>
                            <img src={comment} className={post_css.icon} alt={'comment icon'}/>
                        </button>
                        {buttonCommentClick ? <UserCommentsClass userComments={props.userComments}
                                                                 setButtonCommentClick={setButtonCommentClick}
                                                                 setUserComments={props.setUserComments}
                                                                 commentCount={props.commentCount}
                                                                 idPost={props.idPost}
                                                                 isLiked={props.isLiked}
                                                                 likesCount={props.likesCount}
                                                                 photoUrl={props.photoUrl}
                                                                 text={props.text}
                                                                 time={props.time}
                                                                 avatarUrl={props.avatarUrl}
                                                                 buttonEditPost={props.buttonEditPost}
                                                                 message={props.message}
                                                                 name={props.name}
                                                                 nickname={props.nickname}/> : null}
                        {props.commentCount}
                    </section>
                </section>
                <TimeComponent time={props.time.split('-')}/>
            </footer>
        </section>
    )
}

export default OnePostComponent