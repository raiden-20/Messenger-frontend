import React from "react";
import reg_curr from './Registration.module.css'
import options_reg from '../css_options/Options.module.css'
import page_reg from '../css_options/Page.module.css'

const Registration = () => {
    return (
        <div className={page_reg.page}>
            <section className={page_reg.main}>
                <section className={page_reg.content + ' ' + reg_curr.content}>
                    <aside>
                    </aside>
                    <main>
                        <header className={options_reg.header}>СимОн</header>
                        <form className={reg_curr.form}>
                            <section className={reg_curr.inputs}>
                                <input className={options_reg.input} placeholder={'Никнейм'}/>
                                <input className={options_reg.input} placeholder={'Электронный адрес'}/>
                                <input className={options_reg.input} placeholder={'Пароль'}/>
                                <input className={options_reg.input} placeholder={'Подтвердите пароль'}/>
                            </section>
                            <button className={options_reg.main_page_button}>Зарегистрироваться</button>
                        </form>
                    </main>
                        {/*<section>*/}
                        {/*    Сообщение об ошибке (ник занят, почта некорректная бла бла бла)*/}
                        {/*</section>*/}
                        {/*<section>*/}
                        {/*    На Вашу почту было отправлено письмо с подтверждение бла бла бла*/}
                        {/*</section>*/}
                </section>
            </section>
        </div>
    )
}

export default Registration