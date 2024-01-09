import {setInputClearData} from "../../reducers/authReducer";

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
    code: number

    Authorization(input_email: string, input_nickname: string, input_password: string): void
    setInputClearData(): void

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    setMessage(message : string): void;
    setShowMessage(buttonShowMessage: boolean): void;
}

export interface PropsAuthAuthComponent{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_passwordShow: string;
    input_emailOrNickname: string
    message: string
    buttonShowMessage: boolean;
    code: number

    setInputEmail(input_email: string | null): void;
    setInputPassword(input_password: string | null): void;
    setInputNickname(input_nickname: string | null): void;
    setInputEmailOrNickname(input_emailOrNickname: string): void;

    authorise(): void;
    forgotPassword(): void;
    toRegistration(): void;
}