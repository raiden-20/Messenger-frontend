import {connect} from "react-redux";
import TokenIsntActualClass from "./TokenIsntActualClass";
import {Logout} from "../../../redux/thunk/authThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    Logout
}

const TokenIsntActualContainer = connect(mapStateToProps, mapDispatchToProps)(TokenIsntActualClass)

export default TokenIsntActualContainer