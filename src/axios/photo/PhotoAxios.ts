import axios from "axios";
import {
    DeleteAvatarPhotoAxiosInterface,
    DeleteCoverPhotoAxiosInterface, DeletePhotoPostAxiosInterface, GetPhotoAxiosInterface,
    SetAvatarAxiosInterface, SetCoverAxiosInterface, SetPostPhotoAxiosInterface
} from "./photoInterface";
import config from "../../paths/config";
import {BLOG, FILE, LOCALHOST} from "../urls";

const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'multipart/form-data; boundary=---------------------------123456789012345678901234567'
};

const configFile = {
    headers
}

export const Photo = {
    async GetPhotoAxios(data: GetPhotoAxiosInterface) {
        try {
            const response = await axios.get(LOCALHOST + BLOG + `/photo/${data.id}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAvatarPhotoAxios(data: DeleteAvatarPhotoAxiosInterface) {
        try {
            const response = await axios.delete(LOCALHOST + FILE + '/social', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    url: data.deleteAvatarUrl,
                    source: 'AVATAR'
                }
            });
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async SetAvatarAxios(data: SetAvatarAxiosInterface) {
        let formDataAvatar = new FormData()
        formDataAvatar.append('file', data.input_avatarUrl)
        formDataAvatar.append('url', 'undefined')
        formDataAvatar.append('source', 'AVATAR')

        try {
            const response = await axios.post(LOCALHOST + FILE + '/social', formDataAvatar, configFile);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteCoverPhotoAxios(data: DeleteCoverPhotoAxiosInterface) {
        try {
            const response = await axios.delete(LOCALHOST + FILE + '/social', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    url: data.deleteCoverUrl,
                    source: 'COVER'
                }
            });
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async SetCoverAxios(data: SetCoverAxiosInterface) {
        let formDataCover = new FormData()
        formDataCover.append('file', data.input_coverUrl)
        formDataCover.append('url', 'undefined')
        formDataCover.append('source', 'COVER')

        try {
            const response = await axios.post(LOCALHOST + FILE + '/social', formDataCover, configFile);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPhotoCountAxios() {
        try {
            const response = await axios.get(LOCALHOST + BLOG + `/photo/count/${localStorage.getItem('idUser')}`, config);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SetPostPhotoAxios(data: SetPostPhotoAxiosInterface) {
        let formData = new FormData()
        formData.append('file', data.input_postPhoto)
        formData.append('postId', data.postId)

        try {
            const response = await axios.post(LOCALHOST + FILE + '/blog', formData, configFile);
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeletePhotoPostAxios(data: DeletePhotoPostAxiosInterface) {
        try {
            const response = await axios.delete(LOCALHOST + FILE + '/blog', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    url: data.url,
                    photoId: data.photoId,
                    postId: data.postId
                }
            });
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}