import React, {Component} from "react";
import main_css from "./MainFriendsAndSearching.module.css";
import search_svg from "../../../../assets/images/friends/search.svg";
import {PropsFriends, StateFriends, User} from "../../../../redux/interfaces/friends/friends";
import OneUser from "./components/OneUser";


class MainFriendsAndSearching extends Component<PropsFriends, StateFriends>{
    render() {
        return (
            <section className={main_css.friends}>
                <section className={main_css.friends_searching}>
                    <img src={search_svg} alt={'search icon'}/>
                    <input placeholder={'Поиск'}/>
                </section>
                <section className={main_css.friends_list}>
                    {this.props.users.map((user: User) => <OneUser bio={user.bio}
                                                                   name={user.name}
                                                                   nickname={user.nickname}
                                                                   surname={user.surname}
                                                                   followed={user.followed}
                                                                   setFollow={this.props.setFollow}
                                                                   setUnfollow={this.props.setUnfollow}
                                                                   id={user.id}/>)}
                </section>
            </section>
        )
    }
}

export default MainFriendsAndSearching
