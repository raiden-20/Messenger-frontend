import {Component} from "react";
import {PropsEditPost, StateEditPost} from "../../../../../../redux/interfaces/profile/post/editPost";
import ProfileNewPostComponent from "../../profile/profile_new_post/ProfileNewPostComponent";
import {DeletePhotoPostAxios, SetPostPhotoAxios} from "../../../../../axios/photo/PhotoAxios";
import {EditPostAxios, GetPostDataAxios} from "../../../../../axios/post/PostAxios";
import {PostPhoto} from "../../../../../../redux/interfaces/post/CreatePost";
import {Post} from "../../../../../../redux/interfaces/profile/post/post";
class EditPostClass extends Component<PropsEditPost, StateEditPost> {
    deletePhotoPostUrl: string[] = []

    setDeletePhoto = (url: string) => {
        this.deletePhotoPostUrl.push(url)
    }

    setInputPostPhotoDelete = (index: number) => {
        this.setDeletePhoto(this.props.input_postPhotoUrl[index])
        this.props.setInputPostPhotoDelete(index)
    }

    setNewPost = () : boolean => { //edit post
        let postData = GetPostDataAxios({
            postId: this.props.postId
        })
        postData.then(response => {
            switch (response[0]) {
                case 200: {
                    this.deletePhotoPostUrl.map((data: string) => {
                        response[1].photoUrl.map((url: PostPhoto) => {
                            if (data === url.url) {
                                DeletePhotoPostAxios({
                                    url: data,
                                    photoId: url.photoId,
                                    postId: this.props.postId,
                                })
                            }
                        })
                    })
                    this.props.setInputPostText('')
                }
            }
        })
        let flag = false
        const a = EditPostAxios({
            postId: this.props.postId,
            input_postText: this.props.input_postText,
            input_postPhoto: this.props.input_postPhoto,
            setButtonCreatPostPressed: this.props.setButtonEditPostClick,
            setOnePost: this.props.setOnePost
        })
        a.then(response => {
            switch (response) {
                case 200 : {
                    flag = true
                    for(let i = 0; i < this.props.input_postPhoto.length; i++) {
                        if (!this.props.input_postPhoto[i].flag) {
                            SetPostPhotoAxios({
                                input_postPhoto: this.props.input_postPhoto[i],
                                postId:this.props.postId
                            })
                        }
                    }
                }
            }
        })
        let postData2 = GetPostDataAxios({
            postId: this.props.postId
        })

        postData2.then(responsePost => {
            debugger
            switch (responsePost[0]) {
                case 200: {
                    let onePost: Post = {
                        postId: responsePost[1].postId,
                        time: responsePost[1].time,
                        text: responsePost[1].text,
                        photoUrl: responsePost[1].photoUrl,
                        likeCount: responsePost[1].likeCount,
                        commentCount: responsePost[1].commentCount,
                        isLiked: responsePost[1].isLiked
                    }
                    this.props.setOnePost(onePost)
                    this.props.setButtonEditPostClick(false)
                }
            }
        })
        return flag
    }

    render() {
        return<ProfileNewPostComponent input_postPhoto={this.props.input_postPhoto}
                                       input_postPhotoUrl={this.props.input_postPhotoUrl}
                                       input_postText={this.props.input_postText}
                                       setInputPostPhoto={this.props.setInputPostPhoto}
                                       setInputPostText={this.props.setInputPostText}
                                       setInputPostPhotoUrl={this.props.setInputPostPhotoUrl}
                                       setInputPostPhotoDelete={this.setInputPostPhotoDelete}
                                       setInputPostAllPhotoDelete={this.props.setInputPostAllPhotoDelete}
                                       setButtonCreatPostPressed={this.props.setButtonEditPostClick}
                                       setNewPost={this.setNewPost}/>
    }
}

export default EditPostClass