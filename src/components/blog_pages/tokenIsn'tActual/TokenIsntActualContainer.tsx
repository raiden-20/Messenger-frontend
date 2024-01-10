import {connect} from "react-redux";
import TokenIsntActualClass from "./TokenIsntActualClass";
import {LogoutClear} from "../../../redux/thunk/authThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    LogoutClear
}

const TokenIsntActualContainer = connect(mapStateToProps, mapDispatchToProps)(TokenIsntActualClass)

export default TokenIsntActualContainer