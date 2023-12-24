export interface Comment {
    user_id: string,
    text: string,
    createdAt: string,
    countLikes: string,
    isLiked: boolean
}

export interface PropsUserComment {
    setButtonCommentClick(flag: boolean): void
    setUserComments(userComments: []): void

    idPost: string,
    time: string,
    text: string,
    photoUrl: [],
    likesCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean
}

export interface StateUserCommentClass {
    id: string
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean

    idPost: string,
    time: string,
    text: string,
    photoUrl: [],
    likesCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
}

export interface PropsUserCommentClass {
    setButtonCommentClick(flag: boolean): void
    setUserComments(userComments: []): void

    idPost: string,
    time: string,
    text: string,
    photoUrl: [],
    likesCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean
}