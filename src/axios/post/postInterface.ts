import {Post} from "../../redux/interfaces/profile/post/post";
import {Comment} from "../../redux/interfaces/profile/post/comments";
import {SetPhotoInterface} from "../photo/photoInterface";

export interface GetPostsAxiosInterface {
    setPosts(posts : []): void
}

export interface GetPostDataAxiosInterface {
    postId: string
}

export interface NewPostAxiosInterface {
    input_postText: string
}

export interface EditPostAxiosInterface {
    postId: string,
    input_postText: string,
    input_postPhoto: SetPhotoInterface[]
}

export interface DeletePostAxiosInterface {
    postId: string
}

export interface LikePostAxiosInterface {
    postId: string
}

export interface SetCommentAxiosInterface {
    postId: string
    input_comment: string,
    addOneComment(oneComment: Comment): void
}

export interface GetCommentsAxiosInterface {
    postId: string
}

export interface LikeCommentAxiosInterface {
    commentId: string
}

export interface DeleteCommentAxiosInterface {
    commentId: string
}