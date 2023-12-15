import React from "react";
import main_css from "./MainUsers.module.css";
import search_svg from "../../../assets/images/friends/search.svg";
import search_header from '../../../assets/images/friends/search_header.svg'
import {PropsUsersComponent} from "../../../redux/interfaces/friends/friends";
import {FRIENDS_USER, SEARCH, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "../../paths/usersPath";
import MainFriendsComponent from "./components/tabs/friends/MainFriendsComponent";
import MainSubscriptionsComponent from "./components/tabs/subscriptions/MainSubscriptionsComponent";
import MainSubscribersComponent from "./components/tabs/subscribers/MainSubscribersComponent";
import {useLocation, useNavigate} from "react-router-dom";
import MainSearchComponent from "./components/tabs/search/MainSearchComponent";


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
    const toSearch = () => {
        props.getSearch()
        navigation(SEARCH)
    }

    return (
        <div className={main_css.div}>
            <section className={main_css.friends}>
                <header className={main_css.header}>
                    <section>
                        <button onClick={toFriends}><strong>Друзья</strong> {props.countFriends}</button>
                        <button onClick={toSubscriptions}><strong>Подписки</strong> {props.countSubscriptions}</button>
                        <button onClick={toSubscribers}><strong>Подписчики</strong> {props.countSubscribers}</button>
                    </section>
                    <img src={search_header} alt={'searching friend'} onClick={toSearch}/>
                </header>
                <section className={main_css.friends_searching}>
                    <img src={search_svg} alt={'search icon'}/>
                    <input placeholder={'Поиск'}/>
                </section>
                {location.pathname === FRIENDS_USER ? <MainFriendsComponent users={props.users}
                                                                            countFriends={props.countFriends}
                                                                            actionRequest={props.actionRequest}/> :
                location.pathname === SUBSCRIPTIONS_USER ? <MainSubscriptionsComponent users={props.users}
                                                                                       countSubscriptions={props.countSubscriptions}
                                                                                       actionRequest={props.actionRequest}/> :
                location.pathname === SUBSCRIBERS_USER ? <MainSubscribersComponent users={props.users}
                                                                                   countSubscribers={props.countSubscribers}
                                                                                   actionRequest={props.actionRequest}/> :
                    location.pathname === SEARCH ? <MainSearchComponent users={props.users}
                                                                        actionRequest={props.actionRequest}/> : null}
            </section>
        </div>
    )
}

export default MainUsersComponent
