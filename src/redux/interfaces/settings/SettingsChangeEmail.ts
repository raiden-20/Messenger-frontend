export interface StateChangeEmail{
    settings : {
        buttonChangeEmail: boolean;
        buttonChangePasswordFirstStep: boolean;

        input_email: string;
        input_password: string;
    }
    auth : {
        email: string;
        password: string;
    }
}

export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;

    email: string;
    password: string;
    input_email: string;
    input_password: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    setPassword(password : string | null) : void;
    setEmail(email : string | null) : void;

}

