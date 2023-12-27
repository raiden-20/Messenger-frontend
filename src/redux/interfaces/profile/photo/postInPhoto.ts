import {Comment} from "../post/comments";
import {Post} from "../post/post";

export interface StatePostInPhoto {
    post: {
        comments: [],
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
        postId: string,
    }
}

export interface StateOnePhotoClass {
    postId: string,
    comments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string
}
export interface PropsOnePhotoClass {
    postId: string,
    comments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string

    setInputPostComment(input_comment : string): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setUserComments(comments: []): void

    addOneComment(oneComment: Comment): void
    deleteOneComment(commentId: string): void
    setOnePost(onePost: Post, postId: string):void
    setOneComment(oneComment: Comment, commentId: string):void
}

export interface PropsOnePostComponent {
    postId: string,
    comments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string

    text: string,
    isLiked: boolean,
    likeCount: string
    commentCount: string,
    time: string

    setInputPostComment(input_comment : string): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
    setComment(): void

    likePost(): void

    addOneComment(oneComment: Comment): void
    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string):void
}

export interface PropsOneUserComponent {
    avatarUrl: string
    name: string
    nickname: string
    isLike: boolean
    likeCount: string
    commentsCount: string
    time: string
    text: string

    deleteComment(): void
    likeComment(): void
}

export interface StateOneUserDataClass {
    commentId: string
    userId: string | null
    avatarUrl: string
    name: string
    nickname: string
    isLiked: boolean
    likeCount: string
    commentsCount: string
    time: string
    text: string
}
export interface PropsOneUserDataClass {
    commentId: string
    userId: string | null
    avatarUrl: string
    name: string
    nickname: string
    isLiked: boolean
    countLikes: string
    commentsCount: string
    time: string
    text: string

    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string):void
}

