export interface StateAuthForgotPassword {
    auth : {
        input_confirmPassword : string;
    }
}

export interface PropsAuthForgotPassword{
    input_email: string;
    setInputEmail(input_email: string | null): void;
}