import {Logout, LogoutClear} from "../../thunk/authThunk";

export interface StateNavigation{
    navigation : {
        buttonMoreSection : boolean
    }
    auth: {
        data: string
    }
}

export interface PropsNavigation{
    buttonMoreSection : boolean

    LogoutClear(): void
    setButtonMoreSection(buttonMoreSection : boolean) : void

}

