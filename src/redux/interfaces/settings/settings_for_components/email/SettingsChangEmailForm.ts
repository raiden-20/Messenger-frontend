export interface PropsChangeEmail{
    input_email: string;
    input_password: string;

    token: string;
    message: string

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    setMessage(message: string) : void;
    setNewEmail(newEmail: string) : void;
    setToken(token: string | null) : void;
}

