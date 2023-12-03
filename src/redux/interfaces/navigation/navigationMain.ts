export interface StateNavigation{
    navigation : {
        buttonMoreSection : boolean
    }
    auth: {
        token : string
    }
}

export interface PropsNavigation{
    buttonMoreSection : boolean
    token : string

    setButtonMoreSection(buttonMoreSection : boolean) : void

}

