import {Post} from "./post";

export interface Comment {
    commentId: string
    userId: string | null,
    text: string,
    time: string
    countLikes: string,
    isLiked: boolean
}

export interface PropsComment {
    commentId: string
    userId: string | null,
    text: string,
    time: string
    countLikes: string,
    isLiked: boolean

    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string): void

}

export interface PropsUserComment {
    setButtonCommentClick(flag: boolean): void
    setUserComments(comments: []): void
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void
    setComment(): void

    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string): void


    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likeCount: string
    commentCount: string,
    isLiked: boolean
    comments: [],
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

    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likeCount: string
    commentCount: string,
    isLiked: boolean
    comments: [],
    input_comment: string
}

export interface PropsUserCommentClass {
    setButtonCommentClick(flag: boolean): void
    setUserComments(comments: []): void
    setInputPostComment(input_comment: string): void
    edit(): void
    deletePost(): void
    like_button(): void

    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string): void
    addOneComment(oneComment: Comment): void

    postId: string,
    time: string,
    text: string,
    photoUrl: [],
    likeCount: string
    commentCount: string,
    isLiked: boolean
    comments: [],
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    buttonEditPost: boolean
    input_comment: string
}

export interface PropsOneCommentComponent {
    text: string,
    time: string,
    countLikes: string,
    isLiked: boolean

    avatarUrl: string,
    name: string,
    nickname: string

    likeComment(): void
    deleteComment(): void


}