import React, {Component} from "react";
import nav from "../Navigation.module.css";

class NavigationMoreSection extends Component {
    render() {
        return (
            <section className={nav.more_settings}>
                <section>
                    <div><strong>Тема:</strong></div>
                    <button className={nav.button_set_theme}>Светлая</button>
                </section>
                <button className={nav.button_exit}>Выйти из аккаунта</button>
            </section>
        )
    }
}

export default NavigationMoreSection