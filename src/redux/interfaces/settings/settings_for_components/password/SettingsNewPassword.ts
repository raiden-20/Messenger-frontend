export interface PropsNewPassword {
    input_password: string;
    input_passwordConfirm: string;
    input_code: string;

    message: string;

    setInputPassword(input_password : string | null) : void;
    setInputPasswordConfirm(input_passwordConfirm : string | null) : void;
    setInputCode(input_code : string | null) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setMessage(message : string) : void;
    setPassword(password : string) : void;
}
export interface StateNewPassword {
    input_password: string;
    input_passwordConfirm: string;
    input_code: string;
    message: string;
}
export interface PropsNewPasswordComponent {
    input_password: string;
    input_passwordConfirm: string;
    input_code: string;

    message: string;

    setInputPassword(input_password : string | null) : void;
    setInputPasswordConfirm(input_passwordConfirm : string | null) : void;
    setInputCode(input_code : string | null) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setMessage(message : string) : void;
    setPassword(password : string) : void;
    saveButtonActionSecondStep(): void
}

