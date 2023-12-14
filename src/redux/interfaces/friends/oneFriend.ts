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
}

export interface PropsOneFriendComponent{
    id: string,
    name: string,
    nickname: string,
    bio: string,
    avatarUrl: string,
    changeFriendStatus(): void
}