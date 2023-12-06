export interface StateExit{
    auth : {
        token: string
        data: object
    }
}

export interface PropsExit{
    token: string
    setToken(token: string): void
    setData(data: object): void

}

export interface PropsExitComponent{
    enter(): void

}

