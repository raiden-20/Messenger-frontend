import React from 'react';
import {NavLink} from 'react-router-dom';
import nav from './Navigation.module.css';

import simon from '../../../assets/images/simon.svg'
import profile from '../../../assets/images/icons_navigation/profile.svg'
import dialogs from '../../../assets/images/icons_navigation/dialogs.svg'
import friends from '../../../assets/images/icons_navigation/friends.svg'
import search from '../../../assets/images/icons_navigation/search.svg'
import settings from '../../../assets/images/icons_navigation/settings.svg'
import more from '../../../assets/images/icons_navigation/more.svg'
import more_close from '../../../assets/images/icons_navigation/more_close.svg'
import more_open from '../../../assets/images/icons_navigation/more_open.svg'
import {PropsNavigation} from "../../../redux/interfaces/navigation/navigationMain";
import NavigationMoreSection from "./components/NavigationMoreSection";

const Navigation = (props: PropsNavigation) => {
    const changeButtonNavStatus = () => {
        if (props.buttonMoreSection) {
            props.setButtonMoreSection(false)
        } else {
            props.setButtonMoreSection(true)
        }
    }
    return (
            <div className={nav.page}>
                <header>
                    <img src={simon}/>
                    СимОн
                </header>
                <section className={nav.links}>
                    <section className={nav.svg_link}>
                        <img className={nav.img} src={profile}/>
                        <NavLink className={nav.button_nav} to={"/profile"}>Профиль</NavLink>
                    </section>
                    <section className={nav.svg_link}>
                        <img className={nav.img} src={dialogs}/>
                        <NavLink className={nav.button_nav} to={"/dialogs"}>Сообщения</NavLink>
                    </section>
                    <section className={nav.svg_link}>
                        <img className={nav.img} src={friends}/>
                        <NavLink className={nav.button_nav} to={"/friends"}>Друзья</NavLink>
                    </section>
                    <section className={nav.svg_link}>
                        <img className={nav.img} src={search}/>
                        <NavLink className={nav.button_nav} to={"/search"}>Поиск</NavLink>
                    </section>
                    <section className={nav.svg_link}>
                        <img className={nav.img} src={settings}/>
                        <NavLink className={nav.button_nav} to={"/settings_account"}>Настройки</NavLink>
                    </section>
                    <section className={nav.svg_link} onClick={changeButtonNavStatus}>
                        <img className={nav.img} src={more}/>
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
                        <NavigationMoreSection token={props.token}/> ): null}

                </section>

            </div>
        )
}

export default Navigation