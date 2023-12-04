import React from "react";
import success_css from './SuccessfulRegistration.module.css'
import {PropsSuccessError} from "../../../../../redux/interfaces/auth/authSuccessError";

const SuccessfulRegistration = (props: PropsSuccessError) => {
    return (
        <section className={success_css.root}>
            <section className={success_css.main}>
                <section>
                    {props.message}
                </section>
            </section>
        </section>
    )
}

export default SuccessfulRegistration