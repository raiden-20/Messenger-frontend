import {Time} from "../../../../../../redux/interfaces/profile/post/post";
import post_css from "../postMain/Post.module.css";
const writeMonth = (monthInt: string): string => {
    switch (monthInt) {
        case '01' :
            return 'января'
        case '02' :
            return 'февраля'
        case '03' :
            return 'марта'
        case '04' :
            return 'апреля'
        case '05' :
            return 'мая'
        case '06' :
            return 'июня'
        case '07' :
            return 'июля'
        case '08' :
            return 'августа'
        case '09' :
            return 'сентября'
        case '10' :
            return 'октября'
        case '11' :
            return 'ноября'
        case '12' :
            return 'декабря'
    }
    return ''
}

const TimeComponent = (props: Time) => {
    return (
        <div className={post_css.time}>
            {props.time[2][0] + props.time[2][1] + ' '}
            {writeMonth(props.time[1]) + ' '}
            {props.time[0]}
        </div>
    )
}

export default TimeComponent