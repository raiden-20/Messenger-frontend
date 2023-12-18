import {combineReducers,  legacy_createStore as createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import settingsReducer from "./reducers/settingsReducer";
import navigationReducer from "./reducers/navigationReducer";
import photoReducer from "./reducers/photoReducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    photo: photoReducer,
    users: usersReducer,
    settings: settingsReducer,
    navigation: navigationReducer
})

let reduxStore = createStore(reducers)

export default reduxStore