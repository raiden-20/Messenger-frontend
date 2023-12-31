export interface StateAuthRestore {
    auth: {
        message: string
    }
}

export interface PropsAuthRestore {
    message: string
    setMessage(message: string): void
}