import axios from "axios";
import config from "../../paths/config";
import {
    ActionUsersAxiosInterface,
    GetFriendsCountInterface,
    GetSubscribersCountInterface,
    GetSubscriptionsCountInterface,
    GetUsersAxiosInterface
} from "./usersInterface";
import {LOCALHOST, SOCIAL} from "../urls";

export const GetSearchAxios = (data: GetUsersAxiosInterface) => {
    axios.get(LOCALHOST + SOCIAL + '/users', config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUsers(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {
                //плохой токен
            }
        }
    })
}

export const GetRandomFriendsAxios = (data: GetUsersAxiosInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/relation/friends/random/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUsers(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //плохой токен
            }
        }
    })
}

export const GetCountFriendsAxios = (data: GetFriendsCountInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/count/friends/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUserFriendsCount(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //плохой токен
            }
        }
    })
}

export const GetCountSubscriptionsAxios = (data: GetSubscriptionsCountInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/count/subscriptions/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUserSubscriptionsCount(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //плохой токен
            }
        }
    })
}

export const GetCountSubscribersAxios = (data: GetSubscribersCountInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/count/subscribers/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUserSubscribersCount(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //плохой токен
            }
        }
    })
}

export const GetSubscribersAxios = (data: GetUsersAxiosInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/relation/subscribers/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            debugger
            switch (response.status) {
                case 200 : {
                    data.setUsers(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {

            }
        }
    })
}

export const GetSubscriptionsAxios = (data: GetUsersAxiosInterface) => {

    axios.get(LOCALHOST + SOCIAL + `/relation/subscriptions/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUsers(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {

            }
        }
    })
}

export const GetFriendsAxios = (data: GetUsersAxiosInterface) => {
    axios.get(LOCALHOST + SOCIAL + `/relation/friends/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setUsers(response.data)
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {

            }
        }
    })
}

export const ActionUsersAxios = async (data: ActionUsersAxiosInterface) => {
    return axios.post(LOCALHOST + SOCIAL + `/action`, {
        secondUser: data.idOtherUser,
        action: data.action
    }, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    return response.status
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {
                // bad token
                break
            }
            case 404 : {
                // user doesn't exist
                break
            }
            case 400 : {
                // relation has already exist
            }
        }
        return error.response.status
    })
}