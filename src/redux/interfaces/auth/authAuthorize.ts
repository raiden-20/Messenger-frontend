export interface StateAuthAuth {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;
    }
}

export interface PropsAuthAuth{
    input_email: string;
    input_nickname: string;
    input_password: string;

    setInputEmail(input_email: string): void;
    setInputPassword(input_password: string): void;
    setInputNickname(input_nickname: string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setPassword(password : string): void;
}