export interface StateProfileSettings {
    profile : {
        input_name: string;
        input_surname: string;
        input_birthDate: string;
        input_bio: string;
    }
    auth: {
        id: string
        message: string
        input_nickname: string
    }
}

export interface PropsProfileSettings{
    message: string

    id: string
    input_name: string;
    input_surname: string;
    input_nickname: string;
    input_birthDate: string;
    input_bio: string;

    setName(name: string): void
    setSurname(surname: string): void
    setNickname(nickname: string): void
    setBirthDate(nickname: string): void
    setNickname(nickname: string): void
    setMessage(message: string): void
    setInputName(input_name: string): void
    setInputSurname(input_surname: string): void
    setInputBirthDate(input_birthDate: string): void
    setInputNickname(input_nickname: string): void
    setInputBio(input_bio: string): void
    setId(id: string | null): void
    setToken(id: string | null): void
}


export interface PropsProfileSettingsComponent{
    message: string

    id: string
    input_name: string;
    input_surname: string;
    input_nickname: string;
    input_birthDate: string;
    input_bio: string;

    setName(name: string): void
    setSurname(surname: string): void
    setNickname(nickname: string): void
    setBirthDate(nickname: string): void
    setNickname(nickname: string): void
    setMessage(message: string): void
    setInputName(input_name: string): void
    setInputSurname(input_surname: string): void
    setInputBirthDate(input_birthDate: string): void
    setInputNickname(input_nickname: string): void
    setInputBio(input_bio: string): void
    setId(id: string | null): void
    setToken(id: string | null): void
    setData(): void
}
