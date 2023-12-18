export interface StateButtonPressed {
    profile: {
        isButtonSettingPressed: boolean
    }
}

export interface PropsButtonPressed {
    isButtonSettingPressed: boolean

    setButtonSettingPressed(isButtonSettingPressed: boolean): void
}


export interface StateProfileSettings {
    profile: {
        input_name: string;
        name: string;
        input_birthDate: string;
        birthDate: string;
        input_bio: string;
        bio: string;
        input_avatarUrl: File;
        avatarUrl: '';
        input_coverUrl: File;
        coverUrl: '';

        deleteAvatarFlag: boolean,
        deleteCoverFlag: boolean,

    }
    auth: {
        id: string
        message: string
        input_nickname: string
        nickname: string
    }
}

export interface StateProfileSettingsClass {
    input_name: string;
    name: string;
    input_birthDate: string;
    birthDate: string;
    input_bio: string;
    bio: string;
    input_avatarUrl: File;
    avatarUrl: '';
    input_coverUrl: File;
    coverUrl: '';

    deleteAvatarFlag: boolean,
    deleteCoverFlag: boolean,

    id: string
    message: string
    input_nickname: string
    nickname: string
}

export interface PropsProfileSettings {
    message: string
    input_nickname: string;
    nickname: string

    id: string
    input_name: string;
    name: string;
    input_birthDate: string;
    birthDate: string;
    input_bio: string;
    bio: string;
    input_avatarUrl: File;
    avatarUrl: '';
    input_coverUrl: File;
    coverUrl: '';

    deleteAvatarFlag: boolean,
    deleteCoverFlag: boolean,

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

    setInputAvatarUrl(input_avatarUrl: File): void

    setInputCoverUrl(input_coverUrl: File): void

    setButtonSettingPressed(isButtonSettingPressed: boolean): void

    setDeleteAvatarFlag(deleteAvatarFlag: boolean): void

    setDeleteCoverFlag(deleteCoverFlag: boolean): void
}


export interface PropsProfileSettingsComponent {
    message: string

    id: string
    input_name: string;
    input_nickname: string;
    input_birthDate: string;
    input_bio: string;

    avatarUrl: string;
    coverUrl: string;

    setInputName(input_name: string): void

    setInputBirthDate(input_birthDate: string): void

    setInputNickname(input_nickname: string): void

    setInputBio(input_bio: string): void

    setInputAvatarUrl(input_avatarUrl: File | null): void

    setInputCoverUrl(input_coverUrl: File | null): void

    setData(): void

    setButtonSettingPressed(isButtonSettingPressed: boolean): void

    setDeleteAvatarFlag(deleteAvatarFlag: boolean): void

    setDeleteCoverFlag(deleteCoverFlag: boolean): void
}
