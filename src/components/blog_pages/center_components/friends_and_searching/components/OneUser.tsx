import main_css from "./OneUser.module.css";
import chatting from "../../../../../assets/images/other/chat_with_user.svg";
import submit_app from "../../../../../assets/images/friends/submitted_application.svg";
import added_to_friend from "../../../../../assets/images/friends/add_to_friend.svg";
import {NavLink} from "react-router-dom";
import React, {Component} from "react";
import {PropsOneFriend, StateOneFriend} from "../../../../../redux/interfaces/friends/oneFriend";

class OneUser extends Component<PropsOneFriend, StateOneFriend>{
    changeFriendStatus = () => {
        if (this.props.followed) {
            this.props.setUnfollow(this.props.id)
        } else {
            this.props.setFollow(this.props.id)
        }
    }
    render() {
        return (
            <section className={main_css.one_friend}>
                <NavLink to={`/profile/:id`} className={main_css.navlink}>
                    <section className={main_css.friend_ava}>

                    </section>
                    <section className={main_css.friend_data}>
                        <section>
                            <section className={main_css.friend_name}>
                                {this.props.name + ' ' + this.props.surname}
                            </section>
                            <section className={main_css.friend_nickname}>
                                {this.props.nickname}
                            </section>
                        </section>
                        <section className={main_css.friend_description}>
                            {this.props.bio}
                        </section>
                    </section>
                </NavLink>

                <section className={main_css.friend_functional}>
                    <img src={chatting} alt={'chat'}/>
                    <section onClick={this.changeFriendStatus}>
                        {!this.props.followed ?
                            <img src={submit_app} alt={'submit'}/> :
                            <img src={added_to_friend} alt={'adding to friend'}/>}
                    </section>

                </section>
            </section>
        )
    }
}

export default OneUser