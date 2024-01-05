import {Comment} from "./comments";
import {PostPhoto} from "../../post/CreatePost";
import {setOneCommentCountPost, setOneLikeCommentPost, setOneLikeCountPost} from "../../../reducers/postReducer";

export interface StatePost {
    auth : {
        nickname: string
        message: string
    }
    profile : {
        name: string,
        avatarUrl: string
    }

    post: {
        posts: [],
        comments: [],
        buttonEditPost: boolean
        input_comment: string
    }
}

export interface PropsPost {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    posts: []
    comments: [],
    input_comment: string
    buttonEditPost: boolean

    setMessage(message: string): void
    setPosts(posts : []): void
    setUserComments(comments : []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostComment(input_comment: string): void

    setButtonEditPostClick(flag: boolean): void

    deleteOnePost (postId: string): void
    deleteOneComment(commentId: string): void
    setOnePost(onePost: Post): void
    setOneComment(oneComment: Comment): void
    addOneComment(oneComment: Comment): void

    setOneLikeCountPost(postId: string, likeCount: string): void
    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void
}

export interface StatePostsClass {
    name: string,
    nickname: string
    avatarUrl: string
    posts: []
    comments: [],
    message: string
    input_comment: string
    buttonEditPost: boolean
}

export interface PropsPostComponent {
    name: string,
    nickname: string
    avatarUrl: string
    posts: []
    comments: [],
    message: string
    input_comment: string
    buttonEditPost: boolean

    setMessage(message: string): void
    setUserComments(comments: []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostComment(input_comment: string): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void

    setButtonEditPostClick(flag: boolean): void

    deleteOnePost (postId: string): void
    deleteOneComment(commentId: string): void
    setOnePost(onePost: Post): void
    setOneComment(oneComment: Comment): void
    addOneComment(oneComment: Comment): void

    setOneLikeCountPost(postId: string, likeCount: string): void
    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void
}

export interface StateOnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    post: Post
    comments: [],
    input_comment: string
    buttonEditPost: boolean

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
}
export interface PropsOnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    post: Post
    comments: [],
    input_comment: string
    buttonEditPost: boolean

    setMessage(message: string): void
    setUserComments(comments: []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostComment(input_comment: string): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void

    setButtonEditPostClick(flag: boolean): void

    deleteOnePost (postId: string): void
    deleteOneComment(commentId: string): void
    setOnePost(post: Post): void
    setOneComment(oneComment: Comment): void
    addOneComment(oneComment: Comment): void

    setOneLikeCountPost(postId: string, likeCount: string): void
    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void
}


export interface OnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    comments: [],
    input_comment: string
    setMessage(message: string): void
    setUserComments(comments: []): void

    like(): void
    comment(): void
    deletePost(): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostComment(input_comment: string): void
    setInputPostPhoto(input_postPhoto: File): void
}

export interface OnePost {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    comments: [],
    input_comment: string
    buttonEditPost: boolean

    setMessage(message: string): void
    setUserComments(comments: []): void
    setInputPostComment(input_comment: string): void

    like(): void
    deletePost(): void
    editPost(): void

    setButtonEditPostClick(flag: boolean): void

    deleteOneComment(commentId: string): void
    setOneComment(oneComment: Comment, commentId: string): void
    addOneComment(oneComment: Comment): void

    setOneLikeCommentPost(commentId: string, likeComment: string): void
    setOneCommentCountPost(postId: string, commentCount: string): void
    setOneCommentUserData(commentId: string, name: string, nickname: string, avatarUrl: string): void
}

export interface Post {
    postId: string,
    time: string,
    text: string,
    photoUrl: PostPhoto[],
    likeCount: string
    commentCount: string,
    isLiked: boolean
}

export interface Time {
    time: string[]
}

