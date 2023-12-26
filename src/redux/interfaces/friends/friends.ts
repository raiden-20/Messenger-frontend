
export interface User {
    id: string,
    name: string,
    nickname: string,
    bio: string
    avatarUrl: string
}

export interface StateUsers {
    users : {
        usersShortInfo : [],
        countFriends: number,
        countSubscriptions: number,
        countSubscribers: number
        whoOpened: string
    }
}

export interface PropsUsers {
    usersShortInfo : []
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
    usersShortInfo : []
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
    usersShortInfo : []
    countFriends: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void

}
export interface PropsSearchComponent{
    usersShortInfo : []
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void

}
export interface PropsSubscribersComponent{
    usersShortInfo : []
    countSubscribers: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
}
export interface PropsSubscriptionsComponent{
    usersShortInfo : []
    countSubscriptions: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
}