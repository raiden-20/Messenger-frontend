export interface PropsOldPassword {
    input_password: string;

    password: string
    message: string;

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setMessage(message : string) : void;
}
export interface StateOldPassword {
    input_password: string;

    password: string
    message: string;
}
export interface PropsOldPasswordComponent {
    input_password: string;

    password: string
    message: string;

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setMessage(message : string) : void;
    saveButtonActionFirstStep(): void
}

