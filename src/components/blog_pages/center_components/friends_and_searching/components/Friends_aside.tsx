import React from "react";

import main_css from "../Main_friends_and_searching.module.css";

const Friends_aside = () => {
    return (
        <aside className={main_css.nav_friends}>
            <section>
                <button><strong>Друзья</strong> 20</button>
            </section>
            <section>
                <button><strong>Заявки в друзья</strong> 3</button>
            </section>
        </aside>
    )
}

export default Friends_aside