import {Post} from "../profile/post/post";
import {SetPhotoInterface} from "../../../axios/photo/photoInterface";

export interface PropsCreatePost {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',

    setButtonCreatPostPressed(flag: boolean): void
}

export interface PostPhoto {
    url: string,
    photoId: string
}

export interface PostPhotoFile {
    file: SetPhotoInterface,
    flag: boolean
}

export interface StateCreatingPost {
    post: {
        input_postPhoto: SetPhotoInterface[],
        input_postPhotoUrl: [],
        input_postText: '',
        message: string
    }
}

export interface StateCreatingPostClass {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: ''

}

export interface PropsCreatePostButton {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',

    setInputPostPhoto(input_postPhoto: File, flag: boolean): void

    setInputPostText(input_postText: string): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void

    setInputPostPhotoDelete(index: number): void

    setInputPostAllPhotoDelete(): void

    setPosts(posts: []): void

    addOnePost(onePost: Post): void

}
export interface PropsCreatePostButtonClass {
    input_postPhoto: SetPhotoInterface[],
    input_postPhotoUrl: [],
    input_postText: '',
    message: string

    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setButtonCreatPostPressed(flag: boolean): void
    setPosts(posts: []): void
    addOnePost(onePost: Post): void
    setMessage(message: string): void
}
export interface PropsCreatePostButtonComponent {
    input_postPhoto: SetPhotoInterface[],
    input_postPhotoUrl: [],
    input_postText: '',
    message: string

    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setButtonCreatPostPressed(flag: boolean): void
    setNewPost(): boolean
    setMessage(message: string): void
}