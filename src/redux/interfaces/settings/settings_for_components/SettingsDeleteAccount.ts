export interface StateDeleteAccount{
    message: string
}
export interface PropsDeleteAccount{
    message: string

    DeleteAccount(): void
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
