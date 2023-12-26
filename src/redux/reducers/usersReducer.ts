const SET_USERS = 'SET_USERS'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'
const SET_WHO_OPENED = 'SET_WHO_OPENED'
const SET_USERS_NICKNAME = 'SET_USERS_NICKNAME'

const initialState = {
    usersShortInfo : [
        {id : 1, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        {id : 2, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        {id : 3, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        {id : 4, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        {id : 5, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        {id : 6, name: 'боже', bio: 'митя фомин все будет хорошо', nickname: 'pizza', avatarUrl: '', coverUrl: ''},
        // {id : 5, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 6, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 7, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 8, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 9, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 10, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 11, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 12, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 13, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 14, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 16, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 17, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 18, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@v'},
        // {id : 19, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        // {id : 20, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'}
    ],
    countFriends: 0,
    countSubscriptions: 5,
    countSubscribers: 0,
    whoOpened: 'friends'
}

const usersReducer = (state = initialState, action : any) => {
    let stateCopy = {...state, usersShortInfo: state.usersShortInfo.map(u => u)}
    switch (action.type) {

        case SET_USERS : {
            return {...state, usersShortInfo: [...state.usersShortInfo, ...action.usersShortInfo]}
        }
        case SET_USERS_NICKNAME : {
            stateCopy.usersShortInfo.map((user, i) => user.nickname = action.nicknames[i])
            return {...state, usersShortInfo: [...state.usersShortInfo, ...action.usersShortInfo]}
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
        type: SET_USERS, nicknames
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