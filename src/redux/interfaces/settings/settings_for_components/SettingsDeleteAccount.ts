export interface StateDeleteAccount{
    token : string
    password: string
    message: string
}
export interface PropsDeleteAccount{
    password: string
    message: string

    setMessage(message: string): void
}
export interface PropsDeleteAccountComponent{
    delete(): void
}

export interface PropsDeleteAccountWindow {
    delete(): void

    setDeleteAccountWindow(flag: boolean): void
}
export interface PropsDeleteAccountWindowNext {
    delete(): void

    setDeleteAccountWindow(flag: boolean): void
    setDeleteAccountWindowNext(flag: boolean): void
}
