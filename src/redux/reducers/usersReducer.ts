import {User} from "../interfaces/friends/oneFriend";

const SET_USERS = 'SET_USERS'
const SET_USERS_PHOTO = 'SET_USERS_PHOTO'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'
const SET_WHO_OPENED = 'SET_WHO_OPENED'
const SET_USERS_NICKNAME = 'SET_USERS_NICKNAME'

const SET_CHANGE_USER_STATUS = 'SET_CHANGE_USER_STATUS'




const initialState = {
    usersShortInfo : [],
    countFriends: 0,
    countSubscriptions: 0,
    countSubscribers: 0,
    whoOpened: 'friends'
}

const usersReducer = (state = initialState, action : any) => {
    let stateCopy = {...state, usersShortInfo: state.usersShortInfo.map(u => u)}
    switch (action.type) {

        case SET_USERS : {
            stateCopy.usersShortInfo = action.usersShortInfo
            return stateCopy
        }
        case SET_USERS_NICKNAME : {
            for (let index = 0; index < stateCopy.usersShortInfo.length; index++) {
                // @ts-ignore
                if (stateCopy.usersShortInfo[index].id === action.id) {
                    // @ts-ignore
                    stateCopy.usersShortInfo[index].nickname = action.nickname
                }
            }
            return {...state, usersShortInfo: [...state.usersShortInfo]}
        }
        case SET_USERS_PHOTO : {
            for (let index = 0; index < stateCopy.usersShortInfo.length; index++) {
                // @ts-ignore
                if (stateCopy.usersShortInfo[index].id === action.id) {
                    // @ts-ignore
                    stateCopy.usersShortInfo[index].photo = action.photo
                }
            }
            return {...state, usersShortInfo: [...state.usersShortInfo]}
        }
        case SET_USERS_FRIENDS_COUNT : {
            stateCopy.countFriends = action.countFriends
            return stateCopy
        }
        case SET_USERS_SUBSCRIBERS_COUNT : {
            stateCopy.countSubscribers = action.countSubscribers
            return stateCopy
        }
        case SET_USERS_SUBSCRIPTIONS_COUNT : {
            stateCopy.countSubscriptions = action.countSubscriptions
            return stateCopy
        }
        case SET_WHO_OPENED : {
            stateCopy.whoOpened = action.whoOpened
            return stateCopy
        }
        case SET_CHANGE_USER_STATUS : {
            stateCopy= {...state, usersShortInfo: [...state.usersShortInfo]}
            stateCopy.usersShortInfo.forEach((user: User) => {
                if (user.id === action.id) {
                    user.status = action.status
                }
            })
            return stateCopy
        }
        default:
            return stateCopy
    }
}

export const setUsers = (usersShortInfo : []) => {
    return {
        type: SET_USERS, usersShortInfo
    }
}
export const setUserNickname = (id: string, nickname : string) => {
    return {
        type: SET_USERS_NICKNAME, id, nickname
    }
}
export const setUserPhoto = (id: string, photo : []) => {
    return {
        type: SET_USERS_PHOTO, id, photo
    }
}
export const setUserSubscriptionsCount = (countSubscriptions : number) => {
    return {
        type: SET_USERS_SUBSCRIPTIONS_COUNT, countSubscriptions
    }
}
export const setUserFriendsCount = (countFriends : number) => {
    return {
        type: SET_USERS_FRIENDS_COUNT, countFriends
    }
}
export const setUserSubscribersCount = (countSubscribers : number) => {
    return {
        type: SET_USERS_SUBSCRIBERS_COUNT, countSubscribers
    }
}
export const setWhoOpened = (whoOpened : string) => {
    return {
        type: SET_WHO_OPENED, whoOpened
    }
}
export const setChangeUserStatus = (id: string, status: string | null) => {
    return {
        type: SET_CHANGE_USER_STATUS, id, status
    }
}

export default usersReducer