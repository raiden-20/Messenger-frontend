import img_visible_css from './ImagesVisible.module.css'
import delete_img from "../../../../../../assets/images/friends/delete.svg";
const SubscriptionsImages = () => {
    return (
        <div className={img_visible_css.div}>
            <img src={delete_img} alt={'img'}/>
        </div>
    )
}

export default SubscriptionsImages