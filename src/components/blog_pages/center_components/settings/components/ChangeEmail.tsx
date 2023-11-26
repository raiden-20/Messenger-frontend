import React from "react";
import change_settings_elements_css from './ChangeSettingsElements.module.css'


const ChangeEmail = () => {
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

export default ChangeEmail