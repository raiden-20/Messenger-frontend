import {Logout} from "../../thunk/authThunk";

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

    Logout(): void
    setButtonMoreSection(buttonMoreSection : boolean) : void

}

