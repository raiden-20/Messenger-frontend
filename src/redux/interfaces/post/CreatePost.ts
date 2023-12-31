import {Post} from "../profile/post/post";

export interface PropsCreatePost {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',

    setButtonCreatPostPressed(flag: boolean): void
}

export interface StateCreatingPost {
    post: {
        input_postPhoto: [],
        input_postPhotoUrl: [],
        input_postText: ''
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

    setInputPostPhoto(input_postPhoto: File): void

    setInputPostText(input_postText: string): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void

    setInputPostPhotoDelete(index: number): void

    setInputPostAllPhotoDelete(): void

    setPosts(posts: []): void

    addOnePost(onePost: Post): void

}
export interface PropsCreatePostButtonClass {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',

    setInputPostPhoto(input_postPhoto: File): void

    setInputPostText(input_postText: string): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void

    setInputPostPhotoDelete(index: number): void

    setInputPostAllPhotoDelete(): void

    setButtonCreatPostPressed(flag: boolean): void

    setPosts(posts: []): void
    addOnePost(onePost: Post): void
}
export interface PropsCreatePostButtonComponent {
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',

    setInputPostPhoto(input_postPhoto: File): void

    setInputPostText(input_postText: string): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void

    setInputPostPhotoDelete(index: number): void

    setInputPostAllPhotoDelete(): void

    setButtonCreatPostPressed(flag: boolean): void

    setNewPost(): boolean
}