export interface StateDeleteAccount{
    token : string
    password: string
    message: string
}
export interface PropsDeleteAccount{
    token : string
    password: string
    message: string

    setToken(token: string): void
    setMessage(message: string): void
}
export interface PropsDeleteAccountComponent{
    delete(): void
}
