export interface User {
    id: string,
    name: string,
    nickname: string,
    bio: string
    avatarUrl: string
}

export interface StateUsers {
    users : {
        users : [],
        countFriends: number,
        countSubscriptions: number,
        countSubscribers: number
    }
}

export interface PropsUsers {
    users : []
    countFriends: number,
    countSubscriptions: number,
    countSubscribers: number

    setUsers(users: []):void

    setUserFriendsCount(countFriends: number): void
    setUserSubscriptionsCount(countSubscriptions: number): void
    setUserSubscribersCount(countSubscribers: number): void


}

export interface PropsUsersComponent {
    users : []
    countFriends: number
    countSubscribers: number
    countSubscriptions: number

    getFriends(): void
    getSubscribers(): void
    getSubscriptions(): void
    getSearch(): void
    actionRequest(idOtherUser: string, action: string): void
}

export interface PropsFriendsComponent{
    users : []
    countFriends: number
    actionRequest(idOtherUser: string, action: string): void

}
export interface PropsSearchComponent{
    users : []
    actionRequest(idOtherUser: string, action: string): void

}

export interface StateFriends{
    users : []
    countFriends: number

}
export interface PropsFriend{
    users : []
    countFriends: number
    setUsers(users: []):void
}
export interface PropsSubscribersComponent{
    users : []
    countSubscribers: number
    actionRequest(idOtherUser: string, action: string): void
}
export interface StateSubscribers{
    users : []
    countSubscribers: number
}
export interface PropsSubscribers{
    users : []
    countSubscribers: number
    setUsers(users: []):void
}
export interface PropsSubscriptionsComponent{
    users : []
    countSubscriptions: number
    actionRequest(idOtherUser: string, action: string): void
}
export interface StateSubscriptions{
    users : []
    countSubscriptions: number
}
export interface PropsSubscriptions{
    users : []
    countSubscriptions: number
    setUsers(users: []):void
}