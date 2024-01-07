import React from 'react';
import {useNavigate} from 'react-router-dom';
import nav from './Navigation.module.css';

import simon from '../../../assets/images/simon.svg'
import profile from '../../../assets/images/icons_navigation/profile.svg'
import dialogs from '../../../assets/images/icons_navigation/dialogs.svg'
import friends from '../../../assets/images/icons_navigation/friends.svg'
import settings from '../../../assets/images/icons_navigation/settings.svg'
import more from '../../../assets/images/icons_navigation/more.svg'
import more_close from '../../../assets/images/icons_navigation/more_close.svg'
import more_open from '../../../assets/images/icons_navigation/more_open.svg'
import {PropsNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import NavigationMoreSection from "./components/NavigationMoreSection";
import {PROFILE_OTHER_USER, PROFILE_USER} from "../../../paths/profilePath";
import {FRIENDS_USER} from "../../../paths/usersPath";
import {SETTINGS} from "../../../paths/navigationPath";

const NavigationComponent = (props: PropsNavigation) => {
    const navigation = useNavigate()

    const changeButtonNavStatus = () => {
        if (props.buttonMoreSection) {
            props.setButtonMoreSection(false)
        } else {
            props.setButtonMoreSection(true)
        }
    }

    const toProfile = () => {
        // @ts-ignore
        localStorage.setItem('idUser', localStorage.getItem('id'))
        navigation(PROFILE_USER)
    }

    const toFriends = () => {
        // @ts-ignore
        localStorage.setItem('idUser', localStorage.getItem('id'))
        navigation(FRIENDS_USER)
    }
    const toSettings = () => {
        // @ts-ignore
        localStorage.setItem('idUser', localStorage.getItem('id'))
        navigation(SETTINGS)
    }

    return (
            <div className={nav.page}>
                <header>
                    <img src={simon} alt={'logo and header'}/>
                    СимОн
                </header>
                <section className={nav.links}>
                    <section className={nav.svg_link} onClick={toProfile}>
                        <img className={nav.img} src={profile} alt={'navigate to profile'}/>
                        <button className={nav.button_nav}>Профиль</button>
                    </section>
                    <section className={nav.svg_link} onClick={() => {}}>
                        <img className={nav.img} src={dialogs} alt={'navigate to dialogs'}/>
                        <button className={nav.button_nav}>Сообщения</button>
                    </section>
                    <section className={nav.svg_link} onClick={toFriends}>
                        <img className={nav.img} src={friends} alt={'navigate to friends'}/>
                        <button className={nav.button_nav} >Друзья</button>
                    </section>
                    <section className={nav.svg_link} onClick={toSettings}>
                        <img className={nav.img} src={settings} alt={'navigate to settings'}/>
                        <button className={nav.button_nav}>Настройки</button>
                    </section>
                    <section className={nav.svg_link} onClick={changeButtonNavStatus}>
                        <img className={nav.img} src={more} alt={'navigate to more'}/>
                        <section className={nav.more_section}>
                            <button className={nav.button_nav}>Еще</button>
                            {!props.buttonMoreSection ?
                                <img className={nav.icon_more_op} src={more_close}
                                     alt={'navigation more section close'}/> :
                                <img className={nav.icon_more_op} src={more_open}
                                     alt={'navigation more section open'}/>}
                        </section>
                    </section>
                    {props.buttonMoreSection ? (
                        <NavigationMoreSection token={props.token}
                                               setToken={props.setToken}
                                               setData={props.setData}/> ): null}

                </section>

            </div>
        )
}

export default NavigationComponent