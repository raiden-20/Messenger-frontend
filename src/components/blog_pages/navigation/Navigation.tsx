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

const Navigation = () => {
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
                    <NavLink className={nav.button_nav} to={"/settings"}>Настройки</NavLink>
                </section>
                <section tabIndex={0} className={nav.more}>
                    <section></section>
                    <section className={nav.more_section}>
                        <div className={nav.button_nav}>Еще</div>
                        <section className={nav.more_icon} ></section>
                    </section>
                </section>
                <section className={nav.more_settings}>
                    <section>
                        <div><strong>Тема:</strong></div>
                        <button className={nav.button_set_theme}>Светлая</button>
                    </section>
                    <button className={nav.button_exit}>Выйти из аккаунта</button>
                </section>
            </section>

        </div>
    )
}

export default Navigation