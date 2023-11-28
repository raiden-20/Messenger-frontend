const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users : [
        {id : 1, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizza'},
        {id : 2, followed: false, name: 'бог не', surname: 'поможеь', bio: 'пока', nickname: '@pizzzzz'},
        {id : 3, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 4, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 5, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 6, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 7, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 8, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 9, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 10, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 11, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 12, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 13, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 14, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 16, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 17, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 18, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 19, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'},
        {id : 20, followed: false, name: 'боже', surname: 'помоги', bio: 'митя фомин все будет хорошо', nickname: '@pizda'}
    ]
}

const usersReducer = (state = initialState, action : any) => {
    let stateCopy = {...state, users: state.users.map(u => u)}
    switch (action.type) {

        case FOLLOW : {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else return {...u}
                })
            }
        }

        case UNFOLLOW : {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else return {...u}
                })
            }
        }

        case SET_USERS : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return stateCopy
    }
}

export const setFollow = (userId : number) => {
    return {
        type: FOLLOW, userId
    }
}
export const setUnfollow = (userId : number) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsers = (users : []) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer