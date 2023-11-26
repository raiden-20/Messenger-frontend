import React, {Component} from 'react';
import restore_css from './RestoreAccount.module.css'
import option_css from '../css_options/Options.module.css'
import {NavLink} from "react-router-dom";
import {PropsAuthReg, StateAuthReg} from "../../../redux/interfaces/auth/authRegistration";
class RestoreAccount extends Component {

    restore = () => {
        //put
    }

    render() {
        return (
            <section className={restore_css.root}>
                <header>
                    <strong>Восстановить аккаунт?</strong>
                </header>
                <main>
                    <section className={restore_css.ava_fio}>
                        <section className={restore_css.ava}>

                        </section>
                        <section>
                            <section>
                                <strong>Имя Фамилия</strong>
                                <section>
                                    @name
                                </section>
                            </section>
                        </section>
                    </section>
                    <section>
                        Восстановить аккаунт бла бла бла письмо на почту с подтверждением
                    </section>
                </main>

                <footer>
                    <button className={option_css.main_page_button + ' ' + restore_css.button_restore} onClick={this.restore}>
                        Восстановить
                    </button>
                    <NavLink to={'/'} className={option_css.cancel + ' ' + restore_css.button_cancel}>
                        Отменить
                    </NavLink>
                </footer>
            </section>
        )
    }
}

export default RestoreAccount