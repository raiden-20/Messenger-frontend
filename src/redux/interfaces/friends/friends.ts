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
        whoOpened: string
    }
}

export interface PropsUsers {
    users : []
    countFriends: number,
    countSubscriptions: number,
    countSubscribers: number
    whoOpened: string

    setUsers(users: []):void
    setUsersNicknames(nicknames: []): void
    setUserFriendsCount(countFriends: number): void
    setUserSubscriptionsCount(countSubscriptions: number): void
    setUserSubscribersCount(countSubscribers: number): void
    setWhoOpened(whoOpened: string): void


}

export interface PropsUsersComponent {
    users : []
    countFriends: number
    countSubscribers: number
    countSubscriptions: number
    whoOpened: string

    getFriends(): void
    getSubscribers(): void
    getSubscriptions(): void
    getSearch(): void
    actionRequest(idOtherUser: string, action: string): void

    setWhoOpened(whoOpened: string): void
}

export interface PropsFriendsComponent{
    users : []
    countFriends: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void

}
export interface PropsSearchComponent{
    users : []
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void

}
export interface PropsSubscribersComponent{
    users : []
    countSubscribers: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
}
export interface PropsSubscriptionsComponent{
    users : []
    countSubscriptions: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
}