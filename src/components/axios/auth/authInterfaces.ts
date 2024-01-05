export interface RegistrationOrAuthorizationAxiosInterface {
    input_email : string,
    input_nickname: string,
    input_password: string,

    cleanMessageAndChangePath(): void
    setInputEmail(input_email: string): void
    setInputPassword(input_password: string): void

    setShowMessage(flag: boolean): void
    setCode(code: number): void
    setMessage(message: string): void
}

export interface RegistrationAxiosInterface {
    input_email : string,
    input_nickname: string,
    input_password: string,
    input_confirmPassword: string,

    input_name: string,
    input_birthDate: string

    setShowMessage(flag: boolean): void
    setCode(code: number): void
    setMessage(message: string): void
}

export interface ForgotPasswordAxiosInterface {
    input_email: string,

    setShowMessage(flag: boolean): void
    setCode(code: number): void
    setMessage(message: string): void
}

export interface ActivationAccountAxiosInterface {
    setMessage(message: string): void
}

export interface AuthDataAxiosInterface {
    id: string
}

export interface ChangeEmailAxiosInterface {
    input_password: string,
    input_email: string,

    setMessage(message: string): void
    setNewEmail(newEmail: string): void
}

export interface SuccessfulChangeEmailInterface {
    newEmail: string,

    setMessage(message: string): void
    setEmail(email: string): void
}

export interface ChangeOldPasswordAxiosInterface {
    input_password: string,

    setMessage(message: string): void
    setButtonChangePasswordFirstStepPressed(flag: boolean): void
    setButtonChangePasswordSecondStepPressed(flag: boolean): void
}

export interface NewPasswordAxiosInterface {
    input_code: string,
    input_password: string,

    setMessage(message: string): void
    setPassword(input_password: string): void
}

export interface DeleteProfileAxiosInterface {
    setMessage(message: string): void
}

export interface ChangeNicknameAxiosInterface {
    input_nickname: string,

    setNickname(input_nickname: string): void
    setMessage(message: string): void
}