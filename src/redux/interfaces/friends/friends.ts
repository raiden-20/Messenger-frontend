import {
    ActionUser,
    GetFriends,
    GetFriendsCount, GetSubscribers,
    GetSubscribersCount,
    GetSubscriptions,
    GetSubscriptionsCount, GetUserFromListAuthData
} from "../../thunk/usersThunk";

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

    GetFriends(): void
    GetSubscriptions(): void
    GetSubscribers(): void
    GetSearch(): void

    ActionUser(id: string, action: string): void
    GetUserFromListAuthData(id: string): void

    GetFriendsCount(): void
    GetSubscriptionsCount(): void
    GetSubscribersCount(): void

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
    GetUserFromListAuthData(id: string): void

    setWhoOpened(whoOpened: string): void
}

export interface PropsFriendsComponent{
    usersShortInfo : []
    countFriends: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
    GetUserFromListAuthData(id: string): void

}
export interface PropsSearchComponent{
    usersShortInfo : []
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
    GetUserFromListAuthData(id: string): void

}
export interface PropsSubscribersComponent{
    usersShortInfo : []
    countSubscribers: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
    GetUserFromListAuthData(id: string): void
}
export interface PropsSubscriptionsComponent{
    usersShortInfo : []
    countSubscriptions: number
    whoOpened: string
    actionRequest(idOtherUser: string, action: string): void
    GetUserFromListAuthData(id: string): void
}