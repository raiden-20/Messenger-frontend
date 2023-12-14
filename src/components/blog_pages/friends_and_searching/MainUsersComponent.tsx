import React from "react";
import main_css from "./MainFriendsAndSearching.module.css";
import search_svg from "../../../assets/images/friends/search.svg";
import {PropsUsersComponent} from "../../../redux/interfaces/friends/friends";
import {FRIENDS_USER, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "../../paths/usersPath";
import MainFriendsComponent from "./components/tabs/MainFriendsComponent";
import MainSubscriptionsComponent from "./components/tabs/MainSubscriptionsComponent";
import MainSubscribersComponent from "./components/tabs/MainSubscribersComponent";
import {useLocation, useNavigate} from "react-router-dom";


const MainUsersComponent = (props: PropsUsersComponent) => {
    const location = useLocation()
    const navigation = useNavigate()

    const toFriends = () => {
        props.getFriends()
        navigation(FRIENDS_USER)
    }
    const toSubscriptions = () => {
        props.getSubscriptions()
        navigation(SUBSCRIPTIONS_USER)
    }
    const toSubscribers = () => {
        props.getSubscribers()
        navigation(SUBSCRIBERS_USER)
    }

    return (
        <div className={main_css.div}>
            <section className={main_css.friends}>
                <header>
                    <button onClick={toFriends}><strong>Друзья</strong> {props.countFriends}</button>
                    <button onClick={toSubscriptions}><strong>Подписки</strong> {props.countSubscriptions}</button>
                    <button onClick={toSubscribers}><strong>Подписчики</strong> {props.countSubscribers}</button>
                </header>
                <section className={main_css.friends_searching}>
                    <img src={search_svg} alt={'search icon'}/>
                    <input placeholder={'Поиск'}/>
                </section>
                {location.pathname === FRIENDS_USER ? <MainFriendsComponent users={props.users}
                                                                            countFriends={props.countFriends}/> :
                location.pathname === SUBSCRIPTIONS_USER ? <MainSubscriptionsComponent users={props.users}
                                                                                       countSubscriptions={props.countSubscriptions}/> :
                location.pathname === SUBSCRIBERS_USER ? <MainSubscribersComponent users={props.users}
                                                                                   countSubscribers={props.countSubscribers}/> : null}
            </section>
        </div>
    )
}

export default MainUsersComponent
