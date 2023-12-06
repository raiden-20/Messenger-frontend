export interface StateUserProfile {
    profile : {
        name: string;
        surname: string;
        birthDate: string;
        bio: string;
    }
    auth: {
        id: string
        nickname: string;
        message: string
        token: string
    }
}

export interface PropsUserProfile{
    id: string
    name: string;
    surname: string;
    nickname: string;
    birthDate: string;
    bio: string;
    message: string
    token: string

    setName(name: string): void
    setSurname(surname: string): void
    setNickname(nickname: string): void
    setMessage(message: string): void
    setId(id: string | null): void
}

