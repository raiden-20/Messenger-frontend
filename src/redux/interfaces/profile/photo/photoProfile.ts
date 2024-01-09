import {AuthGetData} from "../../../thunk/authThunk";
import {ProfileData} from "../../../thunk/profileThunk";
import {GetPhoto, GetPhotoCount} from "../../../thunk/photoThunk";

export interface StatePhotoProfile {
    profile: {
        name: string
    }
    photo: {
        countPhoto: number
        photoUrl: []
        isButtonOpenPhotoPressed: boolean,
        onePhoto: string
    }
}

export interface StatePhotoProfileClass {
    name: string
    countPhoto: number
    photoUrl: []
}

export interface PropsPhotoProfile {
    name: string
    countPhoto: number
    photoUrl: []
    isButtonOpenPhotoPressed: boolean,

    AuthGetData(id: string): void
    ProfileData(id: string): void
    GetPhoto(): void
    GetPhotoCount(): void

    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setPostUrl(postId: string): void
    setOnePhotoUrl(onePhotoUrl : string): void
}
export interface PropsPhotoProfileComponent {
    name: string
    countPhoto: number
    photoUrl: []
    isButtonOpenPhotoPressed: boolean,

    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setPostUrl(postId: string): void
    setOnePhotoUrl(onePhotoUrl : string): void
}

export interface PhotoArr {
    postId: string,
    userId: string,
    url: string
}