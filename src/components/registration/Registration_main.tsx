import page_reg from "./css_options/Page.module.css";
import reg from "./registration_or_authorization/Registration_or_autorisation.module.css";
import options_reg from "./css_options/Options.module.css";
import React from "react";

const Registration_main = () => {
    return (
        <div className={page_reg.page}>
            <section className={page_reg.main}>
                <section className={page_reg.content}>
                    <aside>
                    </aside>
                    <main>
                        <header className={options_reg.header}>СимОн</header>
                        <section className={reg.functional}>
                            <form>
                                <section className={reg.inputs}>
                                    <input className={options_reg.input} placeholder={'Электронный адрес или никнейм'}/>
                                    <input className={options_reg.input} placeholder={'Пароль'}/>
                                </section>
                                <button className={options_reg.main_page_button} type={'submit'}>Войти</button>
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

export default Registration_main