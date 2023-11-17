import React from 'react';
import Navigation from '../navigation/Navigation';
import prof from './Profile.module.css'
import cat from '../../assets/images/cat_registration.jpg'
import create from '../../assets/images/other/create_post.svg'
import profile_settings from '../../assets/images//other/profile_settings.svg'
import post_css from "./post/Post.module.css";

const Profile = () => {
    return (
        <div>
            <section className={prof.page}>
                <Navigation/>
                <section className={prof.main}>
                    <section className={prof.info}>
                        <section className={prof.bg_photo}>
                        </section>
                        <main>
                            <section className={prof.bio}>
                                <section className={prof.bio_row}>
                                    <figure>
                                        <img src={cat} alt={'this is cat'}/>
                                    </figure>
                                    <section className={prof.name_and_status}>
                                        <div className={prof.name}>Имя Фамилия</div>
                                        <div className={prof.userName}>@name</div>
                                    </section>
                                    <section className={prof.profile_icons}>
                                        <img src={profile_settings} alt={'settings'}/>
                                    </section>
                                </section>
                                <section>
                                    <p>Целуйте мониторы!!!!
                                    Я в сети</p>
                                </section>
                            </section>
                            <section className={prof.posts}>
                                <section className={post_css.all_page}>
                                    <section className={post_css.page}>
                                        <header>
                                            <section>

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
                    <aside>
                        <section className={prof.friends}>
                            <section>
                                Друзья 10
                            </section>
                            <section>

                            </section>
                        </section>
                        <section className={prof.photo}>
                            <section>
                                Фото 6
                            </section>
                            <section className={prof.group_photo}>
                                <section>

                                </section>
                                <section>

                                </section>
                            </section>
                        </section>
                        <section>
                            <button>
                                <section>
                                    <img src={create} alt={'create_icon'}/>
                                    Создать
                                </section>
                            </button>
                        </section>
                    </aside>
                </section>
            </section>

        </div>
    )
}

export default Profile