import React from 'react';
import Navigation from '../../navigation/Navigation';
import prof from './Profile.module.css'
import cat from '../../../assets/images/cat_registration.jpg'
import create from '../../../assets/images/other/create_post.svg'
import profile_settings from '../../../assets/images/other/profile_settings.svg'
import post_css from "../post/Post.module.css";
import page_prof from '../css_options_profile/Page.module.css'
import options_prof from '../css_options_profile/Options.module.css'
import prof_setting from './profile_setting/Profile_setting.module.css'

const Profile = () => {

    const dayArray = Array.from({ length: 31 }, (_, index) => index + 1);
    const monthArray = Array.from({ length: 12 }, (_, index) => index + 1);
    const yearArray = Array.from({ length: 104 }, (_, index) => 2023 - index);

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
                                <section className={prof.bio_row}>
                                    <figure className={options_prof.figure}>
                                        <img src={cat} alt={'this is cat'}/>
                                    </figure>
                                    <section className={page_prof.name_and_status}>
                                        <div className={options_prof.name}>Имя Фамилия</div>
                                        <div className={options_prof.userName}>@name</div>
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
                    <aside className={prof.aside}>
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

            <section className={prof_setting.overflay}></section>

            <section className={prof_setting.location_edit_window}>
                <section className={prof_setting.edit_prof_window}>
                    <form className={prof_setting.edit_form}>
                        <section className={prof_setting.bgc_and_ava}>
                            <section className={prof_setting.bgc_profile}></section>
                            <section className={prof_setting.ava}></section>
                        </section>
                        <section className={prof_setting.form_cont}>
                            <main>
                                <section className={prof_setting.box1}>
                                    <legend>Имя</legend>
                                    <input/>
                                </section>
                                <section className={prof_setting.box2}>
                                    <legend>Фамилия</legend>
                                    <input/>
                                </section>
                                <section className={prof_setting.box3}>
                                    <legend>Никнейм</legend>
                                    <input/>
                                </section>
                                <section className={prof_setting.box4}>
                                    <legend>Дата рождения</legend>
                                    <input type="date"/>
                                </section>
                                <section className={prof_setting.textAreaBox}>
                                    <legend>О себе</legend>
                                    <textarea></textarea>
                                </section>
                            </main>
                            <footer>
                                <button className={prof_setting.cancel}>Отменить</button>
                                <button className={prof_setting.save} type={'submit'}>Сохранить</button>
                            </footer>
                        </section>

                    </form>
                </section>
            </section>




        </div>
    )
}

export default Profile