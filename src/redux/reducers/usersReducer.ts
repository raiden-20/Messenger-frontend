const SET_USERS = 'SET_USERS'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'

const initialState = {
    users : [
        {id : 1, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        {id : 2, followed: false, name: 'бог не', surname: 'поможеь', bio: 'пока', nickname: '@pizzazz'},
        {id : 3, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        {id : 4, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
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
    countSubscribers: 0
}

const usersReducer = (state = initialState, action : any) => {
    let stateCopy = {...state, users: state.users.map(u => u)}
    switch (action.type) {

        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
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
        default:
            return stateCopy
    }
}

export const setUsers = (users : []) => {
    return {
        type: SET_USERS, users
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

export default usersReducer