import {ChangeEmailMessage} from "../../thunk/authThunk";

export interface StateSuccessfulSmth {
    auth: {
        message: string
        token: string
        email: string
        newEmail: string
        id: string
    }
}

export interface SuccessClass {
    setMessage(message: string): void
    AccountActivationMessage(): void
    ChangeEmailMessage(newEmail: string): void

    message: string
    newEmail: string
    email: string
}

export interface PropsSuccessfulEmail {
    message: string
    newEmail: string
    email: string

    ChangeEmailMessage(newEmail: string): void
}

export interface PropsSuccessfulActivation {
    message: string
    AccountActivationMessage(): void
    toAuthorize(): void
}

export interface PropsSuccessfulActivationComponent {
    message: string
    toAuthorize(): void
}