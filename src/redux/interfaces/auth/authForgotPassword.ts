export interface StateAuthForgotPassword {
    auth : {
        input_confirmPassword : string;

        message: string
    }
}

export interface PropsAuthForgotPassword{
    input_email: string;
    message: string

    setInputEmail(input_email: string | null): void;
    setMessage(message: string): void
}