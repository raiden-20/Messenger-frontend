export interface StateUserProfile {
    profile : {
        name: string;
        avatarUrl: string
        coverUrl: string
        birthDate: string;
        bio: string;
        status: string
    }
    auth: {
        id: string
        nickname: string;
        message: string
        token: string
    }
}

export interface PropsUserProfile{
    id: string
    name: string;
    nickname: string;
    birthDate: string;
    bio: string;
    coverUrl: string
    avatarUrl: string
    status: string
    message: string
    token: string

    setName(name: string): void
    setNickname(nickname: string): void
    setBirthDate(birthDate: string): void
    setAvatarUrl(avatarUrl: string): void
    setCoverUrl(coverUrl: string): void
    setBio(bio: string): void
    setStatus(status: string): void
    setMessage(message: string): void
    setId(id: string | null): void
}

export interface PropsUserProfileComponent{
    id: string
    name: string;
    nickname: string;
    birthDate: string;
    bio: string;
    coverUrl: string
    avatarUrl: string
    status: string
    message: string
    token: string
}

export interface PropsUserProfileAside {
    users : []
    countFriends: number
    countPhoto: number

    setUsers(users: []): void
    setUserFriendsCount(countFriends: number): void
    setCountPhoto(countPhoto: number): void
}

export interface StateUserProfileAside {
    users : {
        users : [],
        countFriends: number
    }
    photo: {
        countPhoto: number
    }
}

export interface StateUserProfileAsideComponent {
    users : [],
    countFriends: number
    countPhoto: number

}

export interface PropsUserProfileAsideComponent {
    users : []
    countFriends: number
    countPhoto: number
}

