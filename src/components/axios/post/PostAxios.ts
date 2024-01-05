import axios from "axios";
import config from "../../paths/config";
import {
    DeleteCommentAxiosInterface,
    DeletePostAxiosInterface,
    EditPostAxiosInterface, GetCommentsAxiosInterface,
    GetPostDataAxiosInterface,
    GetPostsAxiosInterface, LikeCommentAxiosInterface, LikePostAxiosInterface,
    NewPostAxiosInterface, SetCommentAxiosInterface
} from "./postInterface";
import {SetPostPhotoAxios} from "../photo/PhotoAxios";
import {PostPhotoFile} from "../../../redux/interfaces/post/CreatePost";
import {Comment} from "../../../redux/interfaces/profile/post/comments";
import {BLOG, LOCALHOST} from "../urls";
import {Post} from "../../../redux/interfaces/profile/post/post";
import {response} from "express";

export const GetPostsAxios = (data: GetPostsAxiosInterface) => {
    axios.get(LOCALHOST + BLOG + `/user/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200: {
                    data.setPosts(response.data)
                }
            }
        }).catch(error => {
        debugger
        console.log(error)
    })
}

export const NewPostAxios = (data: NewPostAxiosInterface): boolean => {
    axios.post(LOCALHOST + BLOG + '/post/create', {
        text: data.input_postText
    }, config)
        .then(response => {
            switch (response.status) {
                case 200: {
                    data.setInputPostText('')
                    debugger
                    for(let i = 0; i < data.input_postPhoto.length; i++) {
                        SetPostPhotoAxios({
                            input_postPhoto: data.input_postPhoto[i],
                            postId: response.data
                        })
                    }
                    let postData = GetPostDataAxios({
                        postId: response.data
                    })
                    postData.then(response => {
                        if (response !== null) {
                            let onePost: Post = {
                                postId: response.postId,
                                time: response.time,
                                text: response.text,
                                photoUrl: response.photoUrl,
                                likeCount: response.likeCount,
                                commentCount: response.commentCount,
                                isLiked: response.isLiked
                            }
                            data.addOnePost(onePost)
                            data.setButtonCreatPostPressed(false)
                        }
                    })
                    return true
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 400: {
                // too many characters
                // file too big
                break
            }
            case 403: {
                // bad token
                break
            }
        }
        return false
    })
    return false
}

export const GetPostDataAxios = async (data: GetPostDataAxiosInterface) => {
    debugger
    return axios.get(LOCALHOST + BLOG + `/post/${data.postId}`, config)
        .then(response => {
            switch (response.status) {
                case 200: {
                    return response.data
                }
            }
        }).catch(error => {
        debugger
        return error.response.status
    })
}

export const EditPostAxios = (data: EditPostAxiosInterface) => {
    axios.put(LOCALHOST + BLOG + `/post`, {
        postId: data.postId,
        text: data.input_postText
    },config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.input_postPhoto.map((photo: PostPhotoFile) => {
                        if (!photo.flag) {
                            SetPostPhotoAxios({
                                input_postPhoto: photo.file,
                                postId:data.postId
                            })
                        }

                    })

                    let postData = GetPostDataAxios({
                        postId: data.postId
                    })
                    postData.then(response => {
                        if (response !== null) {
                            let onePost: Post = {
                                postId: response.postId,
                                time: response.time,
                                text: response.text,
                                photoUrl: response.photoUrl,
                                likeCount: response.likeCount,
                                commentCount: response.commentCount,
                                isLiked: response.isLiked
                            }
                            data.setOnePost(onePost)
                            data.setButtonCreatPostPressed(false)
                        }
                    })
                    return true
                }
            }
        })
    return false
}

export const DeletePostAxios = async (data: DeletePostAxiosInterface) => {
    return axios.delete(LOCALHOST + BLOG + `/post/${data.postId}`, config)
        .then(response => {
            return response.status
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {
                //bad token
                break
            }
            case 404 : {
                // post doesn't exist
            }
        }
        return error.response.status
    })
}

export const LikePostAxios = async (data: LikePostAxiosInterface) => {
    return axios.put(LOCALHOST + BLOG + '/post/like', {
        postId: data.postId
    }, config)
        .then(response => {
            return response.status
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                // bad token //todo сделать alarm 'ваша сессия истекла, войдите в систему заново' и выкинуть на вход
                break
            }
            case 404: {
                // post doesn't exist
                break
            }
        }
        return error.response.status
    })
}

export const SetCommentAxios = async (data: SetCommentAxiosInterface) => {
    return axios.post(LOCALHOST + BLOG + '/comment/create', {
        postId: data.postId,
        text: data.input_comment
    }, config)
        .then(response => {
            return response.status
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {
                //bad token
                break
            }
            case 404 : {
                // post doesn't exist
            }
        }
        return error.response.status
    })
}

export const GetCommentsAxios = async (data: GetCommentsAxiosInterface) => {
    return axios.get(LOCALHOST + BLOG + `/comment/${data.postId}`, config)
        .then(response => {
            return [response.status, response.data]
        }).catch(error => {
            return [error.response.status, '']
        })
}

export const LikeCommentAxios = async (data: LikeCommentAxiosInterface)=> {
    return axios.put(LOCALHOST + BLOG + '/comment/like',  {
        commentId: data.commentId
    },config)
        .then(response => {
            return response.status
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //bad token
                break
            }
            case 404: {
                //post doesn't exist
            }
        }
        return error.response.status
    })

}

export const DeleteCommentAxios = async (props: DeleteCommentAxiosInterface) => {
    return axios.delete(LOCALHOST + BLOG + `/comment/${props.commentId}`, config)
        .then(response => {
            return response.status
        }).catch(error => {
        switch (error.response.status) {
            case 403: {
                //bad token
                break
            }
            case 404: {
                //comment doesn't exist
            }
        }
        return error.response.status
    })
}