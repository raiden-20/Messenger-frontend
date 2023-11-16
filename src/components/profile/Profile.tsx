import React from 'react';
import Navigation from '../navigation/Navigation';
import prof from './Profile.module.css'
import cat from '../../assets/images/cat_registration.jpg'

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
                                        <div className={prof.name}>Другой Челик</div>
                                        <div className={prof.userName}>@name</div>
                                    </section>
                                    <section>

                                    </section>
                                </section>
                                <section>
                                    <p>Целуйте мониторы!!!!
                                    Я в сети</p>
                                </section>
                            </section>
                            <section className={prof.posts}>
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
                            <section>

                            </section>
                        </section>
                    </aside>
                </section>
            </section>

        </div>
    )
}

export default Profile