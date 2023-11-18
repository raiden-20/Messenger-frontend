import React from "react";
import reg_curr from './Registration.module.css'
import '../css_options/Options.css'
import '../css_options/Page.css'

const Registration = () => {
    return (
        <div className={'page'}>
            <section className={'main'}>
                <section className={'content'}>
                    <aside>
                    </aside>
                    <main>
                        <header>СимОн</header>
                        <form className={reg_curr.form}>
                            <section className={reg_curr.inputs}>
                                <input placeholder={'Никнейм'}/>
                                <input placeholder={'Электронный адрес'}/>
                                <input placeholder={'Пароль'}/>
                                <input placeholder={'Подтвердите пароль'}/>
                            </section>
                            <button className={"main_page_button"}>Зарегистрироваться</button>
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