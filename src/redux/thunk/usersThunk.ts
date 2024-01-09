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
import {setCode, setIsFetching} from "../reducers/authReducer";

export const GetRandomFriends = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Users.GetRandomFriendsAxios()
            .then(response => {
                dispatch(setIsFetching(false))
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUsers(response[1]))
                        break
                    }
                    case 400 : {
                        dispatch(setCode(404))
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
        dispatch(setIsFetching(true))
        Users.GetCountFriendsAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.GetCountSubscriptionsAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.GetCountSubscribersAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.ActionUsersAxios({
            idOtherUser: id,
            action: action,
        }).then(response => {
            dispatch(setIsFetching(false))
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
                    dispatch(setCode(404))
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
        dispatch(setIsFetching(true))
        Auth.AuthDataAxios({
            id: id
        }).then(response => {
            dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Photo.GetPhotoAxios({
            id: id
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setUserPhoto(id, response[1]))
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
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
        dispatch(setIsFetching(true))
        Users.GetFriendsAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.GetSubscriptionsAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.GetSubscribersAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
        dispatch(setIsFetching(true))
        Users.GetSearchAxios()
            .then(response => {
                dispatch(setIsFetching(false))
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
