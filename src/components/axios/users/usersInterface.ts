export interface GetUsersAxiosInterface {
    setUsers(users: []): void
}

export interface GetFriendsCountInterface {
    setUserFriendsCount(countFriends: number): void
}
export interface GetSubscriptionsCountInterface {
    setUserSubscriptionsCount(countSubscriptions: number): void
}
export interface GetSubscribersCountInterface {
    setUserSubscribersCount(countSubscribers: number): void
}

export interface ActionUsersAxiosInterface {
    idOtherUser: string,
    action: string,
}