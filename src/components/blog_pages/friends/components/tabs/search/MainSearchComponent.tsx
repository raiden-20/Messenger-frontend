import React from "react";
import main_css from "../../../MainUsers.module.css";
import {PropsSearchComponent, User} from "../../../../../../redux/interfaces/friends/friends";
import OneUser from "../../oneUser/OneUser";


const MainSearchComponent = (props: PropsSearchComponent) => {
    const changeFriendStatus = (idOtherUser: string) => {
        props.actionRequest(idOtherUser, 'create')
    }

    return (
        <section className={main_css.friends_list}>
            {props.usersShortInfo.map((user: User) => <OneUser bio={user.bio}
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
