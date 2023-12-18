export interface StatePhotoProfile {
    profile: {
        name: string
    }
    photo: {
        countPhoto: number
        photoUrl: []
        isButtonOpenPhotoPressed: boolean,
        isLiked: boolean
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
    isLiked: boolean

    setPhotoUrl(photoUrl : []): void
    setCountPhoto(countPhoto : number): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setLikedPhoto(isLiked : boolean): void
}
export interface PropsPhotoProfileComponent {
    name: string
    countPhoto: number
    photoUrl: []

    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setLikedPhoto(isLiked : boolean): void
}