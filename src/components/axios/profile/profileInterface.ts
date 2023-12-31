export interface RegistrationSocialAxiosInterface {
    input_name: string
    input_birthDate: string
}

export interface ProfileGetDataAxiosInterface {
    setUserData(name: string,
                birthDate: string,
                bio: string,
                avatarUrl: string,
                coverUrl: string,
                status: string): void,
    setMessage(message: string): void
}