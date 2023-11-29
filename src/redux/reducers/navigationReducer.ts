const BUTTON_MORE_SECTION = 'BUTTON_MORE_SECTION'

const initialState = {
    buttonMoreSection : false
}

const navigationReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case BUTTON_MORE_SECTION : {
            stateCopy.buttonMoreSection = action.buttonMoreSection
            return stateCopy
        }
        default:
            return stateCopy
    }
}

export const setButtonMoreSection = (buttonMoreSection : boolean) => {
    return {
        type: BUTTON_MORE_SECTION, buttonMoreSection
    }
}
export default navigationReducer