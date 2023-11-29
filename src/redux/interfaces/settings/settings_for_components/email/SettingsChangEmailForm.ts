export interface PropsChangeEmail{
    input_email: string;
    input_password: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
}

