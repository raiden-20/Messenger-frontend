export interface StateAuthAuth {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;

        input_emailOrNickname: string

        message: string
        buttonShowMessage: boolean;
        token: string
        code: number
    }
}

export interface PropsAuthAuth{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_passwordShow: string;

    input_emailOrNickname: string

    message: string
    buttonShowMessage: boolean;
    token: string
    code: number

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputPasswordShow(input_passwordShow: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setPassword(password : string): void;

    setMessage(message : string): void;
    setShowMessage(buttonShowMessage: boolean): void;
    setToken(token : string): void;
    setCode(code: number): void
}

export interface PropsAuthAuthComponent{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_passwordShow: string;

    input_emailOrNickname: string

    message: string
    buttonShowMessage: boolean;
    token: string
    code: number

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputPasswordShow(input_passwordShow: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setMessage(message : string): void;
    setShowMessage(buttonShowMessage: boolean): void;
    setToken(token : string): void;
    setCode(code: number): void

    authorise(): void;
    forgotPassword(): void;
    cleanMessageAndChangePath(): void;
}