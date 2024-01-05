import axios from "axios";
import {
    DeleteAvatarPhotoAxiosInterface,
    DeleteCoverPhotoAxiosInterface, DeletePhotoPostAxiosInterface, GetPhotoAxiosInterface, GetPhotoCountAxiosInterface,
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
export const GetPhotoAxios = async (data: GetPhotoAxiosInterface) => {
     return axios.get(LOCALHOST + BLOG + `/photo/${data.id}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    return response.data
                }
            }
        }).catch(error => {
        switch (error.response.status) {
            case 403 : {
                //bad token
            }
        }
    })
}

export const DeleteAvatarPhotoAxios = (data: DeleteAvatarPhotoAxiosInterface) => {
    debugger
    axios.delete(LOCALHOST + FILE + '/social', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: {
            url: data.deleteAvatarUrl,
            source: 'AVATAR'
        }
    }).then(response => {
        data.setDeleteAvatarFlag(false)
    }).catch(error => {
        debugger
    })
}

export const SetAvatarAxios = (data: SetAvatarAxiosInterface) => {
    let formDataAvatar = new FormData()
    formDataAvatar.append('file', data.input_avatarUrl)
    formDataAvatar.append('url', 'undefined')
    formDataAvatar.append('source', 'AVATAR')

    axios.post(LOCALHOST + FILE + '/social', formDataAvatar, configFile)
        .then(response => {
            data.setAvatarUrl('')
        }).catch(error => {
        debugger
    })
}

export const DeleteCoverPhotoAxios = (data: DeleteCoverPhotoAxiosInterface) => {
    axios.delete(LOCALHOST + FILE + '/social', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: {
            url: data.deleteCoverUrl,
            source: 'COVER'
        }
    }).then(response => {
        data.setDeleteCoverFlag(false)
    }).catch(error => {
        debugger
    })
}

export const SetCoverAxios = (data: SetCoverAxiosInterface) => {
    let formDataCover = new FormData()
    formDataCover.append('file', data.input_coverUrl)
    formDataCover.append('url', 'undefined')
    formDataCover.append('source', 'COVER')

    axios.post(LOCALHOST + FILE + '/social', formDataCover, configFile)
        .then(response => {
            data.setCoverUrl('')
        }).catch(error => {
        debugger
    })
}

export const GetPhotoCountAxios = (data: GetPhotoCountAxiosInterface) => {
    axios.get(LOCALHOST + BLOG + `/photo/count/${localStorage.getItem('idUser')}`, config)
        .then(response => {
            switch (response.status) {
                case 200 : {
                    data.setCountPhoto(response.data)
                }
            }
        })
}

export const SetPostPhotoAxios = (data: SetPostPhotoAxiosInterface) => {
    debugger
    let formData = new FormData()
    formData.append('file', data.input_postPhoto.input_postPhoto)
    formData.append('postId', data.postId)
    axios.post(LOCALHOST + FILE + '/blog', formData, configFile)
        .then(response => {
            debugger
        }).catch(error => {
        debugger
        alert(error)
    })
}

export const DeletePhotoPostAxios = (data: DeletePhotoPostAxiosInterface) => {
    axios.delete(LOCALHOST + FILE + '/blog', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        data: {
            url: data.url,
            photoId: data.photoId,
            postId: data.postId
        }
    }).then(response => {
    }).catch(error => {
    })
}