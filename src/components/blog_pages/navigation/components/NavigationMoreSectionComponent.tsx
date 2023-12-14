import React from "react";
import nav from "../Navigation.module.css";
import {PropsExitComponent} from "../../../../redux/interfaces/navigation/navigationExit";

const NavigationMoreSectionComponent = (props: PropsExitComponent) => {
    return (
        <section className={nav.more_settings}>
            <section>
                <div><strong>Тема:</strong></div>
                <button className={nav.button_set_theme}>Светлая</button>
            </section>
            <button className={nav.button_exit} onClick={props.enter}>Выйти</button>
        </section>
    )
}

export default NavigationMoreSectionComponent