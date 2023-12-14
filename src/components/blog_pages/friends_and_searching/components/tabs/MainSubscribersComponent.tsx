import React from "react";
import main_css from "../../MainFriendsAndSearching.module.css";
import {PropsSubscribersComponent, User} from "../../../../../redux/interfaces/friends/friends";
import OneUser from "../oneUser/OneUser";


const MainFriendsComponent = (props: PropsSubscribersComponent) => {
    return (
        <section className={main_css.friends_list}>
            {props.users.map((user: User) => <OneUser bio={user.bio}
                                                      name={user.name}
                                                      nickname={user.nickname}
                                                      avatarUrl={user.avatarUrl}
                                                      id={user.id}/>)}
        </section>
    )
}

export default MainFriendsComponent
