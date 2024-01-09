import {AuthGetData} from "../../thunk/authThunk";
import {ProfileData} from "../../thunk/profileThunk";
import {GetPhoto, GetPhotoCount} from "../../thunk/photoThunk";
import {ActionUser, GetFriendsCount, GetRandomFriends, GetUserFromListAuthData} from "../../thunk/usersThunk";

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

    AuthGetData(id: string): void
    ProfileData(id: string): void
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

    GetPhotoCount(): void
    GetPhoto(): void
    GetRandomFriends(): void
    GetFriendsCount(): void
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
}

