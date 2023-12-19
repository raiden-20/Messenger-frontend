import friends_img from '../../../../../../assets/images/friends/friends.svg'
import delete_img from '../../../../../../assets/images/friends/delete.svg'
import img_visible_css from './ImagesVisible.module.css'
const FriendsImages = () => {
    return (
        <div className={img_visible_css.div}>
            <img src={friends_img} className={img_visible_css.friends_img + ' ' + img_visible_css.img} alt={'img'}/>
            <img src={delete_img} className={img_visible_css.delete_img + ' ' + img_visible_css.img} alt={'img'}/>
        </div>
    )
}

export default FriendsImages