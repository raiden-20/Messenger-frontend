import reg from "../Registration_or_autorisation.module.css";
import grr from "../../../assets/images/hbqGTT8bDuU.jpg";
import reg_forgot_css from './Registration_forgot_password.module.css'
import React from "react";

const ErrorRegistration = () => {
    return (
        <div className={reg.page}>
            <section className={reg.main}>
                <section className={reg.content}>
                    <aside>
                    </aside>
                    <section className={reg_forgot_css.main}>
                        <header>СимОн</header>
                        <section className={reg_forgot_css.functional}>
                            <section className={reg_forgot_css.text}>
                                <p>Проблемы со входом? </p>
                                <p>Ссылка для сброса пароля придет вам на электронную почту</p>
                            </section>
                            <form>
                                <section className={reg.inputs}>
                                    <input placeholder={'Электронный адрес или никнейм'}/>
                                </section>
                                <button>Зарегистрироваться</button>
                            </form>
                        </section>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default ErrorRegistration