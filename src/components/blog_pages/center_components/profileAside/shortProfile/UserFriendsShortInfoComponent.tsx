import {PropsOneFriendComponent2} from "../../../../../redux/interfaces/friends/oneFriend";
import profileShort from './UserFriendsShortInfo.module.css'
import default_ava from '../../../../../assets/images/default_profile_ava.svg'
import dialog from '../../../../../assets/images/other/chat_with_user.svg'
import addToFriend from '../../../../../assets/images/friends/add_to_friend.svg'
import {PhotoArr} from "../../../../../redux/interfaces/profile/photo/photoProfile";
const UserFriendsShortInfoComponent = (props: PropsOneFriendComponent2) => {
    const changeStatus = () => {
        switch (props.status) {
            case 'FRIENDS' : {
                props.changeFriendStatus('DELETE_FRIEND')
                break
            }
            case null : {
                props.changeFriendStatus('CREATE')
                break
            }
            case 'SEND_FIRST' : {
                props.changeFriendStatus('DELETE_REQUEST')
                break
            }
            case 'SEND_SECOND' : {
                props.changeFriendStatus('REJECT')
                break
            }
        }
    }

    return (
        <section className={profileShort.page}>
            <header className={profileShort.header}>
                <img className={profileShort.header_img} src={props.avatarUrl === '' ? default_ava : props.avatarUrl}
                     alt={'default ava'}/>
                <section className={profileShort.functional}>
                    <img src={dialog} alt={'dialog'}/>
                    <img src={addToFriend} alt={'status'} onClick={changeStatus}/>
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
                {props.photo.map((onePhoto:PhotoArr) =>
                    <img src={onePhoto.url} alt={'users'}/>
                )}
            </footer>
        </section>
    )
}

export default UserFriendsShortInfoComponent