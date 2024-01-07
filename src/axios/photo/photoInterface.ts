export interface GetPhotoAxiosInterface {
    id: string
}

export interface DeleteAvatarPhotoAxiosInterface {
    deleteAvatarUrl: string
}

export interface SetAvatarAxiosInterface {
    input_avatarUrl: File
}

export interface DeleteCoverPhotoAxiosInterface {
    deleteCoverUrl: string
}

export interface SetCoverAxiosInterface {
    input_coverUrl: File
}

export interface SetPhotoInterface {
    flag: boolean,
    input_postPhoto:File
}

export interface SetPostPhotoAxiosInterface {
    input_postPhoto: File,
    postId: string
}

export interface DeletePhotoPostAxiosInterface {
    url: string,
    photoId: string,
    postId: string,
}