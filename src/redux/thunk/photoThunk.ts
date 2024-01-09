import {Dispatch} from "redux";
import {Photo} from "../../axios/photo/PhotoAxios";
import {setCountPhoto, setPhotoUrl} from "../reducers/photoReducer";
import {setCode, setIsFetching, setMessage} from "../reducers/authReducer";
import {setAvatarUrl, setCoverUrl, setDeleteAvatarFlag, setDeleteCoverFlag} from "../reducers/profileReducer";

export const GetPhotoCount = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.GetPhotoCountAxios().then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setCountPhoto(response[1]))
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const GetPhoto = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.GetPhotoAxios({
            id: localStorage.getItem('idUser') as string
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setPhotoUrl(response[1]))
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }

        })
    }
}

export const DeleteAvatar = (deleteAvatarUrl: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.DeleteAvatarPhotoAxios({
            deleteAvatarUrl: deleteAvatarUrl
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response) {
                case 200 : {
                    dispatch(setDeleteAvatarFlag(false))
                    break
                }
                case 400 : {
                    dispatch(setMessage('Плохое имя файла, выберите другой')) // todo мб сделать отдельные сообщения profile
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const SetAvatar = (input_avatarUrl: File) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.SetAvatarAxios( {
            input_avatarUrl: input_avatarUrl
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setAvatarUrl(response[1]))
                    break
                }
                case 400 : {
                    if (response[1] === 'File too big') {
                        dispatch(setMessage('Файл слишком большой'))
                    } else if (response[1] === 'Bad file name') {
                        dispatch(setMessage('Плохое имя файла, выберите другой'))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const DeleteCover = (deleteCoverUrl: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.DeleteCoverPhotoAxios({
            deleteCoverUrl: deleteCoverUrl
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response) {
                case 200 : {
                    dispatch(setDeleteCoverFlag(false))
                    break
                }
                case 400 : {
                    dispatch(setMessage('Плохое имя файла, выберите другой'))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}

export const SetCover = (input_coverUrl: File) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Photo.SetCoverAxios({
            input_coverUrl: input_coverUrl,
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setCoverUrl(response[1]))
                    break
                }
                case 400 : {
                    if (response[1] === 'File too big') {
                        dispatch(setMessage('Файл слишком большой'))
                    } else if (response[1] === 'Bad file name') {
                        dispatch(setMessage('Плохое имя файла, выберите другой'))
                    }
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
            }
        })
    }
}