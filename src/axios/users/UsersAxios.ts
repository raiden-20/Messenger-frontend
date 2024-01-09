import axios from "axios";
import config from "../../paths/config";
import {
    ActionUsersAxiosInterface
} from "./usersInterface";
import {LOCALHOST, SOCIAL} from "../urls";

export const Users = {
    async GetSearchAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + '/users', config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscribersAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/relation/subscribers/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscriptionsAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/relation/subscriptions/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetFriendsAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/relation/friends/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetRandomFriendsAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/relation/friends/random/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountFriendsAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/count/friends/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscriptionsAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/count/subscriptions/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscribersAxios() {
        try {
            const response = await axios.get(LOCALHOST + SOCIAL + `/count/subscribers/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ActionUsersAxios(data: ActionUsersAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + SOCIAL + `/action`, {
                secondUser: data.idOtherUser,
                action: data.action
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}