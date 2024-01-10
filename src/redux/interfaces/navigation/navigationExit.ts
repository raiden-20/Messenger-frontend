import {Logout, LogoutClear} from "../../thunk/authThunk";

export interface StateExit{
    auth : {
        token: string
        data: object
    }
}

export interface PropsExit{
    LogoutClear(): void

}

export interface PropsExitComponent{
    enter(): void

}

