import React from "react";

import post_css from './Post.module.css'
import default_profile_ava from "../../../../../assets/images/default_profile_ava.svg";
import {PropsPostComponent} from "../../../../../redux/interfaces/profile/post/post";
import settings_post from '../../../../../assets/images/other/settings_post.svg'

const PostComponent = (props: PropsPostComponent) => {
    return (
        <div>
            <section className={post_css.page}>
                <header>
                    <section className={post_css.section_img}>
                        <img src={props.avatarUrl === '' ? default_profile_ava : props.avatarUrl} alt={'this is ava'}/>
                    </section>
                    <section className={post_css.name_and_status}>
                        <div className={post_css.name}>{props.name}</div>
                        <div className={post_css.userName}>{'@' + props.nickname}</div>
                    </section>
                    <img src={settings_post} alt={'settings post'}/>
                </header>
                <section className={post_css.post}>
                    <section className={post_css.photo_post}>
                        <section>

                        </section>
                        <section>

                        </section>
                    </section>
                    <section>
                        Lorem ipsum dolor sit amet consectetur. Cras facilisis diam lacus massa ultricies volutpat vitae. Natoque consequat ut id nulla a faucibus scelerisque in. Ullamcorper dignissim blandit enim sed morbi urna sit. Amet interdum amet purus urna sit. Odio interdum nec elit arcu nunc. Posuere bibendum tempor adipiscing aliquet dignissim. In arcu viverra id suspendisse amet.
                    </section>
                    <footer>

                    </footer>
                </section>
            </section>
        </div>

    )
}

export default PostComponent