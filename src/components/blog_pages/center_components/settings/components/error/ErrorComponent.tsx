import error_css
    from "../../../../../registration/registration/options/error_registration/ErrorRegistration.module.css";
import React from "react";
import {PropsSuccessError} from "../../../../../../redux/interfaces/auth/authSuccessError";

const ErrorComponent = (props: PropsSuccessError) => {
    return (
        <section className={error_css.root}>
            <section className={error_css.mainSettings}>
                <section>
                    {props.message}
                </section>
            </section>
        </section>
    )
}

export default ErrorComponent