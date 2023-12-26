const SET_USERS = 'SET_USERS'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'
const SET_WHO_OPENED = 'SET_WHO_OPENED'
const SET_USERS_NICKNAME = 'SET_USERS_NICKNAME'

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
        // case SET_USERS_NICKNAME : {
        //     stateCopy.usersShortInfo.map((user, i) => user.nickname = action.nicknames[i])
        //     return {...state, usersShortInfo: [...state.usersShortInfo, ...action.usersShortInfo]}
        // }
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
        default:
            return stateCopy
    }
}

export const setUsers = (usersShortInfo : []) => {
    return {
        type: SET_USERS, usersShortInfo
    }
}
export const setUsersNicknames = (nicknames : []) => {
    return {
        type: SET_USERS_NICKNAME, nicknames
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

export default usersReducer