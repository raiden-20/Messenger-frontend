export interface StateAuthAuth {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;

        input_emailOrNickname: string

        message: string
        token: string
    }
}

export interface PropsAuthAuth{
    input_email: string;
    input_nickname: string;
    input_password: string;

    input_emailOrNickname: string

    message: string
    token: string

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setPassword(password : string): void;

    setMessage(message : string): void;
    setToken(token : string): void;
}

export interface PropsAuthAuthComponent{
    input_email: string;
    input_nickname: string;
    input_password: string;

    input_emailOrNickname: string

    message: string
    token: string

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setMessage(message : string): void;
    setToken(token : string): void;

    authorise(): void;
    cleanMessageAndChangePath(): void;
}