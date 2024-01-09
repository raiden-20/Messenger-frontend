import pageNotExist_css from './PageNotExist.module.css'
import notExist from '../../../assets/images/notExist.svg'
const PageNotExistComponent = () => {
    return (
        <div className={pageNotExist_css.div}>
            <section>
                <img src={notExist} alt={'page not exist'}/>
                <header>Данной страницы не существует</header>
                <p>Скорее возвращайся назад</p>
            </section>
        </div>
    )
}

export default PageNotExistComponent