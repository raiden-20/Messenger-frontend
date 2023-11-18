import React from "react";
import reg_new_pass from './Registration_new_password.module.css'
import '../../css_options/Options.css'
import '../../css_options/Page.css'

const Registration_new_password = () => {
    return (
        <div className={'page'}>
            <section className={'main'}>
                <section className={'content'}>
                    <aside>
                    </aside>
                    <section className={reg_new_pass.main}>
                        <header>СимОн</header>
                        <form>
                            <section className={reg_new_pass.inputs}>
                                <input placeholder={'Новый пароль'}/>
                                <input placeholder={'Подтвердить пароль'}/>
                            </section>
                            <button className={'main_page_button'}>Сбросить пароль</button>
                        </form>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Registration_new_password