export interface Comment {
    commentId: string
    userId: string,
    text: string,
    time: string
    likeCount: string,
    isLiked: boolean

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
}

export interface PropsComment {
    commentId: string
    userId: string,
    text: string,
    time: string
    likeCount: string,
    isLiked: boolean

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
    setCommentName(commentName: string): void
    setCommentNickname(commentNickname: string): void
    setCommentAvatarUrl(commentAvatarUrl: string): void
}

export interface PropsUserComment {
    setButtonCommentClick(flag: boolean): void
    setUserComments(userComments: []): void
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void
    setComment(): void

    setCommentName(commentName: string): void
    setCommentNickname(commentNickname: string): void
    setCommentAvatarUrl(commentAvatarUrl: string): void



    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likeCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean
    input_comment: string

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
}

export interface StateUserCommentClass {
    id: string
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean

    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likesCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
    input_comment: string

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
}

export interface PropsUserCommentClass {
    setButtonCommentClick(flag: boolean): void
    setUserComments(userComments: []): void
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void



    setCommentName(commentName: string): void
    setCommentNickname(commentNickname: string): void
    setCommentAvatarUrl(commentAvatarUrl: string): void

    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likeCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean
    input_comment: string

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
}

export interface PropsOneCommentComponent {
    text: string,
    time: string,
    likeCount: string,
    isLiked: boolean

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,

    likeComment(): void
    deleteComment(): void


}