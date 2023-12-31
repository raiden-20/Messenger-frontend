export interface User {
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    status: string,
}

export interface StateOneFriend {
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    status: string,

    whoOpened: string
}
export interface StateOneFriend2 {
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string
}

export interface PropsOneFriend{
    id: string,
    name: string,
    nickname: string,
    bio: string
    avatarUrl: string
    status: string,
    whoOpened: string
    changeFriendStatus(idOtherUser: string, action: string): void
}

export interface PropsOneFriend2{
    id: string,
    name: string,
    nickname: string,
    bio: string
    avatarUrl: string
    status: string,
}

export interface PropsOneFriendComponent{
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    whoOpened: string
    status: string,
    changeFriendStatus(action: string): void
}

export interface PropsOneFriendComponent2{
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    changeFriendStatus(): void
}

export interface PropsStatus {
    status: string
}