export interface StateExit{
    auth : {
        token: string
    }
}

export interface PropsExit{
    token: string

}

export interface PropsExitComponent{
    enter(): void

}

