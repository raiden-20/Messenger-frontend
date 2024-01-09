export interface StateExit{
    auth : {
        token: string
        data: object
    }
}

export interface PropsExit{
    setData(data: object): void

}

export interface PropsExitComponent{
    enter(): void

}

