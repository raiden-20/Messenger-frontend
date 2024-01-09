import exp from "constants";
import {Logout} from "../thunk/authThunk";

export interface StateTokenClass {

}

export interface PropsTokenClass {
    Logout(): void
}
export interface PropsTokenComponent {
    exit(): void
}