export interface StateProfileSettings {
    profile : {
        input_name: string;
        input_birthDate: string;
        input_bio: string;
        input_avatarUrl: File;
        input_coverUrl: File;

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
    input_nickname: string;
    input_birthDate: string;
    input_bio: string;
    input_avatarUrl: File;
    input_coverUrl: File;

    setName(name: string): void
    setNickname(nickname: string): void
    setBirthDate(nickname: string): void
    setNickname(nickname: string): void
    setMessage(message: string): void
    setInputName(input_name: string): void
    setInputBirthDate(input_birthDate: string): void
    setInputNickname(input_nickname: string): void
    setInputBio(input_bio: string): void
    setId(id: string | null): void
    setToken(id: string | null): void
    setInputAvatarUrl(input_avatarUrl : File): void
    setInputCoverUrl(input_coverUrl : File): void
}


export interface PropsProfileSettingsComponent{
    message: string

    id: string
    input_name: string;
    input_nickname: string;
    input_birthDate: string;
    input_bio: string;

    setInputName(input_name: string): void
    setInputBirthDate(input_birthDate: string): void
    setInputNickname(input_nickname: string): void
    setInputBio(input_bio: string): void
    setInputAvatarUrl(input_avatarUrl : File | null): void
    setInputCoverUrl(input_coverUrl : File | null): void
    setData(): void
}
