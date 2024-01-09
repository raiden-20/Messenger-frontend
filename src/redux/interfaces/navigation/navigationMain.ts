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

    setData(data: object): void
    setButtonMoreSection(buttonMoreSection : boolean) : void

}

