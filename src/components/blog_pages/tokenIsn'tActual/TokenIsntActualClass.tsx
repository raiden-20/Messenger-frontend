import {Component} from "react";
import TokenIsntActualComponent from "./TokenIsntActualComponent";
import {PropsTokenClass, StateTokenClass} from "../../../redux/interfaces/token";

class TokenIsntActualClass extends Component<PropsTokenClass, StateTokenClass> {

    exit() {
        this.props.Logout()
    }

    render() {
        return <TokenIsntActualComponent exit={this.exit}/>
    }
}

export default TokenIsntActualClass