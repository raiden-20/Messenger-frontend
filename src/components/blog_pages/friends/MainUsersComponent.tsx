import React from "react";
import main_css from "./MainUsers.module.css";
import search_svg from "../../../assets/images/friends/search.svg";
import search_header from '../../../assets/images/friends/search_header.svg'
import {PropsUsersComponent} from "../../../redux/interfaces/friends/friends";
import {FRIENDS_USER, SEARCH, SUBSCRIBERS_USER, SUBSCRIPTIONS_USER} from "../../../paths/usersPath";
import MainFriendsComponent from "./components/tabs/friends/MainFriendsComponent";
import MainSubscriptionsComponent from "./components/tabs/subscriptions/MainSubscriptionsComponent";
import MainSubscribersComponent from "./components/tabs/subscribers/MainSubscribersComponent";
import {useLocation, useNavigate} from "react-router-dom";
import MainSearchComponent from "./components/tabs/search/MainSearchComponent";


const MainUsersComponent = (props: PropsUsersComponent) => {
    const location = useLocation()
    const navigation = useNavigate()

    const toFriends = () => {
        props.setWhoOpened('friends')
        props.getFriends()
        navigation(FRIENDS_USER)
    }
    const toSubscriptions = () => {
        props.setWhoOpened('subscriptions')
        props.getSubscriptions()
        navigation(SUBSCRIPTIONS_USER)
    }
    const toSubscribers = () => {
        props.setWhoOpened('subscribers')
        props.getSubscribers()
        navigation(SUBSCRIBERS_USER)
    }
    const toSearch = () => {
        props.setWhoOpened('search')
        props.getSearch()
        navigation(SEARCH)
    }

    return (
        <div className={main_css.div}>
            <section className={main_css.friends}>
                <header className={main_css.header}>
                    <section>
                        <button onClick={toFriends} className={main_css.selected}>
                            <strong>Друзья</strong> {props.countFriends}
                        </button>
                        <button onClick={toSubscriptions} className={props.whoOpened === 'subscriptions' ? main_css.selected : ''}>
                            <strong>Подписки</strong> {props.countSubscriptions}
                        </button>
                        <button onClick={toSubscribers} className={props.whoOpened === 'subscribers' ? main_css.selected : ''}>
                            <strong>Подписчики</strong> {props.countSubscribers}
                        </button>
                    </section>
                    <img src={search_header} alt={'searching friend'} onClick={toSearch}/>
                </header>
                <section className={main_css.friends_searching}>
                    <img src={search_svg} alt={'search icon'}/>
                    <input placeholder={'Поиск'}/>
                </section>
                {location.pathname === FRIENDS_USER ? <MainFriendsComponent usersShortInfo={props.usersShortInfo}
                                                                            countFriends={props.countFriends}
                                                                            actionRequest={props.actionRequest}
                                                                            whoOpened={props.whoOpened}
                                                                            GetUserFromListAuthData={props.GetUserFromListAuthData}/> :
                location.pathname === SUBSCRIPTIONS_USER ? <MainSubscriptionsComponent usersShortInfo={props.usersShortInfo}
                                                                                       countSubscriptions={props.countSubscriptions}
                                                                                       actionRequest={props.actionRequest}
                                                                                       whoOpened={props.whoOpened}
                                                                                       GetUserFromListAuthData={props.GetUserFromListAuthData}/> :
                location.pathname === SUBSCRIBERS_USER ? <MainSubscribersComponent usersShortInfo={props.usersShortInfo}
                                                                                   countSubscribers={props.countSubscribers}
                                                                                   actionRequest={props.actionRequest}
                                                                                   whoOpened={props.whoOpened}
                                                                                   GetUserFromListAuthData={props.GetUserFromListAuthData}/> :
                    location.pathname === SEARCH ? <MainSearchComponent usersShortInfo={props.usersShortInfo}
                                                                        actionRequest={props.actionRequest}
                                                                        whoOpened={props.whoOpened}
                                                                        GetUserFromListAuthData={props.GetUserFromListAuthData}/> : null}
            </section>
        </div>
    )
}

export default MainUsersComponent
