export interface StateProfileNameSurname {
    profile : {
        input_name: string;
        input_surname: string;

        message: string
    }
}

export interface PropsProfileNameSurname{
    input_name: string;
    input_surname: string;

    message: string

    setName(name: string | null): void
    setSurname(surname: string  | null): void
    setInputName(name: string  | null): void
    setInputSurname(surname: string  | null): void

    setMessage(message: string): void
}