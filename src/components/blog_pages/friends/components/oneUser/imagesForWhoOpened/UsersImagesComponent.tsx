import fpart from '../../../../../../assets/images/friends/1part.svg'
import deleteMark from '../../../../../../assets/images/friends/delete_mark.svg'
import img_visible_css from './ImagesVisible.module.css'
import {PropsStatus} from "../../../../../../redux/interfaces/friends/oneFriend";
const UsersImagesComponent = (props: PropsStatus) => {// todo тоже поменять названия статусов
    return (
        <div className={img_visible_css.div}>
           <section className={img_visible_css.button}>
               <img src={fpart} alt={'part'}/>
               {props.status === 'FRIENDS' ? <div>В друзьях</div> :
                   props.status === 'SEND_FIRST' ? <div>В подписках</div> :
                   props.status === 'SEND_SECOND' ? <div>В подписчиках</div> :
                       props.status === null ? <div>Добавить в друзья</div> : null}
           </section>
            {props.status !== null ?
                <section className={img_visible_css.hide + ' ' + img_visible_css.delete}>
                    <img src={deleteMark} alt={'part'}/>
                    {props.status === 'FRIENDS' ? <div>Удалить из друзей</div> :
                        props.status === 'SEND_FIRST' ? <div>Удалить из подписок</div> :
                        props.status === 'SEND_SECOND' ? <div>Удалить из подписчиков</div> : null}
                </section> :
                <section className={img_visible_css.button + ' ' + img_visible_css.hide}>
                    <img src={fpart} alt={'part'}/>
                    <div>Добавить в друзья</div>
                </section>
            }
        </div>
    )
}

export default UsersImagesComponent