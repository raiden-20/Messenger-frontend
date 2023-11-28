export interface StateOneFriend {
    id: number,
    name: string,
    surname: string,
    nickname: string,
    bio: string,
    followed: boolean
}

export interface PropsOneFriend{
    id: number,
    name: string,
    surname: string,
    nickname: string,
    bio: string,
    followed: boolean

    setFollow(userId: number): void
    setUnfollow(userId: number): void
}