import {Logout} from "../../thunk/authThunk";

export interface StateExit{
    auth : {
        token: string
        data: object
    }
}

export interface PropsExit{
    Logout(): void

}

export interface PropsExitComponent{
    enter(): void

}

