import axios from "axios";
import config from "../../paths/config";
import {
    ActionUsersAxiosInterface
} from "./usersInterface";
import {LOCALHOST, SOCIAL} from "../urls";

export const Users = {
    GetSearchAxios() {
        return axios.get(LOCALHOST + SOCIAL + '/users', config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetSubscribersAxios() {
        return axios.get(LOCALHOST + SOCIAL + `/relation/subscribers/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetSubscriptionsAxios() {
        return axios.get(LOCALHOST + SOCIAL + `/relation/subscriptions/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetFriendsAxios(){
        return axios.get(LOCALHOST + SOCIAL + `/relation/friends/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetRandomFriendsAxios(){
        return axios.get(LOCALHOST + SOCIAL + `/relation/friends/random/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetCountFriendsAxios() {
        return axios.get(LOCALHOST + SOCIAL + `/count/friends/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetCountSubscriptionsAxios(){
        return axios.get(LOCALHOST + SOCIAL + `/count/subscriptions/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    },

    GetCountSubscribersAxios() {
        return axios.get(LOCALHOST + SOCIAL + `/count/subscribers/${localStorage.getItem('idUser')}`, config)
            .then(response => [response.status, response.data])
            .catch(error => [error.response.status, error.response.data]);
    }
}

export const ActionUsersAxios = async (data: ActionUsersAxiosInterface) => {
    return axios.post(LOCALHOST + SOCIAL + `/action`, {
        secondUser: data.idOtherUser,
        action: data.action
    }, config)
        .then(response => [response.status, response.data])
        .catch(error => [error.response.status, error.response.data]);
}