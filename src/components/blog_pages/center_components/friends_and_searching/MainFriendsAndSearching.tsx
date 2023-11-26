import React from "react";

import main_css from "./MainFriendsAndSearching.module.css";

import search_svg from "../../../../assets/images/friends/search.svg";
import chatting from "../../../../assets/images/other/chat_with_user.svg";
import adding_to_friend from "../../../../assets/images/other/adding_to_friend.svg";

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const MainFriendsAndSearching = () => {
    return (
        <section className={main_css.friends}>
            <section className={main_css.friends_searching}>
                <img src={search_svg} alt={'search icon'}/>
                <input placeholder={'Поиск'}/>
            </section>
            <section className={main_css.friends_list}>
                {array.map(() =>
                    <section className={main_css.one_friend}>
                        <section className={main_css.friend_ava}>

                        </section>
                        <section className={main_css.friend_data}>
                            <section>
                                <section className={main_css.friend_name}>
                                    Имя Фамилия
                                </section>
                                <section className={main_css.friend_nickname}>
                                    @name
                                </section>
                            </section>
                            <section className={main_css.friend_description}>
                                ня =^-^= добавляйтесь в друзяффки!!!
                            </section>
                        </section>
                        <section className={main_css.friend_functional}>
                            <img src={chatting} alt={'chat'}/>
                            <img src={adding_to_friend} alt={'adding to friend'}/>
                        </section>
                    </section>)}
            </section>
        </section>
    )
}

export default MainFriendsAndSearching
