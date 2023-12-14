export interface StateAuthReg {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;
        input_confirmPassword : string;

        input_emailOrNickname: string

        message: string;
        buttonShowMessage: boolean
        token: string
        code: number
        id: string
        email: string

        newEmail: string
    }
}

export interface PropsAuthReg{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_confirmPassword : string;

    input_emailOrNickname: string

    message: string;
    buttonShowMessage: boolean
    token: string
    code: number
    id: string
    email: string

    newEmail: string

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;

    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setPassword(password : string): void;
    setConfirmPassword(confirmPassword : string): void;

    setMessage(message: string): void;
    setShowMessage(buttonShowMessage: boolean): void;
    setToken(token: string): void;
    setCode(code: number): void
    setId(id: string): void
}

export interface PropsAuthRegReg{
    input_email: string;
    input_nickname: string;
    input_name: string;
    input_password: string;
    input_confirmPassword : string;

    input_emailOrNickname: string

    buttonShowMessage: boolean
    message: string;
    code: number;

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;

    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setName(name : string): void;
    setInputName(input_name: string): void
    setPassword(password : string): void;
    setConfirmPassword(confirmPassword : string): void;
    setShowMessage(buttonShowMessage: boolean): void;

    setMessage(message: string): void;
    setCode(code: number): void
}

export interface PropsAuthRegComponent{
    input_email: string;
    input_name: string;
    input_nickname: string;
    input_password: string;
    input_confirmPassword : string;


    buttonShowMessage: boolean
    message: string;
    code: number

    setName(name : string): void;
    setInputName(input_name: string): void
    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputConfirmPassword(input_confirmPassword : string | null): void;

    setMessage(message: string): void;
    setShowMessage(buttonShowMessage: boolean): void;

    authentication(): void
}