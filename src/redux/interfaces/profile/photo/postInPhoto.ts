import {Post} from "../post/post";

export interface StatePostInPhoto {
    post: {
        onePost: Post,
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

export interface StateOneComment {
    photo: {
        postId: string,
    }
}

export interface StateOnePhotoClass {
    onePost: Post
    postId: string,
    comments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string
}
export interface PropsOnePhotoClass {
    onePost: Post
    postId: string,
    comments: [],
    input_comment: string
    name: string,
    nickname: string,
    onePhotoUrl: string
    avatarUrl: string

    GetOnePostData(postId: string): void
    GetPosts(): void
    GetCommentsToPost(postId: string): void
    SetComment(postId: string, input_comment: string,
               name: string, nickname: string, avatarUrl: string,
               commentCount: string): void
    LikePost(postId: string, isLiked: boolean, likeCount: string): void

    setInputPostComment(input_comment : string): void
    setButtonOpenPhoto(isButtonOpenPhotoPressed : boolean): void
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
}

export interface PropsOneUserComponent {
    commentId: string
    avatarUrl: string
    userId: string | null
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
    postId: string
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

    likePost(): void
    LikeComment(commentId: string, isLiked: boolean, likeCount: string): void
    DeleteComment(commentId: string, postId: string, commentsCount: string): void
    GetOneCommentData(userId: string, commentId: string): void
}

