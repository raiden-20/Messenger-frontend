import {DeleteAvatar, DeleteCover, SetAvatar, SetCover} from "../../../thunk/photoThunk";
import {ChangeNickname} from "../../../thunk/authThunk";
import {ChangeProfileData} from "../../../thunk/profileThunk";

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

    message: string
    input_nickname: string
    nickname: string
}

export interface PropsProfileSettings {
    message: string
    input_nickname: string;
    nickname: string

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

    DeleteAvatar(deleteAvatarUrl: string): void
    SetAvatar(input_avatarUrl: File): void
    DeleteCover(deleteCoverUrl: string): void
    SetCover(input_coverUrl: File): void
    ChangeNickname(input_nickname: string): void
    ChangeProfileData(input_name: string, input_birthDate: string,
                      input_bio: string, avatarUrl: string, coverUrl: string): void

    setMessage(message: string): void
    setInputName(input_name: string): void
    setInputBirthDate(input_birthDate: string): void
    setInputNickname(input_nickname: string): void
    setInputBio(input_bio: string): void
    setInputAvatarUrl(input_avatarUrl: File): void
    setInputCoverUrl(input_coverUrl: File): void
    setButtonSettingPressed(isButtonSettingPressed: boolean): void
    setDeleteAvatarFlag(deleteAvatarFlag: boolean): void
    setDeleteCoverFlag(deleteCoverFlag: boolean): void
}


export interface PropsProfileSettingsComponent {
    message: string

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
    setDeleteCoverUrl(deleteCoverUrl: string): void
    setDeleteAvatarUrl(deleteAvatarUrl: string): void
    setMessage(message: string): void
}
