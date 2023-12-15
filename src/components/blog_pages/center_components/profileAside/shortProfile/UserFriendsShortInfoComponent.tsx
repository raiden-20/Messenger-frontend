import {PropsOneFriendComponent} from "../../../../../redux/interfaces/friends/oneFriend";
import profileShort from './UserFriendsShortInfo.module.css'
import default_ava from '../../../../../assets/images/default_profile_ava.svg'
import dialog from '../../../../../assets/images/other/chat_with_user.svg'
import addToFriend from '../../../../../assets/images/friends/add_to_friend.svg'
import emptyPhoto from '../../../../../assets/images/other/empty_photo.svg'
const UserFriendsShortInfoComponent = (props: PropsOneFriendComponent) => {
    return (
        <section className={profileShort.page}>
            <header className={profileShort.header}>
                <img className={profileShort.header_img} src={props.avatarUrl === '' ? default_ava : props.avatarUrl}
                     alt={'default ava'}/>
                <section className={profileShort.functional}>
                    <img src={dialog} alt={'dialog'}/>
                    <img src={addToFriend} alt={'status'} onClick={props.changeFriendStatus}/>
                </section>
            </header>
            <section className={profileShort.main}>
                <section>
                    <section> <strong>{props.name}</strong></section>
                    <section>{'@' + props.nickname}</section>
                </section>
                <section>
                    {props.bio}
                </section>
            </section>
            <footer className={profileShort.photos}>
                <img src={emptyPhoto} alt={'users'}/>
                <img src={emptyPhoto} alt={'users'}/>
                <img src={emptyPhoto} alt={'users'}/>
            </footer>
        </section>
    )
}

export default UserFriendsShortInfoComponent