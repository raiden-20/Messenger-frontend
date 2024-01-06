import {Post} from "./post";
import {SetPhotoInterface} from "../../../../components/axios/photo/photoInterface";

export interface StateEditPost {
    post : {
        input_postPhoto: SetPhotoInterface[],
        input_postPhotoUrl: [],
        input_postText: ''
    }

}

export interface PropsEditPost {
    postId: string,
    input_postPhoto: SetPhotoInterface[],
    input_postPhotoUrl: [],
    input_postText: '',

    setButtonEditPostClick(flag: boolean): void
    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setButtonEditPostClick(flag: boolean): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setOnePost(onePost: Post): void
}