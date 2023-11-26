export interface StateAuthReg {
    auth : {
        input_email: string;
        input_nickname: string;
        input_password: string;
        input_confirmPassword : string;
    }
}

export interface PropsAuthReg{
    input_email: string;
    input_nickname: string;
    input_password: string;
    input_confirmPassword : string;

    setInputEmail(input_email: string): void;
    setInputPassword(input_password: string): void;
    setInputNickname(input_nickname: string): void;
    setInputConfirmPassword(input_confirmPassword : string): void;

    setEmail(email : string): void;
    setNickname(nickname : string): void;
    setPassword(password : string): void;
    setConfirmPassword(confirmPassword : string): void;

}