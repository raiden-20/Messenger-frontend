import axios from "axios";
import {
    ChangeProfileDataAxiosInterface, ProfileGetDataAxiosInterface,
    RegistrationSocialAxiosInterface
} from "./profileInterface";
import config from "../../paths/config";
import {LOCALHOST, SOCIAL} from "../urls";


export const Profile = {

    async RegistrationSocialAxios(data: RegistrationSocialAxiosInterface) {
        try {
            debugger
            const response = await axios.post(LOCALHOST + SOCIAL + '/registration', {
                id: localStorage.getItem('id'),
                name: data.input_name,
                birthDate: data.input_birthDate
            });
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async ProfileGetDataAxios(data: ProfileGetDataAxiosInterface) {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/data/${data.id}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeProfileDataAxios(data: ChangeProfileDataAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + SOCIAL + '/data', {
                name: data.input_name,
                birthDate: data.input_birthDate,
                bio: data.input_bio,
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }

}
