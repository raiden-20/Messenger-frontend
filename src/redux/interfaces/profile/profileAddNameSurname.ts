export interface StateProfileNameSurname {
    profile : {
        input_name: string;

        message: string
    }
}

export interface PropsProfileNameSurname{
    input_name: string;

    message: string

    setInputName(name: string  | null): void

    setMessage(message: string): void
}