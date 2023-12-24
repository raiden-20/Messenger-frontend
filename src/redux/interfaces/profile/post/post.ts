export interface StatePost {
    auth : {
        nickname: string
        message: string
    }
    profile : {
        name: string,
        avatarUrl: string
    }

    post: {
        posts: [],
        userComments: [],
        buttonEditPost: boolean
    }
}

export interface PropsPost {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    posts: []
    userComments: [],
    buttonEditPost: boolean

    setMessage(message: string): void
    setPosts(posts : []): void
    setUserComments(userComments : []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostPhoto(input_postPhoto: File): void

    setButtonEditPostClick(flag: boolean): void
}

export interface StatePostsClass {
    name: string,
    nickname: string
    avatarUrl: string
    posts: []
    userComments: [],
    message: string
    buttonEditPost: boolean
}

export interface PropsPostComponent {
    name: string,
    nickname: string
    avatarUrl: string
    posts: []
    userComments: [],
    message: string
    buttonEditPost: boolean

    setMessage(message: string): void
    setUserComments(userComments: []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostPhoto(input_postPhoto: File): void

    setButtonEditPostClick(flag: boolean): void
}

export interface StateOnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    post: Post
    userComments: [],
    buttonEditPost: boolean
}
export interface PropsOnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    post: Post
    userComments: [],
    buttonEditPost: boolean
    setMessage(message: string): void
    setUserComments(userComments: []): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostPhoto(input_postPhoto: File): void

    setButtonEditPostClick(flag: boolean): void
}


export interface OnePostClass {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    userComments: [],
    setMessage(message: string): void
    setUserComments(userComments: []): void

    like(): void
    comment(): void
    deletePost(): void

    setInputPostPhotoUrl(input_postPhotoUrl: string): void
    setInputPostText(input_postText: string): void
    setInputPostPhoto(input_postPhoto: File): void
}

export interface OnePost {
    name: string,
    nickname: string
    avatarUrl: string
    message: string
    userComments: [],
    buttonEditPost: boolean
    setMessage(message: string): void
    setUserComments(userComments: []): void

    like(): void
    comment(): void
    deletePost(): void
    editPost(): void

    setButtonEditPostClick(flag: boolean): void
}

export interface Post {
    idPost: string,
    time: string,
    text: string,
    photoUrl: [],
    likesCount: string
    commentCount: string,
    isLiked: boolean
    userComments: [],
}

export interface Time {
    time: string[]
}

