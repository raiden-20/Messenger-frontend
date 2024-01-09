import {Post} from "../profile/post/post";
import {SetPhotoInterface} from "../../../axios/photo/photoInterface";
import {setButtonCreatePostClick} from "../../reducers/postReducer";

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
        message: string,
        buttonEditPost: boolean
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

    CreatePost(input_postText: string, input_postPhoto: SetPhotoInterface[]): void

    setInputPostPhoto(input_postPhoto: File, flag: boolean): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setButtonCreatePostClick(flag: boolean): void
    setMessage(message:string): void
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
    changePost(): void
    setNewPost(): void
    setMessage(message: string): void
}

export interface PropsButtonNewPost {
    setButtonCreatePostClick(buttonCreatePost: boolean): void
    buttonCreatePost: boolean
}
export interface StateButtonNewPost {
    post: {
        buttonCreatePost: boolean
    }
}