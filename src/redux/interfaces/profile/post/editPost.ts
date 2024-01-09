import {SetPhotoInterface} from "../../../../axios/photo/photoInterface";
import {Edit} from "./post";

export interface StateButtonCreatePost{
    post : {
        buttonEditPost: boolean
    }
}

export interface PropsButtonCreatingPost {
    setButtonEditPostClick(flag: boolean): void
    buttonEditPost: boolean
}

export interface StateEditPost {
    post : {
        input_postPhoto: SetPhotoInterface[],
        input_postPhotoUrl: [],
        input_postText: '',
        message: string
    }

}

export interface PropsEditPost {
    postId: string,
    input_postPhoto: SetPhotoInterface[],
    input_postPhotoUrl: [],
    input_postText: '',
    message: string

    EditPost(postId: string, input_postText: string, input_postPhoto: SetPhotoInterface[], deletePhotoPostUrl: string[]): void

    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setButtonEditPostClick(postId: string, flag: boolean): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setMessage(message: string): void
    setButtonChange(flag: boolean): void
}