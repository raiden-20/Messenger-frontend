export interface StateEditPost {
    post : {
        idPost: string,
        input_postPhoto: [],
        input_postPhotoUrl: [],
        input_postText: ''
    }

}

export interface PropsEditPost {
    idPost: string,
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: ''

    setButtonEditPostClick(flag: boolean): void
    setInputPostPhoto(input_postPhoto: File): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setButtonEditPostClick(flag: boolean): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
}