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
    RegistrationOrAuthorizationAxios(data: RegistrationOrAuthorizationAxiosInterface) {
        return axios.post(LOCALHOST + AUTH + '/login', {
            email: data.input_email,
            nickname: data.input_nickname,
            password: data.input_password,
        }).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    RegistrationAxios(data: RegistrationAxiosInterface){ // registration
        return axios.post(LOCALHOST + AUTH + '/registration', {
            email: data.input_email,
            nickname: data.input_nickname,
            password: data.input_password,
            confirmPassword: data.input_confirmPassword
        }).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    ForgotPasswordAxios(data: ForgotPasswordAxiosInterface){
        return axios.put(LOCALHOST + AUTH + '/forget/password', {
            email: data.input_email
        }).then(response => response.status)
            .catch(error => error.response.status)
    },

    ActivationAccountAxios(){
        return axios.put(LOCALHOST + AUTH + '/active/account', {
            "id": localStorage.getItem('id')
        })
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    AuthDataAxios(data: AuthDataAxiosInterface) {
        return axios.get(LOCALHOST + AUTH + `/data/${data.id}`, config)
            .then(response => {
                return [response.status, response.data];
            }).catch(error => {
                return [error.response.status, '']
            });
    },

    ChangeEmailAxios(data: ChangeEmailAxiosInterface){
        return axios.post(LOCALHOST + AUTH + '/change/email', {
            "password": data.input_password,
            "newEmail": data.input_email
        }, config).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    SuccessfulChangeEmail(props : SuccessfulChangeEmailInterface){
        return axios.put(LOCALHOST + AUTH + '/confirm/email', {
            "email": props.newEmail
        }, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    ChangeOldPasswordAxios(props: ChangeOldPasswordAxiosInterface) {
        return  axios.post(LOCALHOST + AUTH + '/change/password', {
            password: props.input_password,
        }, config).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    NewPasswordAxios(data: NewPasswordAxiosInterface){
        return axios.put(LOCALHOST + AUTH + '/confirm/password', {
            oneTimeCode: data.input_code,
            newPassword: data.input_password
        }, config).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    DeleteProfileAxios(){
        return axios.put(LOCALHOST + AUTH + '/block', {
            password: localStorage.getItem('password')
        }, config).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    },

    ChangeNicknameAxios(data: ChangeNicknameAxiosInterface){
        return axios.post(LOCALHOST + AUTH + '/change/nickname', {
            nickname: data.input_nickname
        }, config).then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data])
    }
}

