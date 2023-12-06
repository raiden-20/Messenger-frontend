export interface StateNavigation{
    navigation : {
        buttonMoreSection : boolean
    }
    auth: {
        token : string
        data: string
    }
}

export interface PropsNavigation{
    buttonMoreSection : boolean
    token : string

    setToken(token: string): void
    setData(data: object): void
    setButtonMoreSection(buttonMoreSection : boolean) : void

}

