export interface StateChangeEmail{
    settings : {
        buttonChangeEmail: boolean;
        buttonChangePasswordFirstStep: boolean;
        buttonChangePasswordSecondStep: boolean;

        input_email: string;
        input_password: string;
    }
    auth : {
        email: string;
        password: string;
        token: string
        message: string
    }
}

export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;
    password: string;
    input_email: string;
    input_password: string;

    token: string
    message: string

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    setPassword(password : string | null) : void;
    setNewEmail(email : string | null) : void;
    setEmail(email : string | null) : void;
    setMessage(message: string) : void;
    setToken(token: string) : void;

}

