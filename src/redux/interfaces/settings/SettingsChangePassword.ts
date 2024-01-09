export interface StateChangePassword{
    settings : {
        buttonChangeEmail: boolean;
        buttonChangePasswordFirstStep: boolean;
        buttonChangePasswordSecondStep: boolean;

        input_password: string;
        input_passwordConfirm: string;
        input_code: string;
    }
    auth : {
        message: string
    }
}

export interface PropsChangePassword{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    input_password: string;
    input_passwordConfirm: string;
    input_code: string;

    message: string

    CheckOldPassword(input_password: string): void
    SetNewPassword(input_code: string, input_password: string): void

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputPasswordConfirm(input_passwordConfirm : string | null) : void;
    setInputCode(input_code : string | null) : void;
    setMessage(message : string) : void;

}

