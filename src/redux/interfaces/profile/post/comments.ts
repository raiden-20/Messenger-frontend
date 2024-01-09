import {PostPhoto} from "../../post/CreatePost";
import {GetCommentsToPost, SetComment} from "../../../thunk/postThunk";
import {setButtonEditPostClick} from "../../../reducers/postReducer";

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
    like(): void
    setButtonClickToPostWithComments(flag: boolean): void
    setInputPostComment(input_comment: string): void
    like_button(): void
    setComment(): void


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
    input_comment: string
}

export interface StateUserCommentClass {
    id: string
    name: string,
    nickname: string
    avatarUrl: string
    myName: string,
    myNickname: string
    myAvatarUrl: string
    message: string

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
    GetCommentsToPost(postId: string): void
    LikePost(postId: string, isLiked: boolean, likeCount: string): void
    DeletePost(postId: string): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void

    SetComment(postId: string, input_comment: string,
               name: string, nickname: string, avatarUrl: string,
               commentCount: string): void

    setButtonClickToPostWithComments(flag: boolean): void
    setInputPostComment(input_comment: string): void

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
    myName: string,
    myNickname: string
    myAvatarUrl: string
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