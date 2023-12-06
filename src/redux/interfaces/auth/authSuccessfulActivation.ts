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
    token: string
    id: string

    setMessage(message: string): void
    setEmail(email: string): void
    setId(id: string): void
    setToken(token: string | null): void
}

export interface PropsSuccessfulActivation {
    message: string
    token: string
    id: string

    setMessage(message: string): void
    setId(id: string | null): void
}

export interface PropsSuccessfulActivationComponent {
    message: string
    setMessage(message: string): void
}