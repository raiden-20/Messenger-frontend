import React from "react";
import reg from './Registration.module.css'
import cat from '../../assets/images/cat_registration.jpg'
import grr from '../../assets/images/hbqGTT8bDuU.jpg'

const Registration = () => {
    return (
        <div className={reg.page}>
            <section className={reg.main}>
                <section className={reg.content}>
                    <aside>
                        {/*<img src={cat} alt={'this is a cat'}/>*/}
                        <img src={grr} alt={'this is a cat'}/>
                    </aside>
                    <main>
                        <header>СимОн</header>
                        <section className={reg.functional}>
                            <form>
                                <section className={reg.inputs}>
                                    <input placeholder={'Электронный адрес или никнейм'}/>
                                    <input placeholder={'Пароль'}/>
                                </section>
                                <button>Войти</button>
                            </form>
                            <section className={reg.other_buttons}>
                                <button className={reg.forgot_button}>Забыли пароль?</button>
                                <hr></hr>
                                <button className={reg.registration_button}>Зарегистрироваться</button>
                            </section>
                        </section>


                    </main>
                </section>
            </section>

        </div>
    )
}

export default Registration