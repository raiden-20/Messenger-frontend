import {Dispatch} from "redux";
import {Blog} from "../../axios/post/PostAxios";
import {
    addOneComment,
    addOnePost, deleteOneComment, deleteOnePost, setButtonCreatePostClick, setButtonEditPostClick,
    setComments, setInputPostAllPhotoDelete,
    setInputPostComment, setInputPostText, setMessage,
    setOneCommentCountPost, setOneCommentUserData, setOneLikeCommentPost, setOneLikeCountPost, setOnePost,
    setPosts
} from "../reducers/postReducer";
import {Comment} from "../interfaces/profile/post/comments";
import {Auth} from "../../axios/auth/AuthAxios";
import {Profile} from "../../axios/profile/ProfileAxios";
import {Post} from "../interfaces/profile/post/post";
import {PostPhoto} from "../interfaces/post/CreatePost";
import {Photo} from "../../axios/photo/PhotoAxios";
import {SetPhotoInterface} from "../../axios/photo/photoInterface";
import {setCode, setIsFetching} from "../reducers/authReducer";

export const GetPosts = () => {
    return (dispatch : Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.GetPostsAxios().then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200: {
                    dispatch(setPosts(response[1]))
                    break
                }
                case 400: {
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

export const GetOnePostData = (postId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.GetPostDataAxios({
            postId: postId
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200: {
                    let post = {
                        postId: response[1].postId,
                        time: response[1].time,
                        text: response[1].text,
                        photoUrl: response[1].photoUrl,
                        likeCount: response[1].likeCount,
                        commentCount: response[1].commentCount,
                        isLiked: response[1].isLiked
                    }
                    dispatch(setPosts([]))
                    dispatch(addOnePost(post))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                }
            }
        })
    }
}

export const EditPost = (postId: string, input_postText: string, input_postPhoto: SetPhotoInterface[], deletePhotoPostUrl: string[]) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.EditPostAxios({
            postId: postId,
            input_postText:  input_postText
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    let onePost: Post = {
                        postId: postId,
                        time: '1970-01-01',
                        text: input_postText,
                        photoUrl: [],
                        likeCount: '',
                        commentCount: '',
                        isLiked: false
                    }
                    Blog.GetPostDataAxios({
                        postId: postId
                    }).then(response => {
                        switch (response[0]) {
                            case 200: {
                                onePost.likeCount = response[1].likeCount
                                onePost.commentCount = response[1].commentCount
                                onePost.isLiked = response[1].isLiked

                                deletePhotoPostUrl.map((data: string) => {
                                    response[1].photoUrl.map((url: PostPhoto) => {
                                        if (data === url.url) {
                                            Photo.DeletePhotoPostAxios({
                                                url: data,
                                                photoId: url.photoId,
                                                postId: postId,
                                            }).then(response => {
                                                switch (response[0]) {
                                                    case 200 : {
                                                        //ok
                                                        break
                                                    }
                                                    case 400 : {
                                                        dispatch(setMessage('Плохое имя файла, выберите другой'))
                                                        break
                                                    }
                                                    case 401: {
                                                        // bad token
                                                        break
                                                    }
                                                }
                                            })
                                        }
                                    })
                                })
                                dispatch(setInputPostText(''))
                            }
                        }
                    })
                    for(let i = 0; i < input_postPhoto.length; i++) {
                        if (!input_postPhoto[i].flag) {
                            Photo.SetPostPhotoAxios({
                                input_postPhoto: input_postPhoto[i].input_postPhoto,
                                postId: postId
                            }).then(response => {
                                switch (response[0]) {
                                    case 200 : {
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
                                    case 401: {
                                        // bad token
                                        break
                                    }
                                }
                            })
                        }
                    }
                    setTimeout(() => {
                        Blog.GetPostDataAxios({
                            postId: postId
                        }).then(responseBlog => {
                            dispatch(setIsFetching(false))
                            switch (responseBlog[0]) {
                                case 200: {
                                    onePost.photoUrl = responseBlog[1].photoUrl
                                }
                            }
                        })
                    }, 5000)
                    dispatch(setOnePost(onePost))
                    dispatch(setInputPostAllPhotoDelete())
                    dispatch(setInputPostText(''))
                    dispatch(setButtonEditPostClick(postId, false))
                    dispatch(setMessage(''))

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

export const CreatePost = (input_postText: string, input_postPhoto: SetPhotoInterface[]) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.NewPostAxios({
            input_postText: input_postText
        }).then(response => {
            switch (response[0]) {
                case 200: {
                    dispatch(setInputPostText(''))
                    for(let i = 0; i < input_postPhoto.length; i++) {
                        Photo.SetPostPhotoAxios({
                            input_postPhoto: input_postPhoto[i].input_postPhoto,
                            postId: response[1]
                        }).then(response => {
                            switch (response[0]) {
                                case 200 : {
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
                                case 401: {
                                    // bad token
                                    break
                                }
                            }
                        })
                    }

                    setTimeout(() => {
                        Blog.GetPostDataAxios({
                            postId: response[1]
                        }).then(response => {
                            dispatch(setIsFetching(false))
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
                                    dispatch(addOnePost(onePost))
                                    dispatch(setButtonCreatePostClick(false))

                                }
                            }
                        })
                    }, 5000);
                    break
                }
                case 400: {
                    dispatch(setMessage('Лимит символов 1000'))
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

export const GetCommentsToPost = (postId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.GetCommentsAxios({
            postId: postId,
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setComments(response[1]))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
            }
        })
    }
}

export const SetComment = (postId: string, input_comment: string,
                           name: string, nickname: string, avatarUrl: string,
                           commentCount: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.SetCommentAxios({
            postId: postId,
            input_comment: input_comment
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    const now = new Date();
                    let dateString = now.toLocaleDateString();
                    const dateStringArr = dateString.split('.')
                    dateString = dateStringArr[2] + '-' + dateStringArr[1] + '-' + dateStringArr[0]

                    let oneComment: Comment = {
                        commentId: response[1],
                        userId: localStorage.getItem('id'),
                        text: input_comment,
                        time: dateString,
                        likeCount: '0',
                        isLiked: false,
                        name: name,
                        nickname: nickname,
                        avatarUrl: avatarUrl
                    }
                    dispatch(addOneComment(oneComment))
                    dispatch(setOneCommentCountPost(postId, (Number.parseInt(commentCount) + 1).toString()))
                    dispatch(setInputPostComment(''))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
            }
        })
    }
}

export const LikePost = (postId: string, isLiked: boolean, likeCount: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.LikePostAxios({
            postId: postId
        }).then(response => {
            dispatch(setIsFetching(false))

            switch (response[0]) {
                case 200: {

                    dispatch(setOneLikeCountPost(postId, isLiked ? (Number.parseInt(likeCount) - 1).toString() :
                        (Number.parseInt(likeCount) + 1).toString()))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400: {
                    dispatch(setCode(404))
                    break
                }
            }
        })
    }
}

export const LikeComment = (commentId: string, isLiked: boolean, likeCount: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.LikeCommentAxios({
            commentId: commentId
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200: {
                    dispatch(setOneLikeCommentPost(commentId, isLiked ? (Number.parseInt(likeCount) - 1).toString() :
                        (Number.parseInt(likeCount) + 1).toString()))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
            }
        })
    }
}

export const DeletePost = (postId: string) => {
    return (dispatch: Dispatch) =>{
        dispatch(setIsFetching(true))
        Blog.DeletePostAxios({
            postId: postId
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200: {
                    dispatch(deleteOnePost(postId))
                    break
                }
                case 400: {
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

export const DeleteComment = (commentId: string, postId: string, commentsCount: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Blog.DeleteCommentAxios({
            commentId: commentId
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(deleteOneComment(commentId))
                    dispatch(setOneCommentCountPost(postId, (Number.parseInt(commentsCount) - 1).toString()))
                    break
                }
                case 401 : {
                    localStorage.setItem('token', '')
                    break
                }
                case 400 : {
                    dispatch(setCode(404))
                    break
                }
            }
        })
    }
}

export const GetOneCommentData = (userId: string, commentId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Auth.AuthDataAxios({
            id: userId as string
        }).then(response => {
            switch (response[0]) {
                case 200 : {
                    Profile.ProfileGetDataAxios({
                        id: userId as string
                    }).then(responseSocial => {
                        dispatch(setIsFetching(false))
                        switch (responseSocial[0]) {
                            case 200 : {
                                dispatch(setOneCommentUserData(commentId, responseSocial[1].name,
                                    response[1].nickname, responseSocial[1].avatarUrl))
                                break
                            }
                            case 400: {
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

        })
    }
}