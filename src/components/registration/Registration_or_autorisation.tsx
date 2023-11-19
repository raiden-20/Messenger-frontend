import React from "react";
import reg from './Registration_or_autorisation.module.css'
import './css_options/Options.css'
import './css_options/Page.css'

const Registration_or_autorisation = () => {
    return (
        <div className={'page'}>
            <section className={'main'}>
                <section className={'content' + ' '+ reg.content}>
                    <aside>
                    </aside>
                    <main>
                        <header>СимОн</header>
                        <section className={reg.functional}>
                            <form>
                                <section className={reg.inputs}>
                                    <input placeholder={'Электронный адрес или никнейм'}/>
                                    <input placeholder={'Пароль'}/>
                                </section>
                                <button className={'main_page_button'} type={'submit'}>Войти</button>
                            </form>
                            <section className={reg.other_buttons}>
                                <button className={reg.forgot_button}>Забыли пароль?</button>
                                <section className={reg.or}>
                                    <hr></hr>
                                    или
                                    <hr></hr>
                                </section>
                                <button className={reg.registration_button}>Зарегистрироваться</button>
                            </section>
                        </section>
                    </main>
                </section>
            </section>

        </div>
    )
}

export default Registration_or_autorisation