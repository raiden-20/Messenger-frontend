export interface StateAuthForgotPassword {
    auth : {
        input_confirmPassword : string;
        buttonShowMessage: boolean
        message: string
        code: number
    }
}

export interface PropsAuthForgotPassword{
    input_email: string;
    message: string
    buttonShowMessage: boolean
    code: number

    setInputEmail(input_email: string | null): void;
    setShowMessage(buttonShowMessage: boolean): void;
    setMessage(message: string): void;
    setCode(code: number): void;
}