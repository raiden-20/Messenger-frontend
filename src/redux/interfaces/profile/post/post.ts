import {Comment} from "./comments";
import {PostPhoto} from "../../post/CreatePost";
import {DeletePost, GetCommentsToPost, GetOnePostData, LikePost} from "../../../thunk/postThunk";
import {setButtonCreatePostClick, setInputPostPhoto, setInputPostPhotoUrl} from "../../../reducers/postReducer";

export interface StatePost {
    post: {
        posts: [],
        buttonCreatePost: boolean
    }

}

export interface Edit {
    postId: string,
    flag: boolean
}

export interface StateOnePost {
    auth : {
        myNickname: string,
        nickname: string
        message: string
    }
    profile : {
        myName: string,
        name: string,
        myAvatarUrl: string
        avatarUrl: string
    }

    post: {
        comments: [],
        posts: [],
        buttonEditPost: Edit[]
        input_comment: string
    }
}

export interface PropsPost {
    buttonCreatePost: boolean
    posts: []
    GetPosts(): void
    setButtonCreatePostClick(flag: boolean): void
}

export interface StatePostsClass {
    posts: [],
    buttonCreatePost: boolean
}

export interface PropsPostComponent {
    buttonCreatePost: boolean
    posts: []
    setButtonCreatePostClick(flag: boolean): void
}

export interface PropsOnePostComponent {
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
    buttonEditPost: Edit[]

    commentName : string,
    commentNickname: string,
    commentAvatarUrl: string,
    posts: []
}
export interface PropsOnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    post: Post
    comments: [],
    input_comment: string
    buttonEditPost: Edit[],
    posts: Post[]

    GetCommentsToPost(postId: string): void
    LikePost(postId: string, isLiked: boolean, likeCount: string): void
    DeletePost(postId: string): void
    GetPosts(): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void

    setInputPostText(input_postText: string): void
    setInputPostComment(input_comment: string): void
    setButtonEditPostClick(postId: string, flag: boolean): void
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
    comments: [],
    input_comment: string
    buttonEditPost: boolean

    setInputPostComment(input_comment: string): void
    setButtonChange(flag: boolean): void

    like(): void
    deletePost(): void
    editPost(): void
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

