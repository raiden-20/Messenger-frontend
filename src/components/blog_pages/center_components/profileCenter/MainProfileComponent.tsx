import React from 'react';

import ProfileOtherUserSettingsComponent from "../profile/profile_other_user/ProfileOtherUserSettingsComponent";

import main_css from "../profile/main_profile_css/MainProfile.module.css";
import main_elements_css from "../profile/main_profile_css/MainProfileElements.module.css";

import default_profile_ava from "../../../../assets/images/default_profile_ava.svg";
import default_profile_cover from "../../../../assets/images/default_profile_cover.svg";
import {PropsUserProfileComponent} from "../../../../redux/interfaces/profile/profileBase";
import PostContainer from "../profile/post/postMain/PostContainer";
import ProfileUserSettingsContainer from "../profile/profile/ProfileUserSettingsContainer";



const MainProfileComponent = (props: PropsUserProfileComponent) => {
    return(
        <section className={main_css.info}>
            <section className={main_elements_css.bg_photo}>
                <img src={props.coverUrl === '' ? default_profile_cover : props.coverUrl} alt={'this is cover'}/>
            </section>
            <main>
                <section className={main_css.bio}>
                    <section className={main_css.bio_row}>
                        <section>
                            <figure className={main_elements_css.figure}>
                                <img src={props.avatarUrl === '' ? default_profile_ava : props.avatarUrl} alt={'this is ava'}/>
                            </figure>
                        </section>
                        <section className={main_css.name_and_status}>
                            <div className={main_elements_css.name}>{props.name}</div>
                            <div className={main_elements_css.userName}>{'@' + props.nickname}</div>
                        </section>
                        {localStorage.getItem('idUser') === localStorage.getItem('id') ?
                            <ProfileUserSettingsContainer/> :
                            <ProfileOtherUserSettingsComponent status={props.status}/>}
                    </section>
                    <section>
                        <p>{props.bio}</p>
                    </section>
                </section>
                <section className={main_css.posts}>
                    <PostContainer/>
                </section>
            </main>
        </section>
    )
}

export default MainProfileComponent