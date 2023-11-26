export interface StateProfileNameSurname {
    profile : {
        input_name: string;
        input_surname: string;
    }
}

export interface PropsProfileNameSurname{
    input_name: string;
    input_surname: string;

    setName(name: string): void
    setSurname(surname: string): void
    setInputName(name: string): void
    setInputSurname(surname: string): void
}