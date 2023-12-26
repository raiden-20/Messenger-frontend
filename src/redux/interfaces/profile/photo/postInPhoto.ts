export interface StatePostInPhoto {
    post: {
        postId: string,
        userComments: [],
        input_comment: string
    }
    profile: {
        name: string,
        avatarUrl: string
    }
    auth: {
        nickname: string,
    }
    photo: {
        onePhotoUrl: string
    }
}

export interface StateOnePhotoClass {
    postId: string,
    userComments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string
}
export interface PropsOnePhotoClass {
    postId: string,
    userComments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string

    setInputPostComment(input_comment : string): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setUserComments(userComments: []): void
}

export interface PropsOnePostComponent {
    postId: string,
    userComments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string

    text: string,
    isLiked: boolean,
    countLikes: string
    countComments: string,
    time: string

    setInputPostComment(input_comment : string): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setComment(): void

    likePost(): void
}

export interface PropsOneUserComponent {
    avatarUrl: string
    name: string
    nickname: string
    isLike: boolean
    likesCount: string
    commentsCount: string
    time: string
    text: string

    deleteComment(): void
    likeComment(): void
}

export interface StateOneUserDataClass {
    comment_id: string
    avatarUrl: string
    name: string
    nickname: string
    isLike: boolean
    likesCount: string
    commentsCount: string
    time: string
    text: string
}
export interface PropsOneUserDataClass {
    comment_id: string
    avatarUrl: string
    name: string
    nickname: string
    isLike: boolean
    likesCount: string
    commentsCount: string
    time: string
    text: string
}

