import React from 'react';

import main_css from "../MainFriendsAndSearching.module.css";

const SearchAside = () => {
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

export default SearchAside