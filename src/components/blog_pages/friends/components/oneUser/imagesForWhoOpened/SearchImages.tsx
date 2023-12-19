import img_visible_css from './ImagesVisible.module.css'
import add_img from '../../../../../../assets/images/friends/add_to_friend.svg'
const SearchImages = () => {
    return (
        <div className={img_visible_css.div}>
            <img src={add_img} alt={'img'}/>
        </div>
    )
}

export default SearchImages