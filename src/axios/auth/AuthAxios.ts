import axios from "axios";
import {
    AuthDataAxiosInterface, ChangeEmailAxiosInterface,
    ChangeNicknameAxiosInterface, ChangeOldPasswordAxiosInterface,
    ForgotPasswordAxiosInterface, NewPasswordAxiosInterface, RegistrationAxiosInterface,
    RegistrationOrAuthorizationAxiosInterface, SuccessfulChangeEmailInterface
} from "./authInterfaces";
import config from "../../paths/config";
import {AUTH, LOCALHOST} from "../urls";

export const Auth = {
    async RegistrationOrAuthorizationAxios(data: RegistrationOrAuthorizationAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + AUTH + '/login', {
                email: data.input_email,
                nickname: data.input_nickname,
                password: data.input_password,
            });
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async RegistrationAxios(data: RegistrationAxiosInterface) { // registration
        try {
            const response = await axios.post(LOCALHOST + AUTH + '/registration', {
                email: data.input_email,
                nickname: data.input_nickname,
                password: data.input_password,
                confirmPassword: data.input_confirmPassword
            });
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ForgotPasswordAxios(data: ForgotPasswordAxiosInterface) {
        try {
            const response = await axios.put(LOCALHOST + AUTH + '/forget/password', {
                email: data.input_email
            });
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async ActivationAccountAxios() {
        try {
            const response = await axios.put(LOCALHOST + AUTH + '/active/account', {
                "id": localStorage.getItem('id')
            });
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async AuthDataAxios(data: AuthDataAxiosInterface) {
        try {
            const response = await axios.get(LOCALHOST + AUTH + `/data/${data.id}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, ''];
        }
    },

    async ChangeEmailAxios(data: ChangeEmailAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + AUTH + '/change/email', {
                "password": data.input_password,
                "newEmail": data.input_email
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SuccessfulChangeEmail(props: SuccessfulChangeEmailInterface) {
        try {
            const response = await axios.put(LOCALHOST + AUTH + '/confirm/email', {
                "email": props.newEmail
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeOldPasswordAxios(props: ChangeOldPasswordAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + AUTH + '/change/password', {
                password: props.input_password,
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async NewPasswordAxios(data: NewPasswordAxiosInterface) {
        try {
            const response = await axios.put(LOCALHOST + AUTH + '/confirm/password', {
                oneTimeCode: data.input_code,
                newPassword: data.input_password
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteProfileAxios() {
        try {
            const response = await axios.put(LOCALHOST + AUTH + '/block', {
                password: localStorage.getItem('password')
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeNicknameAxios(data: ChangeNicknameAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + AUTH + '/change/nickname', {
                nickname: data.input_nickname
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}

