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
import {BLOG, LOCALHOST} from "../urls";
import {Post} from "../../../redux/interfaces/profile/post/post";
import {SetPhotoInterface} from "../photo/photoInterface";

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
                        switch (response[0]) {
                            case 200: {
                                let onePost: Post = {
                                    postId: response[1].postId,
                                    time: response[1].time,
                                    text: response[1].text,
                                    photoUrl: response[1].photoUrl,
                                    likeCount: response[1].likeCount,
                                    commentCount: response[1].commentCount,
                                    isLiked: response[1].isLiked
                                }
                                data.addOnePost(onePost)
                                data.setButtonCreatPostPressed(false)
                            }
                        }
                    })
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
    return axios.get(LOCALHOST + BLOG + `/post/${data.postId}`, config)
        .then(response => {
            return [response.status, response.data]
        }).catch(error => {
        debugger
        return [error.response.status, '']
    })
}

export const EditPostAxios = async (data: EditPostAxiosInterface) => {
    return axios.put(LOCALHOST + BLOG + `/post`, {
        postId: data.postId,
        text: data.input_postText
    },config)
        .then(response => {
            return response.status
        }).catch(error => {
            return error.response.status
    })
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
            return [response.status, response.data]
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
        return [error.response.status, '']
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