export interface PropsOldPassword {
    input_password: string;

    password: string
    token: string

    message: string;

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setMessage(message : string) : void;
}

