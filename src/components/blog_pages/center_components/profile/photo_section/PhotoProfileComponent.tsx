import {PhotoArr, PropsPhotoProfileComponent} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import photo_css from './PhotoProfile.module.css'
import goBack from '../../../../../assets/images/photo/goBack.svg'
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER} from "../../../../paths/profilePath";
import cat from '../../../../../assets/images/cat_registration.jpg'
import OnePhotoContainer from "./onePhoto/OnePhotoContainer";

const PhotoProfileComponent = (props: PropsPhotoProfileComponent) => {
    const navigation = useNavigate()

    const openPhoto = (postId: string, url: string) => {
        props.setOnePhotoUrl(url)
        props.setButtonOpenPhoto(true)
        props.setPostUrl(postId)
    }

    return (
        <div className={photo_css.div}>
            <main className={photo_css.main}>
                <header>
                    <img src={goBack} alt={'go back to profile'} onClick={() => navigation(PROFILE_OTHER_USER)}/>
                    <section>
                        <div><strong>{props.name}</strong></div>
                        <div>{props.countPhoto + ' фото'}</div>
                    </section>
                </header>
                <section className={photo_css.allPhoto}>
                    {props.photoUrl.map((photoUrl : PhotoArr)  =>
                        <section onClick={()=> openPhoto(photoUrl.postId, photoUrl.url)}>
                            <img src={cat} alt={'userPhoto'} className={photo_css.userPhoto}/>
                        </section>
                        )}
                </section>
                {props.isButtonOpenPhotoPressed ? <OnePhotoContainer/>: null}
            </main>
        </div>
    )
}

export default PhotoProfileComponent