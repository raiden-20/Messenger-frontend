export interface StateSuccessfulSmth {
    auth: {
        message: string
        token: string
        email: string
        newEmail: string
        id: string
    }
}

export interface PropsSuccessfulEmail {
    message: string
    newEmail: string
    email: string

    setMessage(message: string): void
    setEmail(email: string): void
}

export interface PropsSuccessfulActivation {
    message: string
    setMessage(message: string): void
}

export interface PropsSuccessfulActivationComponent {
    message: string
    setMessage(message: string): void
}