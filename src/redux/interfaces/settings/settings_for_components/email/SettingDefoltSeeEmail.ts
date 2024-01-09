export interface PropsChangeEmailClass {
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;

    AuthGetData(id: string): void

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
}
export interface PropsChangeEmailComponent{
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    email: string;

    setButtonChangeEmailPressed(buttonChangeEmail : boolean) : void;
}

export interface StateChangeEmail{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;
    email: string;
}

