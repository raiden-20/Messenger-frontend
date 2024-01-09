import {Dispatch} from "redux";
import {Profile} from "../../axios/profile/ProfileAxios";
import {setButtonSettingPressed, setMyData, setUserData} from "../reducers/profileReducer";
import {setCode, setIsFetching} from "../reducers/authReducer";

export const MyProfileData = () => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Profile.ProfileGetDataAxios({
            id: localStorage.getItem('id') as string
        }).then(responseSocial => {
            dispatch(setIsFetching(false))
            switch (responseSocial[0]) {
                case 200 : {
                    dispatch(setMyData(responseSocial[1].name, responseSocial[1].birthDate,
                        responseSocial[1].bio, responseSocial[1].avatarUrl,
                        responseSocial[1].coverUrl))
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

export const ProfileData = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Profile.ProfileGetDataAxios({
            id: id
        }).then(responseSocial => {
            debugger
            dispatch(setIsFetching(false))
            switch (responseSocial[0]) {
                case 200 : {
                    dispatch(setUserData(responseSocial[1].name, responseSocial[1].birthDate,
                        responseSocial[1].bio, responseSocial[1].avatarUrl,
                        responseSocial[1].coverUrl, responseSocial[1].status))
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

export const ChangeProfileData = (input_name: string, input_birthDate: string,
                                  input_bio: string, avatarUrl: string, coverUrl: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        Profile.ChangeProfileDataAxios({
            input_name: input_name,
            input_birthDate: input_birthDate,
            input_bio: input_bio
        }).then(response => {
            dispatch(setIsFetching(false))
            switch (response[0]) {
                case 200 : {
                    dispatch(setButtonSettingPressed(false))

                    setUserData(input_name, input_birthDate, input_bio, avatarUrl, coverUrl, '')
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