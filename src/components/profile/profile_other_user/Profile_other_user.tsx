import React from 'react';
import Navigation from '../../navigation/Navigation';
import prof_oth_us from './Profile_other_user.module.css'
import cat from '../../../assets/images/cat_registration.jpg'
import chatting from '../../../assets/images/other/chat_with_user.svg'
import adding_to_friend from '../../../assets/images/other/adding_to_friend.svg'
import post_css from "../post/Post.module.css";
import page_prof from '../css_options_profile/Page.module.css'
import options_prof from '../css_options_profile/Options.module.css'

const Profile_other_user = () => {
    return (
        <div className={page_prof.div}>
            <section className={page_prof.page}>
                <Navigation/>
                <section className={page_prof.main}>
                    <section className={page_prof.info}>
                        <section className={options_prof.bg_photo}>
                        </section>
                        <main>
                            <section className={page_prof.bio}>
                                <section className={prof_oth_us.bio_row}>
                                    <figure className={options_prof.figure}>
                                        <img src={cat} alt={'this is cat'}/>
                                    </figure>
                                    <section className={page_prof.name_and_status}>
                                        <div className={options_prof.name}>Другой Челик</div>
                                        <div className={options_prof.userName}>@name</div>
                                    </section>
                                    <section className={prof_oth_us.profile_icons}>
                                        <img src={chatting} alt={'chat'}/>
                                        <img src={adding_to_friend} alt={'adding to friend'}/>
                                    </section>
                                </section>
                                <section>
                                    <p>Целуйте мониторы!!!!
                                    Я в сети</p>
                                </section>
                            </section>
                            <section className={page_prof.posts}>
                                <section className={post_css.all_page}>
                                    <section className={post_css.page}>
                                        <header>
                                            <section className={post_css.post_author_img}>

                                            </section>
                                            <section className={post_css.name_and_status}>
                                                <div className={post_css.name}>Имя Фамилия</div>
                                                <div className={post_css.userName}>@name</div>
                                            </section>
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
                                </section>
                            </section>
                        </main>
                    </section>
                    <aside className={prof_oth_us.aside}>
                        <section className={page_prof.friends}>
                            <section>
                                Друзья 10
                            </section>
                            <section>

                            </section>
                        </section>
                        <section className={page_prof.photo}>
                            <section>
                                Фото 6
                            </section>
                            <section className={page_prof.group_photo}>
                                <section className={options_prof.photo_section}>

                                </section>
                                <section className={options_prof.photo_section}>

                                </section>
                            </section>
                        </section>
                    </aside>
                </section>
            </section>

        </div>
    )
}

export default Profile_other_user