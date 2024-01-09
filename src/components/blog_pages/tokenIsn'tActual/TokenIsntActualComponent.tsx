import prof_setting from "../center_components/profile/profile/profile_setting/ProfileSetting.module.css";
import token_css from './TokenIsntActual.module.css'
import React from "react";
import {PropsTokenComponent} from "../../../redux/interfaces/token";
import {useNavigate} from "react-router-dom";
import {AUTHORIZATION} from "../../../paths/authPath";

const TokenIsntActualComponent = (props: PropsTokenComponent) => {
    const navigate = useNavigate()
    const exit = () => {
        props.exit()
        navigate(AUTHORIZATION)
    }


    return (
        <section>
            <section className={prof_setting.overflay}></section>
            <section className={prof_setting.location_edit_window}>
                <section className={token_css.window}>
                    <section className={token_css.root}>
                        <header>Конец сессии</header>
                        <p>Ваша сессия <strong>истекла</strong>. Для продолжение войдите в аккаунт заново</p>
                        <button className={token_css.button} onClick={exit}>ОК</button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default TokenIsntActualComponent