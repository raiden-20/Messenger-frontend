import {connect} from "react-redux";
import MainBlogPagesComponent from "./MainBlogPagesComponent";

export interface StateCode {
    auth : {
        code: number,
        isFetching: boolean
    }
}
export interface PropsCode {
    code: number
    isFetching: boolean
}

const mapStateToProps = (state: StateCode) => {
    return {
        code: state.auth.code,
        isFetching: state.auth.isFetching
    }
}

const MainBlogPagesContainer = connect(mapStateToProps)(MainBlogPagesComponent)

export default MainBlogPagesContainer