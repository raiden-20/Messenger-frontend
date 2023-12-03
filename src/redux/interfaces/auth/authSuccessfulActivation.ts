export interface StateSuccessfulSmth {
    auth: {
        message: string
        token: string
        newEmail: string
    }
}

export interface PropsSuccessfulEmail {
    message: string
    newEmail: string
    token: string

    setMessage(message: string): void
    setEmail(email: string): void
}

export interface PropsSuccessfulActivation {
    message: string
    token: string

    setMessage(message: string): void
}