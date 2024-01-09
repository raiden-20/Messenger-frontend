import {GetUserFromListAuthData, GetUserFromListPhoto} from "../../thunk/usersThunk";

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
    GetUserFromListAuthData(id: string): void
}

export interface PropsOneFriend2{
    id: string,
    name: string,
    bio: string
    avatarUrl: string
    status: string,
    nickname: string,
    photo: []

    ActionUser(id: string, action: string): void
    GetUserFromListAuthData(i: string): void
    GetUserFromListPhoto(i: string): void
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
    status: string,
    photo: []
    changeFriendStatus(action: string): void
}

export interface PropsStatus {
    status: string
}