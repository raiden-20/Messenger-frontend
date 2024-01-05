export interface GetPhotoAxiosInterface {
    id: string
}

export interface DeleteAvatarPhotoAxiosInterface {
    deleteAvatarUrl: string,

    setAvatarUrl(avatarUrl: string): void
    setDeleteAvatarFlag(flag: boolean): void
}

export interface SetAvatarAxiosInterface {
    input_avatarUrl: File

    setAvatarUrl(avatarUrl : string): void
}

export interface DeleteCoverPhotoAxiosInterface {
    deleteCoverUrl: string,

    setCoverUrl(avatarUrl: string): void
    setDeleteCoverFlag(flag: boolean): void
}

export interface SetCoverAxiosInterface {
    input_coverUrl: File

    setCoverUrl(coverUrl : string): void
}

export interface GetPhotoCountAxiosInterface {
    setCountPhoto(countPhoto: number): void
}

export interface SetPhotoInterface {
    flag: boolean,
    input_postPhoto:File
}

export interface SetPostPhotoAxiosInterface {
    input_postPhoto: SetPhotoInterface,
    postId: string
}

export interface DeletePhotoPostAxiosInterface {
    url: string,
    photoId: string,
    postId: string,
}