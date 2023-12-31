import axios from "axios";
import {ProfileGetDataAxiosInterface, RegistrationSocialAxiosInterface} from "./profileInterface";
import config from "../../paths/config";

export const RegistrationSocialAxios = (data: RegistrationSocialAxiosInterface) => {
    axios.post('http://localhost:8080/social/registration', {
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

export const ProfileGetDataAxios = (data: ProfileGetDataAxiosInterface) => {
    axios.get(`http://localhost:8080/social/data/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUserData(
                        response.data.name,
                        response.data.birthDate,
                        response.data.bio,
                        response.data.avatarUrl,
                        response.data.coverUrl,
                        response.data.status
                    )
                    break
                }
            }
        }).catch(error => {
        data.setMessage(error.message)
        switch (error.response.status) {
            case 400 : {
                if (error.response.data === "Bad token") {
                    data.setMessage('Плохой токен')
                }
                break
            }
            default:
        }
    })
}