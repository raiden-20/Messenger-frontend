import axios from "axios";
import config from "../../paths/config";
import {
    DeleteCommentAxiosInterface,
    DeletePostAxiosInterface,
    EditPostAxiosInterface, GetCommentsAxiosInterface,
    GetPostDataAxiosInterface,
    LikeCommentAxiosInterface, LikePostAxiosInterface,
    NewPostAxiosInterface, SetCommentAxiosInterface
} from "./postInterface";
import {BLOG, LOCALHOST} from "../urls";

export const Blog = {
    async GetPostsAxios() {
        try {
            const response = await axios.get(LOCALHOST + BLOG + `/user/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async NewPostAxios(data: NewPostAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + BLOG + '/post/create', {
                text: data.input_postText
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPostDataAxios(data: GetPostDataAxiosInterface) {
        try {
            const response = await axios.get(LOCALHOST + BLOG + `/post/${data.postId}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async EditPostAxios(data: EditPostAxiosInterface) {
        try {
            const response = await axios.put(LOCALHOST + BLOG + `/post`, {
                postId: data.postId,
                text: data.input_postText
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeletePostAxios(data: DeletePostAxiosInterface) {
        try {
            const response = await axios.delete(LOCALHOST + BLOG + `/post/${data.postId}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikePostAxios(data: LikePostAxiosInterface) {
        try {
            const response = await axios.put(LOCALHOST + BLOG + '/post/like', {
                postId: data.postId
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SetCommentAxios(data: SetCommentAxiosInterface) {
        try {
            const response = await axios.post(LOCALHOST + BLOG + '/comment/create', {
                postId: data.postId,
                text: data.input_comment
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCommentsAxios(data: GetCommentsAxiosInterface) {
        try {
            const response = await axios.get(LOCALHOST + BLOG + `/comment/${data.postId}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async LikeCommentAxios(data: LikeCommentAxiosInterface) {
        try {
            const response = await axios.put(LOCALHOST + BLOG + '/comment/like', {
                commentId: data.commentId
            }, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteCommentAxios(props: DeleteCommentAxiosInterface) {
        try {
            const response = await axios.delete(LOCALHOST + BLOG + `/comment/${props.commentId}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}