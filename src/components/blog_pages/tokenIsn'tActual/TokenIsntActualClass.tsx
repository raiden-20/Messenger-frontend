import {Component} from "react";
import TokenIsntActualComponent from "./TokenIsntActualComponent";
import {PropsTokenClass, StateTokenClass} from "../../../redux/interfaces/token";

class TokenIsntActualClass extends Component<PropsTokenClass, StateTokenClass> {

    render() {
        return <TokenIsntActualComponent LogoutClear={this.props.LogoutClear}/>
    }
}

export default TokenIsntActualClass