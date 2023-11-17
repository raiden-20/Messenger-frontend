import React from "react";
import Navigation from "../navigation/Navigation";
import friends_css from './Friends.module.css';
import search_svg from '../../assets/images/icons_navigation/search.svg'

const Friends = () => {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        <div>
            <section className={friends_css.page}>
                <Navigation/>
                <section className={friends_css.main}>
                    <section className={friends_css.friends}>
                        <section className={friends_css.friends_searching}>
                            <img src={search_svg}/>
                            <input placeholder={'Поиск'}/>
                        </section>
                        <section className={friends_css.friends_list}>
                            {array.map((i) =>
                                <section className={friends_css.one_friend}>
                                    <section className={friends_css.friend_ava}>

                                    </section>
                                    <section className={friends_css.friend_data}>
                                        <section>
                                            <section className={friends_css.friend_name}>
                                                Имя Фамилия
                                            </section>
                                            <section className={friends_css.friend_nickname}>
                                                @name
                                            </section>
                                        </section>
                                        <section className={friends_css.friend_description}>
                                            ня =^-^= добавляйтесь в друзяффки!!!
                                        </section>
                                    </section>
                                    <section className={friends_css.friend_functional}>

                                    </section>
                                </section>)}
                        </section>
                    </section>
                    <section className={friends_css.nav_friends}>
                        <section>
                            <button>Друзья 20</button>
                        </section>
                        <section>
                            <button>Заявки в друзья 3</button>
                        </section>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Friends