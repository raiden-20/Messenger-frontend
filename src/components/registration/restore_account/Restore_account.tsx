import React from 'react';
import restore_css from './Restore_account.module.css'
import option_css from '../css_options/Options.module.css'
const Restore_account = () => {
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
                <button className={option_css.main_page_button + ' ' + restore_css.button_restore}>Восстановить</button>
                <button className={option_css.cancel + ' ' + restore_css.button_cancel}>Отменить</button>
            </footer>
        </section>
    )
}

export default Restore_account