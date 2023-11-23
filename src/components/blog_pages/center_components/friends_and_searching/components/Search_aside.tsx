import React from 'react';

import main_css from "../Main_friends_and_searching.module.css";

const Search_aside = () => {
    return (
        <aside className={main_css.nav_friends}>
            <section>
                <button><strong>Люди</strong></button>
            </section>
            <section>
                <button><strong>Публикации</strong></button>
            </section>
        </aside>
    )
}

export default Search_aside