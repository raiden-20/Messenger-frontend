import friends_img from '../../../../../../assets/images/friends/friends.svg'
import wait_img from '../../../../../../assets/images/friends/wait.svg'
import delete_img from '../../../../../../assets/images/friends/delete.svg'
import img_visible_css from './ImagesVisible.module.css'
import {PropsStatus} from "../../../../../../redux/interfaces/friends/oneFriend";
const UsersImagesComponent = (props: PropsStatus) => {// todo тоже поменять названия статусов
    return (
        <div className={img_visible_css.div}>
            <img src={props.status === 'friends' ? friends_img :
                        props.status === 'sent_request' ? wait_img : ''}
                 className={img_visible_css.friends_img + ' ' + img_visible_css.img} alt={'img'}/>
            <img src={delete_img} className={img_visible_css.delete_img + ' ' + img_visible_css.img} alt={'img'}/>
        </div>
    )
}

export default UsersImagesComponent