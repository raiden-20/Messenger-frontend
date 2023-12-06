export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setEmail(email : string |null) : void;
}

