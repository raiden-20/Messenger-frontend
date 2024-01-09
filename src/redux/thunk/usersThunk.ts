import {Dispatch} from "redux";
import {Users} from "../../axios/users/UsersAxios";
import {
    setChangeUserStatus,
    setUserFriendsCount,
    setUserNickname,
    setUserPhoto,
    setUsers, setUserSubscribersCount, setUserSubscriptionsCount
} from "../reducers/usersReducer";
import {Auth} from "../../axios/auth/AuthAxios";
import {Photo} from "../../axios/photo/PhotoAxios";

export const GetRandomFriends = () => {
    return (dispatch: Dispatch) => {
        Users.GetRandomFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 400 : {
                        // todo на стр пользователя не сущ
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}

export const GetFriendsCount = () => {
    return (dispatch: Dispatch) => {
        Users.GetCountFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUserFriendsCount(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
export const GetSubscriptionsCount = () => {
    return (dispatch: Dispatch) => {
        Users.GetCountSubscriptionsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUserSubscriptionsCount(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
export const GetSubscribersCount = () => {
    return (dispatch: Dispatch) => {
        Users.GetCountSubscribersAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUserSubscribersCount(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}

export const ActionUser = (id: string, action: string) => {
    return (dispatch: Dispatch) => {
        Users.ActionUsersAxios({
            idOtherUser: id,
            action: action,
        }).then(response => {
            debugger
            switch (response[0]) {
                case 200 : {
                    switch (action) {
                        case 'CREATE': {
                            dispatch(setChangeUserStatus(id, 'SEND_FIRST'))
                            break
                        }
                        case 'DELETE_FRIEND': {
                            dispatch(setChangeUserStatus(id, 'SEND_SECOND'))
                            break
                        }
                        case 'ACCEPT': {
                            dispatch(setChangeUserStatus(id, 'FRIENDS'))
                            break
                        }
                        case 'REJECT': {
                            dispatch(setChangeUserStatus(id, null))
                            break
                        }
                        case 'DELETE_REQUEST': {
                            dispatch(setChangeUserStatus(id, null))
                            break
                        }
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 404 : {
                    // user doesn't exist
                    break
                }
                case 400 : {
                    // relation has already exist
                    break
                }
            }

        })
    }
}

export const GetUserFromListAuthData = (id: string) => {
    return (dispatch: Dispatch) => {
        Auth.AuthDataAxios({
            id: id
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    dispatch(setUserNickname(id, response[1].nickname))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const GetUserFromListPhoto = (id: string) => {
    return (dispatch: Dispatch) => {
        Photo.GetPhotoAxios({
            id: id
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    dispatch(setUserPhoto(id, response[1]))
                    break
                }
                case 400 : {
                    // todo на стр пользователя не сущ
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const GetFriends = () => {
    return (dispatch: Dispatch) => {
        Users.GetFriendsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
export const GetSubscriptions = () => {
    return (dispatch: Dispatch) => {
        Users.GetSubscriptionsAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
export const GetSubscribers = () => {
    return (dispatch: Dispatch) => {
        Users.GetSubscribersAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
export const GetSearch = () => {
    return (dispatch: Dispatch) => {
        Users.GetSearchAxios()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
    }
}
