export interface PropsChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
}

