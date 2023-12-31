import img_visible_css from './ImagesVisible.module.css'
import delete_img from "../../../../../../assets/images/friends/delete.svg";
import {PropsStatus} from "../../../../../../redux/interfaces/friends/oneFriend";
const SubscriptionsImagesComponent = (props: PropsStatus) => {
    return (
        <div className={img_visible_css.div}>
            <img src={delete_img} alt={'img'}/>
        </div>
    )
}

export default SubscriptionsImagesComponent