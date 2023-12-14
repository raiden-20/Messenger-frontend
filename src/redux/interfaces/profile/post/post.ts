export interface StatePost {
    auth : {
        nickname: string
        message: string
    }
    profile : {
        name: string,
        avatarUrl: string
    }

}

export interface PropsPost {
    name: string,
    nickname: string
    avatarUrl: string

    setMessage(message: string): void
}

export interface PropsPostComponent {
    name: string,
    nickname: string
    avatarUrl: string
}