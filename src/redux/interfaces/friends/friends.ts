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


}

export interface PropsUsersComponent {
    users : []
    countFriends: number
    countSubscribers: number
    countSubscriptions: number

    getFriends(): void
    getSubscribers(): void
    getSubscriptions(): void
}

export interface PropsFriendsComponent{
    users : []
    countFriends: number
}
export interface PropsSubscribersComponent{
    users : []
    countSubscribers: number
}
export interface PropsSubscriptionsComponent{
    users : []
    countSubscriptions: number
}