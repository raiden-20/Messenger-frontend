import React from "react";
import main_css from "../../../MainUsers.module.css";
import {PropsSubscribersComponent} from "../../../../../../redux/interfaces/friends/friends";
import OneUserClass from "../../oneUser/OneUserClass";
import {User} from "../../../../../../redux/interfaces/friends/oneFriend";


const MainSubscribersComponent = (props: PropsSubscribersComponent) => {
    const changeFriendStatus = (idOtherUser: string, action: string) => {
        props.actionRequest(idOtherUser, action)
    }

    return (
        <section className={main_css.friends_list}>
            {props.usersShortInfo.map((user: User) => <OneUserClass bio={user.bio}
                                                                    name={user.name}
                                                                    nickname={user.nickname}
                                                                    avatarUrl={user.avatarUrl}
                                                                    id={user.id}
                                                                    changeFriendStatus={changeFriendStatus}
                                                                    whoOpened={props.whoOpened}
                                                                    status={user.status}
                                                                    GetUserFromListAuthData={props.GetUserFromListAuthData}/>)}
        </section>
    )
}

export default MainSubscribersComponent
