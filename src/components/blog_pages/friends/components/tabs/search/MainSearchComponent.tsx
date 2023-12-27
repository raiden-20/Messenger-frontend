import React from "react";
import main_css from "../../../MainUsers.module.css";
import {PropsSearchComponent, User} from "../../../../../../redux/interfaces/friends/friends";
import OneUserClass from "../../oneUser/OneUserClass";


const MainSearchComponent = (props: PropsSearchComponent) => {
    const changeFriendStatus = (idOtherUser: string) => {
        props.actionRequest(idOtherUser, 'create')
    }

    return (
        <section className={main_css.friends_list}>
            {props.usersShortInfo.map((user: User) => <OneUserClass bio={user.bio}
                                                                    name={user.name}
                                                                    nickname={user.nickname}
                                                                    avatarUrl={user.avatarUrl}
                                                                    id={user.id}
                                                                    changeFriendStatus={changeFriendStatus}
                                                                    whoOpened={props.whoOpened}/>)}
        </section>
    )
}

export default MainSearchComponent
