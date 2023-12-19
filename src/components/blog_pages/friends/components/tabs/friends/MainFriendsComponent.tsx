import React from "react";
import main_css from "../../../MainUsers.module.css";
import {PropsFriendsComponent, User} from "../../../../../../redux/interfaces/friends/friends";
import OneUser from "../../oneUser/OneUser";


const MainFriendsComponent = (props: PropsFriendsComponent) => {
    const changeFriendStatus = (idOtherUser: string, action: string) => {
        props.actionRequest(idOtherUser, action)
    }

    return (
        <section className={main_css.friends_list}>
            {props.users.map((user: User) => <OneUser bio={user.bio}
                                                      name={user.name}
                                                      nickname={user.nickname}
                                                      avatarUrl={user.avatarUrl}
                                                      id={user.id}
                                                      changeFriendStatus={changeFriendStatus}
                                                      whoOpened={props.whoOpened}/>)}
        </section>
    )
}

export default MainFriendsComponent
