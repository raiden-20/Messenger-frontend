import React from 'react';
import restore_css from './RestoreAccount.module.css'
import option_css from '../css_options/Options.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {PropsAuthRestore} from "../../../redux/interfaces/auth/authRestoreAccount";
import {SUCCESSFUL_ACTIVATION} from "../../paths/authPath";
const RestoreAccount = (props: PropsAuthRestore) => {
    const navigate = useNavigate()

    return (
         <section className={restore_css.root}>
             <header>
                 <strong>Восстановить аккаунт?</strong>
             </header>
             <main>
                 {/*<section className={restore_css.ava_fio}>*/}
                 {/*    <section className={restore_css.ava}>*/}

                 {/*    </section>*/}
                 {/*    <section>*/}
                 {/*        <section>*/}
                 {/*            <strong>Имя Фамилия</strong>*/}
                 {/*            <section>*/}
                 {/*                @name*/}
                 {/*         </section>*/}
                 {/*        </section>*/}
                 {/*    </section>*/}
                 {/*</section>*/}
                 <section>
                     Восстановить аккаунт бла бла бла письмо на почту с подтверждением
                 </section>
             </main>
             <footer>
                 <button className={option_css.main_page_button + ' ' + restore_css.button_restore}
                         onClick={() => navigate(SUCCESSFUL_ACTIVATION)}>
                     Восстановить
                 </button>
                 <NavLink to={'/'} className={option_css.cancel + ' ' + restore_css.button_cancel}>
                     Отменить
                 </NavLink>
             </footer>
         </section>
    )
}

export default RestoreAccount