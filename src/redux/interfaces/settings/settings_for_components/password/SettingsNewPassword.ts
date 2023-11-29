export interface PropsNewPassword {
    input_password: string;
    input_passwordConfirm: string;
    input_code: string;

    setInputPassword(input_password : string | null) : void;
    setInputPasswordConfirm(input_passwordConfirm : string | null) : void;
    setInputCode(input_code : string | null) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
}

