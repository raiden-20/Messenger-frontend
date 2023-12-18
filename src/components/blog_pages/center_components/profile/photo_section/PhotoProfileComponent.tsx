import {PropsPhotoProfileComponent} from "../../../../../redux/interfaces/profile/photo/photoProfile";
import photo_css from './PhotoProfile.module.css'
import goBack from '../../../../../assets/images/photo/goBack.svg'
import {useNavigate} from "react-router-dom";
import {PROFILE_OTHER_USER} from "../../../../paths/profilePath";

const PhotoProfileComponent = (props: PropsPhotoProfileComponent) => {
    const navigation = useNavigate()

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
                <section>
                    {props.photoUrl.map(photoUrl =>
                        <img src={photoUrl} alt={'userPhoto'} className={photo_css.userPhoto}/>)}
                </section>
            </main>
        </div>
    )
}

export default PhotoProfileComponent