export interface User {
    id: number,
    name: string,
    surname: string,
    nickname: string,
    bio: string,
    followed: boolean
}

export interface StateFriends {
    users : {
        users : []
    }
}

export interface PropsFriends{
    users : []

    setFollow(userId: number): void
    setUnfollow(userId: number): void
}