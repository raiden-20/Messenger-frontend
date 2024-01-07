export const PROFILE_USER : string = '/profile/' + localStorage.getItem('id')
export let PROFILE_OTHER_USER : string = '/profile/' + localStorage.getItem('idUser')

export const SET_NEW_URL_PROFILE = (newUrl : string) => {
    PROFILE_OTHER_USER = '/profile/' + newUrl
}