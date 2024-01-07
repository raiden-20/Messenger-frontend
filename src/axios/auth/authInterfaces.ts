export interface RegistrationOrAuthorizationAxiosInterface {
    input_email : string,
    input_nickname: string,
    input_password: string,
}

export interface RegistrationAxiosInterface {
    input_email : string,
    input_nickname: string,
    input_password: string,
    input_confirmPassword: string,
}

export interface ForgotPasswordAxiosInterface {
    input_email: string
}

export interface AuthDataAxiosInterface {
    id: string
}

export interface ChangeEmailAxiosInterface {
    input_password: string,
    input_email: string
}

export interface SuccessfulChangeEmailInterface {
    newEmail: string
}

export interface ChangeOldPasswordAxiosInterface {
    input_password: string,
}

export interface NewPasswordAxiosInterface {
    input_code: string,
    input_password: string,
}

export interface ChangeNicknameAxiosInterface {
    input_nickname: string
}