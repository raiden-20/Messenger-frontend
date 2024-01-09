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
        message: string
    }
}

export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;
    input_email: string;
    input_password: string;

    message: string

    AuthGetData(id: string): void
    setNewEmail(newEmail: string): void
    ChangeEmail(input_password: string, input_email: string): void

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    setMessage(message: string) : void;
}

