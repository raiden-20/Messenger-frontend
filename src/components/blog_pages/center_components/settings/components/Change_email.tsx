import React from "react";
import change_settings_elements_css from './Change_settings_elements.module.css'


const Change_email = () => {
    return (
        <form className={change_settings_elements_css.root}>
            <main>
                <input placeholder={'Электронный адрес'}/>
                <input placeholder={'Подтвердить пароль'}/>
            </main>
            <section>
                <button className={change_settings_elements_css.button_save}>Сохранить</button>
                <button className={change_settings_elements_css.button_cancel}>Отменить</button>
            </section>
        </form>
    )
}

export default Change_email