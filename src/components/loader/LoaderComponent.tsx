import loader_css from './Loader.module.css'
import loader_gif from '../../assets/images/loader.gif'
const LoaderComponent = () => {
    return (
        <div className={loader_css.div}>
            <img src={loader_gif} alt={'loader gif'}/>
        </div>
    )
}

export default LoaderComponent
