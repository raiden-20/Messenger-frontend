export interface StateOneFriend {
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
    changeFriendStatus(idOtherUser: string): void
}

export interface PropsOneFriend2{
    id: string,
    name: string,
    nickname: string,
    bio: string
    avatarUrl: string
}

export interface PropsOneFriendComponent{
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    changeFriendStatus(): void
}