import axios from "axios";
import {
    ChangeProfileDataAxiosInterface, ProfileGetDataAxiosInterface,
    RegistrationSocialAxiosInterface
} from "./profileInterface";
import config from "../../paths/config";
import {ProfileUser} from "../../../redux/interfaces/profile/profileBase";
import {LOCALHOST, SOCIAL} from "../urls";

export const RegistrationSocialAxios = (data: RegistrationSocialAxiosInterface) => {
    axios.post(LOCALHOST + SOCIAL + '/registration', {
        id: localStorage.getItem('id'),
        name: data.input_name,
        birthDate: data.input_birthDate
    }).then(response => {
        switch (response.status) {
            case 200 : {
            }
        }
    }).catch(error => {
        // todo error
    })
}

export const ProfileGetDataAxios = async (data : ProfileGetDataAxiosInterface) => {
    return axios.get(LOCALHOST + SOCIAL + `/data/${data.id}`, config)
        .then(response => {
            return [response.status, response.data]
        }).catch(error => {
            switch (error.response.status) {
                case 400 : {
                    if (error.response.data === "Bad token") {
                    }
                    break
                }
                default:
            }
            return [error.response.status, '']
        });
}

export const ChangeProfileDataAxios = (data: ChangeProfileDataAxiosInterface) => {
    axios.post(LOCALHOST + SOCIAL + '/data', {
        name: data.input_name,
        birthDate: data.input_birthDate,
        bio: data.input_bio,
    }, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setButtonSettingPressed(false)
                }
            }
        }).catch(error => {
        debugger
    })
}

