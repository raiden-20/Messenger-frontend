export interface StateAuthRestore {
    auth: {
        message: string
        id: string
    }
}

export interface PropsAuthRestore {
    message: string
    setMessage(message: string): void
}