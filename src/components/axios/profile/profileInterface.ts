export interface RegistrationSocialAxiosInterface {
    input_name: string
    input_birthDate: string
}

export interface ProfileGetDataAxiosInterface {
    id: string
}

export interface ChangeProfileDataAxiosInterface {
    input_name: string,
    input_birthDate: string,
    input_bio: string,

    setMessage(message: string): void
    setButtonSettingPressed(flag: boolean): void
}