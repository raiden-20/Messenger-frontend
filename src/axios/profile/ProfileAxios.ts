import axios from "axios";
import {
    ChangeProfileDataAxiosInterface, ProfileGetDataAxiosInterface,
    RegistrationSocialAxiosInterface
} from "./profileInterface";
import config from "../../paths/config";
import {LOCALHOST, SOCIAL} from "../urls";


export const Profile = {
    RegistrationSocialAxios(data: RegistrationSocialAxiosInterface) {
        return axios.post(LOCALHOST + SOCIAL + '/registration', {
            id: localStorage.getItem('id'),
            name: data.input_name,
            birthDate: data.input_birthDate
        }).then(response => response.status)
            .catch(error => error.response.status)
    },

    ProfileGetDataAxios(data : ProfileGetDataAxiosInterface) {
        return axios.get(LOCALHOST + SOCIAL + `/data/${data.id}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    ChangeProfileDataAxios(data: ChangeProfileDataAxiosInterface) {
        return axios.post(LOCALHOST + SOCIAL + '/data', {
            name: data.input_name,
            birthDate: data.input_birthDate,
            bio: data.input_bio,
        }, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    }

}
