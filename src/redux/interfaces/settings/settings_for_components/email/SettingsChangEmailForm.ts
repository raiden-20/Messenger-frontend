export interface PropsChangeEmail{
    input_email: string;
    input_password: string;

    message: string

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    setMessage(message: string) : void;
    setNewEmail(newEmail: string) : void;
}

export interface StateChangeEmail{
    input_email: string;
    input_password: string;
    message: string
}

export interface PropsChangeEmailComponent{
    input_email: string;
    input_password: string;

    message: string

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputEmail(input_email : string | null) : void;
    saveButtonAction(): void
    setMessage(message: string) : void;
}

