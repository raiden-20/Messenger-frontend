import new_post_css from './ProfileNewPost.module.css'
import prof_setting from '../profile_setting/ProfileSetting.module.css'

import add_photo_to_post from '../../../../../../assets/images/other/add_photo_to_post.svg'

const ProfileNewPost = () => {
    return (
        <div>
            <section className={prof_setting.overflay}></section>
            <section className={prof_setting.location_edit_window}>
                <section className={new_post_css.new_post_window}>
                    <textarea placeholder={'Напишите что-нибудь'}></textarea>
                    <footer>
                        <button className={new_post_css.cancel}>Отменить</button>
                        <section>
                            <img src={add_photo_to_post}/>
                            <button className={new_post_css.publish}>Опубликовать</button>
                        </section>
                    </footer>
                </section>
            </section>
        </div>

    )
}
export default ProfileNewPost