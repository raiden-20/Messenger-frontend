export interface StateAuthReg {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;
        input_passwordShow: string;
        input_confirmPassword : string;
        input_confirmPasswordShow : string

        input_emailOrNickname: string

        message: string;
        buttonShowMessage: boolean
        code: number
        email: string
        newEmail: string,
        isFetching: boolean
    }
    profile : {
        input_birthDate : string
    }
}

export interface PropsAuthReg{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_passwordShow: string;
    input_confirmPassword : string;
    input_confirmPasswordShow : string;

    input_birthDate : string
    input_emailOrNickname: string

    message: string;
    buttonShowMessage: boolean
    code: number
    email: string
    isFetching: boolean
    newEmail: string

    Authorization(input_email: string, input_nickname: string, input_password: string): void
    Registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                 input_name: string, input_birthDate: string): void
    ForgotPassword(input_email: string): void
    AccountActivationMessage(): void
    ChangeEmailMessage(newEmail: string): void


    setInputClearData(): void
    setInputClearDataProfile(): void

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;
    setInputBirthDate(input_birthDate : string): void;

    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setMessage(message: string): void;
    setShowMessage(buttonShowMessage: boolean): void;
    setCode(code: number): void
}

export interface StateAuthRegReg {
    input_email: string;
    input_nickname: string;
    input_name: string;
    input_password: string;
    input_passwordShow: string;
    input_confirmPassword : string;
    input_confirmPasswordShow : string

    input_birthDate : string
    input_emailOrNickname: string

    buttonShowMessage: boolean
    message: string;
    code: number;
}
export interface PropsAuthRegReg{
    input_email: string;
    input_nickname: string;
    input_name: string;
    input_password: string;
    input_confirmPassword : string;

    input_birthDate : string
    input_emailOrNickname: string

    buttonShowMessage: boolean
    message: string;
    code: number;

    Registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                 input_name: string, input_birthDate: string): void
    setInputClearData(): void
    setInputClearDataProfile(): void

    setInputEmail(input_email: string): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;
    setInputBirthDate(input_birthDate : string): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;
    setInputName(input_name: string): void
    setShowMessage(buttonShowMessage: boolean): void;
    setMessage(message: string): void;
}

export interface PropsAuthRegComponent{
    input_email: string;
    input_name: string;
    input_nickname: string;
    input_password: string;
    input_confirmPassword : string;
    input_birthDate : string
    buttonShowMessage: boolean
    message: string;

    setInputName(input_name: string): void
    setInputBirthDate(input_birthDate : string): void;
    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;
    setMessage(message: string): void;
    setShowMessage(buttonShowMessage: boolean): void;
    authentication(): boolean
}