import React from 'react';
import search_css from './Search.module.css'
import friends_css from "../../other_users/Friends.module.css";
import Navigation from "../../navigation/Navigation";
import search_svg from "../../../../assets/images/friends/search.svg";
import chatting from "../../../../assets/images/other/chat_with_user.svg";
import adding_to_friend from "../../../../assets/images/other/adding_to_friend.svg";

const Search = () => {
    let array = [0]
    return (
        <div className={search_css.div}>
            <section className={search_css.page}>
                <Navigation/>
                <section className={search_css.main}>
                    <section className={search_css.friends}>
                        <section className={search_css.friends_searching}>
                            <img src={search_svg} alt={'search icon'}/>
                            <input placeholder={'Поиск'}/>
                        </section>
                        <section className={search_css.friends_list}>
                            {array.map((i) =>
                                <section className={search_css.one_friend}>
                                    <section className={search_css.friend_ava}>
                                    </section>
                                    <section className={search_css.friend_data}>
                                        <section>
                                            <section className={search_css.friend_name}>
                                                Имя Фамилия
                                            </section>
                                            <section className={search_css.friend_nickname}>
                                                @name
                                            </section>
                                        </section>
                                        <section className={search_css.friend_description}>
                                            ня =^-^= добавляйтесь в друзяффки!!!
                                        </section>
                                    </section>
                                    <section className={search_css.friend_functional}>
                                        <img src={chatting} alt={'chat'}/>
                                        <img src={adding_to_friend} alt={'adding to friend'}/>
                                    </section>
                                </section>)}
                        </section>
                    </section>
                    <section className={search_css.nav_friends}>
                        <section>
                            <button><strong>Люди</strong></button>
                        </section>
                            <section>
                                <button><strong>Публикации</strong></button>
                            </section>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Search