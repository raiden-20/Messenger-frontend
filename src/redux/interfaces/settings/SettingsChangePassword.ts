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
        password: string;
    }
}

export interface PropsChangePassword{
    buttonChangeEmail: boolean;
    buttonChangePasswordFirstStep: boolean;
    buttonChangePasswordSecondStep: boolean;

    password: string;
    input_password: string;
    input_passwordConfirm: string;
    input_code: string;

    setButtonChangePasswordFirstStepPressed(buttonChangePasswordFirstStep : boolean) : void;
    setButtonChangePasswordSecondStepPressed(buttonChangePasswordSecondStep : boolean) : void;
    setInputPassword(input_password : string | null) : void;
    setInputPasswordConfirm(input_passwordConfirm : string | null) : void;
    setPassword(password : string | null) : void;
    setInputCode(input_code : string | null) : void;

}

