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

    setPhotoUrl(photoUrl : []): void
    setCountPhoto(countPhoto : number): void
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