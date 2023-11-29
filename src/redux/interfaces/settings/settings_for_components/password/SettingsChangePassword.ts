export interface PropsOldPassword {
    input_password: string;

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
}

