export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
    setEmail(email : string) : void;
}
export interface StateChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;
    email: string;
}

