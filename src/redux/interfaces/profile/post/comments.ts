import {PostPhoto} from "../../post/CreatePost";

export interface Comment {
    commentId: string
    userId: string | null,
    text: string,
    time: string
    likeCount: string,
    isLiked: boolean
    name: string
    nickname: string
    avatarUrl: string
}

export interface PropsComment {
    postId: string
    commentCount: string
    commentId: string
    userId: string | null,
    text: string,
    time: string
    likeCount: string,
    isLiked: boolean
    name: string
    nickname: string
    avatarUrl: string

    deleteOneComment(commentId: string): void

    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void
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

    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void


    postId: string,
    time: string,
    text: string,
    photoUrl: PostPhoto[],
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
    photoUrl: PostPhoto[],
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

    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void

    postId: string,
    time: string,
    text: string,
    photoUrl: PostPhoto[],
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
    userId: string | null
    text: string,
    time: string,
    likeCount: string,
    isLiked: boolean

    avatarUrl: string,
    name: string,
    nickname: string

    likeComment(): void
    deleteComment(): void


}