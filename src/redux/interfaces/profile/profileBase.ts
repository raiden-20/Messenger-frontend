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
        nickname: string;
        message: string
    }
}

export interface ProfileUser {
    name: string;
    avatarUrl: string
    coverUrl: string
    birthDate: string;
    bio: string;
    status: string
}

export interface PropsUserProfile{
    name: string;
    nickname: string;
    birthDate: string;
    bio: string;
    coverUrl: string
    avatarUrl: string
    status: string
    message: string

    setUserData(name: string,
                birthDate: string,
                bio: string,
                avatarUrl: string,
                coverUrl: string,
                status: string): void
    setNickname(nickname: string): void
    setEmail(email: string): void
}

export interface PropsUserProfileComponent{
    name: string;
    nickname: string;
    birthDate: string;
    bio: string;
    coverUrl: string
    avatarUrl: string
    status: string
    message: string
}

export interface PropsUserProfileAside {
    usersShortInfo : []
    countFriends: number
    countPhoto: number
    photoUrl: []

    setUsers(usersShortInfo: []): void
    setPhotoUrl (photoUrl : []): void
    setUserFriendsCount(countFriends: number): void
    setCountPhoto(countPhoto: number): void
    setChangeUserStatus(id: string, status: string): void
    setUserNickname(id: string, nickname: string): void
    setUserPhoto(id: string, photo : []): void
}

export interface StateUserProfileAside {
    users : {
        usersShortInfo : [],
        countFriends: number
    }
    photo: {
        countPhoto: number,
        photoUrl: []
    }
}

export interface StateUserProfileAsideComponent {
    usersShortInfo : [],
    countFriends: number
    countPhoto: number
    photoUrl: []

}

export interface PropsUserProfileAsideComponent {
    usersShortInfo : []
    countFriends: number
    countPhoto: number
    photoUrl: []

    setChangeUserStatus(id: string, status: string): void
    setUserNickname(id: string, nickname: string): void
    setUserPhoto(id: string, photo : []): void
}

