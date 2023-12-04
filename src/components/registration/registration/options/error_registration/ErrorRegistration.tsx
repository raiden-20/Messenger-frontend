import React from "react";
import error_css from './ErrorRegistration.module.css'
import {PropsSuccessError} from "../../../../../redux/interfaces/auth/authSuccessError";

const ErrorRegistration = (props: PropsSuccessError) => {
    return (
        <section className={error_css.root}>
            <section className={error_css.main}>
                <section>
                    {props.message}
                </section>
            </section>
        </section>

    )
}

export default ErrorRegistration