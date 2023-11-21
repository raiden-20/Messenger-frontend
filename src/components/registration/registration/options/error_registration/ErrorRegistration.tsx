import React from "react";
import error_css from './ErrorRegistration.module.css'

const ErrorRegistration = () => {
    return (
        <section className={error_css.root}>
            <section className={error_css.main}>
                <section>
                    Сообщение об ошибке (ник занят, почта некорректная бла бла бла)
                </section>
            </section>
        </section>

    )
}

export default ErrorRegistration