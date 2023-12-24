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
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void
    setComment(): void

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
    input_comment: string
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
    input_comment: string
}

export interface PropsUserCommentClass {
    setButtonCommentClick(flag: boolean): void
    setUserComments(userComments: []): void
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void

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
    input_comment: string
}

export interface PropsOneCommentComponent {
    name: string,
    nickname: string,
    avatarUrl: string
    text: string,
    createdAt: string,
    countLikes: string,
    isLiked: boolean

    likeComment(): void
    deleteComment(): void
}