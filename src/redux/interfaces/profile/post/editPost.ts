export interface StateEditPost {
    post : {
        postId: string,
        input_postPhoto: [],
        input_postPhotoUrl: [],
        input_postText: ''
        deletePhotoPostUrl: []
    }

}

export interface PropsEditPost {
    postId: string,
    input_postPhoto: [],
    input_postPhotoUrl: [],
    input_postText: '',
    deletePhotoPostUrl: []

    setButtonEditPostClick(flag: boolean): void
    setInputPostPhoto(input_postPhoto: File): void
    setInputPostText(input_postText: string): void
    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setButtonEditPostClick(flag: boolean): void
    setInputPostPhotoDelete(index: number): void
    setInputPostAllPhotoDelete(): void
    setDeletePhotoPostUrl(deletePhotoPostUrl: {} | null): void
}

export interface deleteData {
    url: string,
    photoId: string,
    postId: string
}